package com.cookmaster.ui.home

import androidx.lifecycle.ViewModel
import com.cookmaster.data.repository.CookMasterRepository
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import javax.inject.Inject

data class HomeUiState(
    val isLoading: Boolean = false,
    val userName: String = "Chef"
)

@HiltViewModel
class HomeViewModel @Inject constructor(
    private val repository: CookMasterRepository
) : ViewModel() {

    private val _uiState = MutableStateFlow(HomeUiState())
    val uiState: StateFlow<HomeUiState> = _uiState.asStateFlow()

    init {
        // Load initial data
    }
}
