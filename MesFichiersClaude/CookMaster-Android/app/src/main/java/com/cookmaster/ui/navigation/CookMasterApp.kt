package com.cookmaster.ui.navigation

import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.painterResource
import androidx.navigation.NavDestination.Companion.hierarchy
import androidx.navigation.NavGraph.Companion.findStartDestination
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import com.cookmaster.R
import com.cookmaster.ui.home.HomeScreen
import com.cookmaster.ui.explorer.ExplorerScreen
import com.cookmaster.ui.timer.TimerScreen
import com.cookmaster.ui.community.CommunityScreen
import com.cookmaster.ui.profile.ProfileScreen

sealed class Screen(val route: String, val title: String, val icon: Int) {
    object Home : Screen("home", "Home", R.drawable.ic_home)
    object Explorer : Screen("explorer", "Explorer", R.drawable.ic_explorer)
    object Timer : Screen("timer", "Timer", R.drawable.ic_timer)
    object Community : Screen("community", "Community", R.drawable.ic_community)
    object Profile : Screen("profile", "Profile", R.drawable.ic_profile)
}

val bottomNavItems = listOf(
    Screen.Home,
    Screen.Explorer,
    Screen.Timer,
    Screen.Community,
    Screen.Profile
)

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun CookMasterApp() {
    val navController = rememberNavController()
    val navBackStackEntry by navController.currentBackStackEntryAsState()
    val currentDestination = navBackStackEntry?.destination

    Scaffold(
        bottomBar = {
            NavigationBar {
                bottomNavItems.forEach { screen ->
                    val selected = currentDestination?.hierarchy?.any { it.route == screen.route } == true
                    NavigationBarItem(
                        icon = {
                            Icon(
                                painter = painterResource(id = screen.icon),
                                contentDescription = screen.title
                            )
                        },
                        label = { Text(screen.title) },
                        selected = selected,
                        onClick = {
                            navController.navigate(screen.route) {
                                popUpTo(navController.graph.findStartDestination().id) {
                                    saveState = true
                                }
                                launchSingleTop = true
                                restoreState = true
                            }
                        }
                    )
                }
            }
        }
    ) { innerPadding ->
        NavHost(
            navController = navController,
            startDestination = Screen.Home.route,
            modifier = Modifier.padding(innerPadding)
        ) {
            composable(Screen.Home.route) { HomeScreen() }
            composable(Screen.Explorer.route) { ExplorerScreen() }
            composable(Screen.Timer.route) { TimerScreen() }
            composable(Screen.Community.route) { CommunityScreen() }
            composable(Screen.Profile.route) { ProfileScreen() }
        }
    }
}
