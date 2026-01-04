package com.cookmaster.ui.home

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.hilt.navigation.compose.hiltViewModel
import com.cookmaster.data.models.MeatCategory
import java.text.SimpleDateFormat
import java.util.*

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun HomeScreen(
    viewModel: HomeViewModel = hiltViewModel(),
    onNavigateToCalculator: () -> Unit = {},
    onNavigateToTimer: () -> Unit = {},
    onNavigateToHistory: () -> Unit = {},
    onNavigateToMeat: (String) -> Unit = {}
) {
    val uiState by viewModel.uiState.collectAsState()

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("CookMaster") },
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = MaterialTheme.colorScheme.primary,
                    titleContentColor = MaterialTheme.colorScheme.onPrimary
                )
            )
        }
    ) { paddingValues ->
        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
                .background(MaterialTheme.colorScheme.background),
            contentPadding = PaddingValues(16.dp),
            verticalArrangement = Arrangement.spacedBy(20.dp)
        ) {
            // Welcome Header
            item {
                WelcomeHeader(userName = uiState.userName)
            }

            // Quick Actions
            item {
                QuickActionsSection(
                    onNewCooking = onNavigateToCalculator,
                    onTimer = onNavigateToTimer,
                    onHistory = onNavigateToHistory
                )
            }

            // Popular Meats
            item {
                SectionHeader(
                    title = "Viandes Populaires",
                    subtitle = "Sélectionnez votre viande"
                )
            }

            item {
                PopularMeatsRow(onMeatClick = onNavigateToMeat)
            }

            // Cooking Methods
            item {
                SectionHeader(
                    title = "Méthodes de Cuisson",
                    subtitle = "Choisissez votre technique"
                )
            }

            item {
                CookingMethodsGrid()
            }

            // Tips of the Day
            item {
                TipCard()
            }
        }
    }
}

@Composable
fun WelcomeHeader(userName: String) {
    Column(
        modifier = Modifier.fillMaxWidth()
    ) {
        Text(
            text = "Bonjour, $userName!",
            style = MaterialTheme.typography.headlineMedium,
            fontWeight = FontWeight.Bold,
            color = MaterialTheme.colorScheme.primary
        )
        Spacer(modifier = Modifier.height(4.dp))
        Text(
            text = "Prêt à cuisiner quelque chose de délicieux?",
            style = MaterialTheme.typography.bodyLarge,
            color = MaterialTheme.colorScheme.onBackground.copy(alpha = 0.7f)
        )
    }
}

@Composable
fun QuickActionsSection(
    onNewCooking: () -> Unit,
    onTimer: () -> Unit,
    onHistory: () -> Unit
) {
    Row(
        modifier = Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.spacedBy(12.dp)
    ) {
        QuickActionCard(
            modifier = Modifier.weight(1f),
            icon = Icons.Filled.Calculate,
            title = "Calculer",
            subtitle = "Temps de cuisson",
            onClick = onNewCooking,
            containerColor = MaterialTheme.colorScheme.primaryContainer
        )

        QuickActionCard(
            modifier = Modifier.weight(1f),
            icon = Icons.Filled.Timer,
            title = "Timer",
            subtitle = "Minuteur",
            onClick = onTimer,
            containerColor = MaterialTheme.colorScheme.secondaryContainer
        )
    }

    Spacer(modifier = Modifier.height(12.dp))

    QuickActionCard(
        modifier = Modifier.fillMaxWidth(),
        icon = Icons.Filled.History,
        title = "Historique de cuisson",
        subtitle = "Voir vos recettes précédentes",
        onClick = onHistory,
        containerColor = MaterialTheme.colorScheme.tertiaryContainer
    )
}

@Composable
fun QuickActionCard(
    modifier: Modifier = Modifier,
    icon: ImageVector,
    title: String,
    subtitle: String,
    onClick: () -> Unit,
    containerColor: androidx.compose.ui.graphics.Color
) {
    Card(
        modifier = modifier
            .height(120.dp)
            .clickable(onClick = onClick),
        shape = RoundedCornerShape(16.dp),
        colors = CardDefaults.cardColors(
            containerColor = containerColor
        ),
        elevation = CardDefaults.cardElevation(defaultElevation = 2.dp)
    ) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(16.dp),
            verticalArrangement = Arrangement.SpaceBetween
        ) {
            Icon(
                imageVector = icon,
                contentDescription = title,
                modifier = Modifier.size(32.dp),
                tint = MaterialTheme.colorScheme.primary
            )

            Column {
                Text(
                    text = title,
                    style = MaterialTheme.typography.titleMedium,
                    fontWeight = FontWeight.Bold,
                    color = MaterialTheme.colorScheme.onSurface
                )
                Text(
                    text = subtitle,
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.7f)
                )
            }
        }
    }
}

@Composable
fun SectionHeader(title: String, subtitle: String) {
    Column(
        modifier = Modifier.fillMaxWidth()
    ) {
        Text(
            text = title,
            style = MaterialTheme.typography.titleLarge,
            fontWeight = FontWeight.Bold,
            color = MaterialTheme.colorScheme.onBackground
        )
        Text(
            text = subtitle,
            style = MaterialTheme.typography.bodyMedium,
            color = MaterialTheme.colorScheme.onBackground.copy(alpha = 0.6f)
        )
    }
}

@Composable
fun PopularMeatsRow(onMeatClick: (String) -> Unit) {
    LazyRow(
        horizontalArrangement = Arrangement.spacedBy(12.dp)
    ) {
        items(MeatCategory.values()) { category ->
            MeatCategoryCard(
                category = category,
                onClick = { onMeatClick(category.value) }
            )
        }
    }
}

@Composable
fun MeatCategoryCard(
    category: MeatCategory,
    onClick: () -> Unit
) {
    Card(
        modifier = Modifier
            .width(140.dp)
            .height(160.dp)
            .clickable(onClick = onClick),
        shape = RoundedCornerShape(16.dp),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.surface
        ),
        elevation = CardDefaults.cardElevation(defaultElevation = 3.dp)
    ) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(16.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            // Icon/Emoji
            Text(
                text = category.icon,
                style = MaterialTheme.typography.displayMedium
            )

            Spacer(modifier = Modifier.height(12.dp))

            Text(
                text = category.displayName,
                style = MaterialTheme.typography.titleMedium,
                fontWeight = FontWeight.Bold,
                color = MaterialTheme.colorScheme.onSurface
            )
        }
    }
}

@Composable
fun CookingMethodsGrid() {
    val methods = listOf(
        "🔥" to "Four",
        "🍳" to "Poêle",
        "🔥" to "Barbecue",
        "💧" to "Sous-vide",
        "🥘" to "Mijoter",
        "⚡" to "Air Fryer"
    )

    Column(
        verticalArrangement = Arrangement.spacedBy(8.dp)
    ) {
        methods.chunked(3).forEach { rowMethods ->
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                rowMethods.forEach { (icon, name) ->
                    MethodChip(
                        modifier = Modifier.weight(1f),
                        icon = icon,
                        name = name
                    )
                }
                // Fill remaining space if row is not complete
                repeat(3 - rowMethods.size) {
                    Spacer(modifier = Modifier.weight(1f))
                }
            }
        }
    }
}

@Composable
fun MethodChip(
    modifier: Modifier = Modifier,
    icon: String,
    name: String
) {
    Surface(
        modifier = modifier
            .height(56.dp)
            .clickable { },
        shape = RoundedCornerShape(12.dp),
        color = MaterialTheme.colorScheme.surfaceVariant,
        tonalElevation = 1.dp
    ) {
        Row(
            modifier = Modifier
                .fillMaxSize()
                .padding(horizontal = 12.dp),
            horizontalArrangement = Arrangement.Center,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Text(
                text = icon,
                style = MaterialTheme.typography.titleMedium
            )
            Spacer(modifier = Modifier.width(6.dp))
            Text(
                text = name,
                style = MaterialTheme.typography.bodyMedium,
                fontWeight = FontWeight.Medium,
                color = MaterialTheme.colorScheme.onSurface
            )
        }
    }
}

@Composable
fun TipCard() {
    val tips = listOf(
        "Laissez toujours votre viande reposer après cuisson pour redistribuer les jus.",
        "Sortez la viande du réfrigérateur 30 minutes avant la cuisson.",
        "Utilisez un thermomètre pour vérifier la température à cœur.",
        "Pour un meilleur saisissement, séchez bien la viande avant cuisson.",
        "Ne piquez jamais la viande pendant la cuisson pour garder les jus."
    )

    val randomTip = remember { tips.random() }

    Card(
        modifier = Modifier.fillMaxWidth(),
        shape = RoundedCornerShape(16.dp),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.secondaryContainer
        )
    ) {
        Row(
            modifier = Modifier.padding(16.dp),
            horizontalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            Icon(
                imageVector = Icons.Filled.Lightbulb,
                contentDescription = "Tip",
                modifier = Modifier.size(32.dp),
                tint = MaterialTheme.colorScheme.secondary
            )

            Column {
                Text(
                    text = "Conseil du jour",
                    style = MaterialTheme.typography.titleSmall,
                    fontWeight = FontWeight.Bold,
                    color = MaterialTheme.colorScheme.onSecondaryContainer
                )
                Spacer(modifier = Modifier.height(4.dp))
                Text(
                    text = randomTip,
                    style = MaterialTheme.typography.bodyMedium,
                    color = MaterialTheme.colorScheme.onSecondaryContainer
                )
            }
        }
    }
}
