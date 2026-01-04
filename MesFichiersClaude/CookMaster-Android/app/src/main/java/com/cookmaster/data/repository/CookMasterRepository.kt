package com.cookmaster.data.repository

import com.cookmaster.data.api.ApiService
import com.cookmaster.data.local.PreferencesManager
import com.cookmaster.data.models.*
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import javax.inject.Inject
import javax.inject.Singleton

@Singleton
class CookMasterRepository @Inject constructor(
    private val apiService: ApiService,
    private val preferencesManager: PreferencesManager
) {

    // MARK: - Authentication

    suspend fun login(email: String, password: String): Result<LoginResponse> = withContext(Dispatchers.IO) {
        try {
            val response = apiService.login(LoginRequest(email, password))
            if (response.isSuccessful && response.body() != null) {
                val loginResponse = response.body()!!
                preferencesManager.saveToken(loginResponse.token)
                preferencesManager.saveUser(loginResponse.user)
                Result.success(loginResponse)
            } else {
                Result.failure(Exception("Login failed: ${response.message()}"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    suspend fun register(name: String, email: String, password: String): Result<RegisterResponse> = withContext(Dispatchers.IO) {
        try {
            val response = apiService.register(RegisterRequest(name, email, password))
            if (response.isSuccessful && response.body() != null) {
                val registerResponse = response.body()!!
                preferencesManager.saveToken(registerResponse.token)
                preferencesManager.saveUser(registerResponse.user)
                Result.success(registerResponse)
            } else {
                Result.failure(Exception("Registration failed: ${response.message()}"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    suspend fun verifyToken(): Result<User> = withContext(Dispatchers.IO) {
        try {
            val response = apiService.verifyToken()
            if (response.isSuccessful && response.body() != null) {
                val user = response.body()!!.user
                preferencesManager.saveUser(user)
                Result.success(user)
            } else {
                Result.failure(Exception("Token verification failed"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    fun logout() {
        preferencesManager.deleteToken()
        preferencesManager.deleteUser()
    }

    fun getCurrentUser(): User? {
        return preferencesManager.getUser()
    }

    fun isAuthenticated(): Boolean {
        return preferencesManager.getToken() != null
    }

    // MARK: - Meats

    suspend fun getMeats(): Result<List<Meat>> = withContext(Dispatchers.IO) {
        try {
            val response = apiService.getMeats()
            if (response.isSuccessful && response.body() != null) {
                Result.success(response.body()!!)
            } else {
                Result.failure(Exception("Failed to load meats"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    suspend fun getMeatById(id: String): Result<Meat> = withContext(Dispatchers.IO) {
        try {
            val response = apiService.getMeatById(id)
            if (response.isSuccessful && response.body() != null) {
                Result.success(response.body()!!)
            } else {
                Result.failure(Exception("Failed to load meat"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    suspend fun getMeatsByCategory(category: String): Result<List<Meat>> = withContext(Dispatchers.IO) {
        try {
            val response = apiService.getMeatsByCategory(category)
            if (response.isSuccessful && response.body() != null) {
                Result.success(response.body()!!)
            } else {
                Result.failure(Exception("Failed to load meats by category"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    // MARK: - Cooking Calculation

    suspend fun calculateCookingTime(parameters: CookingParameters): Result<CookingResult> = withContext(Dispatchers.IO) {
        try {
            val response = apiService.calculateCookingTime(parameters)
            if (response.isSuccessful && response.body() != null) {
                Result.success(response.body()!!)
            } else {
                Result.failure(Exception("Calculation failed: ${response.message()}"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    // MARK: - History

    suspend fun getCookingHistory(): Result<List<CookingHistory>> = withContext(Dispatchers.IO) {
        try {
            val response = apiService.getCookingHistory()
            if (response.isSuccessful && response.body() != null) {
                Result.success(response.body()!!.history)
            } else {
                Result.failure(Exception("Failed to load history"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    suspend fun saveCookingHistory(result: CookingResult, notes: String? = null): Result<CookingHistory> = withContext(Dispatchers.IO) {
        try {
            val response = apiService.saveCookingHistory(SaveHistoryRequest(result, notes))
            if (response.isSuccessful && response.body() != null) {
                Result.success(response.body()!!.history)
            } else {
                Result.failure(Exception("Failed to save history"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    suspend fun deleteCookingHistory(id: String): Result<Unit> = withContext(Dispatchers.IO) {
        try {
            val response = apiService.deleteCookingHistory(id)
            if (response.isSuccessful) {
                Result.success(Unit)
            } else {
                Result.failure(Exception("Failed to delete history"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    suspend fun toggleFavorite(id: String): Result<CookingHistory> = withContext(Dispatchers.IO) {
        try {
            val response = apiService.toggleFavorite(id)
            if (response.isSuccessful && response.body() != null) {
                Result.success(response.body()!!)
            } else {
                Result.failure(Exception("Failed to toggle favorite"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    // MARK: - User Profile

    suspend fun getUserProfile(): Result<User> = withContext(Dispatchers.IO) {
        try {
            val response = apiService.getUserProfile()
            if (response.isSuccessful && response.body() != null) {
                val user = response.body()!!
                preferencesManager.saveUser(user)
                Result.success(user)
            } else {
                Result.failure(Exception("Failed to load profile"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    suspend fun updatePreferences(preferences: UserPreferences): Result<User> = withContext(Dispatchers.IO) {
        try {
            val response = apiService.updatePreferences(UpdatePreferencesRequest(preferences))
            if (response.isSuccessful && response.body() != null) {
                val user = response.body()!!
                preferencesManager.saveUser(user)
                Result.success(user)
            } else {
                Result.failure(Exception("Failed to update preferences"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    // MARK: - Stats

    suspend fun getUserStats(): Result<UserStats> = withContext(Dispatchers.IO) {
        try {
            val response = apiService.getUserStats()
            if (response.isSuccessful && response.body() != null) {
                Result.success(response.body()!!)
            } else {
                Result.failure(Exception("Failed to load stats"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    // MARK: - Preferences

    fun hasCompletedOnboarding(): Boolean {
        return preferencesManager.hasCompletedOnboarding()
    }

    fun setOnboardingCompleted() {
        preferencesManager.setOnboardingCompleted(true)
    }
}
