package com.cookmaster.ui.theme

import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

// MARK: - Colors
// Color palette inspired by meat, cooking, grilling and warm tones
object CookMasterColors {
    // Primary Colors - Rich browns and warm tones (cooked meat, seared surfaces)
    val MeatBrown = Color(0xFF8B4513)        // Sienna brown - cooked meat
    val MeatBrownDark = Color(0xFF654321)    // Dark brown - well-done
    val MeatBrownLight = Color(0xFFA0522D)   // Light brown - medium

    // Secondary Colors - Fire and grill tones
    val FireOrange = Color(0xFFE07B39)       // Warm orange - flames
    val FireRed = Color(0xFFD84315)          // Red-orange - hot coals
    val GrillGray = Color(0xFF5D4E37)        // Charcoal gray

    // Background & Surface - Warm neutrals
    val Background = Color(0xFFFAF6F1)       // Cream/beige - butcher paper
    val Surface = Color(0xFFFFFFFF)          // White - clean surface
    val SurfaceVariant = Color(0xFFF5EBE0)   // Light tan

    // Accent Colors
    val RareRed = Color(0xFFD32F2F)          // Rare meat red
    val MediumRose = Color(0xFFE57373)       // Medium-rare pink
    val WellDoneBrown = Color(0xFF6D4C41)    // Well-done brown

    // Status Colors
    val Error = Color(0xFFC62828)
    val Success = Color(0xFF2E7D32)
    val Warning = Color(0xFFF57C00)
    val Info = Color(0xFF1976D2)

    // Text Colors
    val TextPrimary = Color(0xFF3E2723)      // Dark brown text
    val TextSecondary = Color(0xFF6D4C41)    // Medium brown
    val TextTertiary = Color(0xFF8D6E63)     // Light brown
    val TextDisabled = Color(0xFFBCAAA4)     // Very light brown

    // Special
    val Overlay = Color(0xCC000000)
    val Divider = Color(0x1F6D4C41)          // Brown divider
}

// MARK: - Light Color Scheme (default)
private val LightColorScheme = lightColorScheme(
    primary = CookMasterColors.MeatBrown,
    onPrimary = Color.White,
    primaryContainer = CookMasterColors.MeatBrownLight,
    onPrimaryContainer = CookMasterColors.MeatBrownDark,

    secondary = CookMasterColors.FireOrange,
    onSecondary = Color.White,
    secondaryContainer = CookMasterColors.FireRed,
    onSecondaryContainer = Color.White,

    tertiary = CookMasterColors.GrillGray,
    onTertiary = Color.White,
    tertiaryContainer = CookMasterColors.WellDoneBrown,
    onTertiaryContainer = Color.White,

    background = CookMasterColors.Background,
    onBackground = CookMasterColors.TextPrimary,

    surface = CookMasterColors.Surface,
    onSurface = CookMasterColors.TextPrimary,
    surfaceVariant = CookMasterColors.SurfaceVariant,
    onSurfaceVariant = CookMasterColors.TextSecondary,

    error = CookMasterColors.Error,
    onError = Color.White,

    outline = CookMasterColors.Divider,
    outlineVariant = CookMasterColors.TextDisabled
)

// MARK: - Dark Color Scheme (for night mode)
private val DarkColorScheme = darkColorScheme(
    primary = CookMasterColors.MeatBrownLight,
    onPrimary = Color.Black,
    primaryContainer = CookMasterColors.MeatBrownDark,
    onPrimaryContainer = CookMasterColors.MeatBrownLight,

    secondary = CookMasterColors.FireOrange,
    onSecondary = Color.Black,
    secondaryContainer = CookMasterColors.FireRed,
    onSecondaryContainer = Color.White,

    tertiary = CookMasterColors.MediumRose,
    onTertiary = Color.White,
    tertiaryContainer = CookMasterColors.RareRed,
    onTertiaryContainer = Color.White,

    background = Color(0xFF2C1810),
    onBackground = Color(0xFFFAF6F1),

    surface = Color(0xFF3E2723),
    onSurface = Color(0xFFFAF6F1),
    surfaceVariant = Color(0xFF4E342E),
    onSurfaceVariant = Color(0xFFBCAAA4),

    error = CookMasterColors.Error,
    onError = Color.White,

    outline = Color(0x1FFAF6F1),
    outlineVariant = Color(0xFF6D4C41)
)

// MARK: - Theme
@Composable
fun CookMasterTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    content: @Composable () -> Unit
) {
    val colorScheme = if (darkTheme) {
        DarkColorScheme
    } else {
        LightColorScheme
    }

    MaterialTheme(
        colorScheme = colorScheme,
        typography = Typography,
        shapes = Shapes,
        content = content
    )
}

// MARK: - Color Extensions
val MaterialTheme.extraColors: ExtraColors
    @Composable
    get() = ExtraColors(
        success = CookMasterColors.Success,
        warning = CookMasterColors.Warning,
        info = CookMasterColors.Info,
        overlay = CookMasterColors.Overlay
    )

data class ExtraColors(
    val success: Color,
    val warning: Color,
    val info: Color,
    val overlay: Color
)
