package com.cookmaster.ui.explorer

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.cookmaster.data.models.Meat
import com.cookmaster.data.models.MeatCategory

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ExplorerScreen(
    onMeatClick: (String) -> Unit = {}
) {
    var selectedCategory by remember { mutableStateOf<MeatCategory?>(null) }
    var searchQuery by remember { mutableStateOf("") }

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Explorer les Viandes") },
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = MaterialTheme.colorScheme.primary,
                    titleContentColor = MaterialTheme.colorScheme.onPrimary
                )
            )
        }
    ) { paddingValues ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
                .background(MaterialTheme.colorScheme.background)
        ) {
            // Search Bar
            SearchBar(
                query = searchQuery,
                onQueryChange = { searchQuery = it },
                modifier = Modifier.padding(16.dp)
            )

            // Category Filters
            CategoryFilterRow(
                selectedCategory = selectedCategory,
                onCategorySelected = { selectedCategory = it }
            )

            // Meat List
            MeatCatalogList(
                category = selectedCategory,
                searchQuery = searchQuery,
                onMeatClick = onMeatClick
            )
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun SearchBar(
    query: String,
    onQueryChange: (String) -> Unit,
    modifier: Modifier = Modifier
) {
    OutlinedTextField(
        value = query,
        onValueChange = onQueryChange,
        modifier = modifier.fillMaxWidth(),
        placeholder = { Text("Rechercher une viande...") },
        leadingIcon = {
            Icon(
                imageVector = Icons.Filled.Search,
                contentDescription = "Search"
            )
        },
        trailingIcon = {
            if (query.isNotEmpty()) {
                IconButton(onClick = { onQueryChange("") }) {
                    Icon(
                        imageVector = Icons.Filled.Clear,
                        contentDescription = "Clear"
                    )
                }
            }
        },
        singleLine = true,
        shape = RoundedCornerShape(12.dp),
        colors = OutlinedTextFieldDefaults.colors(
            focusedBorderColor = MaterialTheme.colorScheme.primary,
            unfocusedBorderColor = MaterialTheme.colorScheme.outline
        )
    )
}

@Composable
fun CategoryFilterRow(
    selectedCategory: MeatCategory?,
    onCategorySelected: (MeatCategory?) -> Unit
) {
    LazyColumn(
        modifier = Modifier.padding(horizontal = 16.dp),
        verticalArrangement = Arrangement.spacedBy(8.dp)
    ) {
        // All category
        item {
            FilterChip(
                selected = selectedCategory == null,
                onClick = { onCategorySelected(null) },
                label = { Text("Toutes") },
                leadingIcon = {
                    if (selectedCategory == null) {
                        Icon(
                            imageVector = Icons.Filled.Check,
                            contentDescription = null,
                            modifier = Modifier.size(18.dp)
                        )
                    }
                }
            )
        }

        // Category chips
        items(MeatCategory.values()) { category ->
            FilterChip(
                selected = selectedCategory == category,
                onClick = { onCategorySelected(category) },
                label = { Text("${category.icon} ${category.displayName}") },
                leadingIcon = {
                    if (selectedCategory == category) {
                        Icon(
                            imageVector = Icons.Filled.Check,
                            contentDescription = null,
                            modifier = Modifier.size(18.dp)
                        )
                    }
                }
            )
        }
    }
}

@Composable
fun MeatCatalogList(
    category: MeatCategory?,
    searchQuery: String,
    onMeatClick: (String) -> Unit
) {
    // Sample meat data
    val sampleMeats = listOf(
        SampleMeat("1", "Entrecôte", MeatCategory.BEEF, "Morceau tendre et savoureux"),
        SampleMeat("2", "Filet mignon", MeatCategory.BEEF, "Le plus tendre des morceaux"),
        SampleMeat("3", "Côtelettes", MeatCategory.PORK, "Parfaites pour le grill"),
        SampleMeat("4", "Épaule", MeatCategory.LAMB, "Idéale pour le four"),
        SampleMeat("5", "Poulet entier", MeatCategory.POULTRY, "Rôti au four traditionnel"),
        SampleMeat("6", "Escalope", MeatCategory.VEAL, "Fine et délicate"),
        SampleMeat("7", "Magret de canard", MeatCategory.GAME, "Saveur unique"),
        SampleMeat("8", "Côte de bœuf", MeatCategory.BEEF, "Pour les grandes occasions"),
        SampleMeat("9", "Travers de porc", MeatCategory.PORK, "Excellent au barbecue"),
        SampleMeat("10", "Gigot", MeatCategory.LAMB, "Classique des fêtes")
    )

    val filteredMeats = sampleMeats.filter { meat ->
        (category == null || meat.category == category) &&
        (searchQuery.isEmpty() || meat.name.contains(searchQuery, ignoreCase = true))
    }

    if (filteredMeats.isEmpty()) {
        Box(
            modifier = Modifier.fillMaxSize(),
            contentAlignment = Alignment.Center
        ) {
            Column(
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                Icon(
                    imageVector = Icons.Filled.SearchOff,
                    contentDescription = null,
                    modifier = Modifier.size(64.dp),
                    tint = MaterialTheme.colorScheme.onBackground.copy(alpha = 0.4f)
                )
                Text(
                    text = "Aucune viande trouvée",
                    style = MaterialTheme.typography.bodyLarge,
                    color = MaterialTheme.colorScheme.onBackground.copy(alpha = 0.6f)
                )
            }
        }
    } else {
        LazyColumn(
            contentPadding = PaddingValues(16.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            items(filteredMeats) { meat ->
                MeatCard(
                    meat = meat,
                    onClick = { onMeatClick(meat.id) }
                )
            }
        }
    }
}

@Composable
fun MeatCard(
    meat: SampleMeat,
    onClick: () -> Unit
) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .clickable(onClick = onClick),
        shape = RoundedCornerShape(16.dp),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.surface
        ),
        elevation = CardDefaults.cardElevation(defaultElevation = 2.dp)
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            horizontalArrangement = Arrangement.spacedBy(16.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            // Icon
            Surface(
                modifier = Modifier.size(64.dp),
                shape = RoundedCornerShape(12.dp),
                color = MaterialTheme.colorScheme.primaryContainer
            ) {
                Box(
                    contentAlignment = Alignment.Center
                ) {
                    Text(
                        text = meat.category.icon,
                        style = MaterialTheme.typography.headlineLarge
                    )
                }
            }

            // Content
            Column(
                modifier = Modifier.weight(1f)
            ) {
                Text(
                    text = meat.name,
                    style = MaterialTheme.typography.titleMedium,
                    fontWeight = FontWeight.Bold,
                    color = MaterialTheme.colorScheme.onSurface
                )
                Spacer(modifier = Modifier.height(4.dp))
                Text(
                    text = meat.description,
                    style = MaterialTheme.typography.bodyMedium,
                    color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.7f)
                )
                Spacer(modifier = Modifier.height(4.dp))
                Text(
                    text = meat.category.displayName,
                    style = MaterialTheme.typography.labelSmall,
                    color = MaterialTheme.colorScheme.primary
                )
            }

            // Arrow
            Icon(
                imageVector = Icons.Filled.ChevronRight,
                contentDescription = "Details",
                tint = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.4f)
            )
        }
    }
}

// Sample data class for meats
data class SampleMeat(
    val id: String,
    val name: String,
    val category: MeatCategory,
    val description: String
)
