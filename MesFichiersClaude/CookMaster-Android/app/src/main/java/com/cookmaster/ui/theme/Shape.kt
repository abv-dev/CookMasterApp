package com.cookmaster.ui.theme

import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Shapes
import androidx.compose.ui.unit.dp

// MARK: - Shapes
val Shapes = Shapes(
    extraSmall = RoundedCornerShape(4.dp),
    small = RoundedCornerShape(8.dp),
    medium = RoundedCornerShape(12.dp),
    large = RoundedCornerShape(16.dp),
    extraLarge = RoundedCornerShape(24.dp)
)

// MARK: - Custom Shapes
object CookMasterShapes {
    val ExtraSmall = RoundedCornerShape(4.dp)
    val Small = RoundedCornerShape(8.dp)
    val Medium = RoundedCornerShape(12.dp)
    val Large = RoundedCornerShape(16.dp)
    val ExtraLarge = RoundedCornerShape(24.dp)
    val XXLarge = RoundedCornerShape(32.dp)

    val Top = RoundedCornerShape(topStart = 24.dp, topEnd = 24.dp)
    val Bottom = RoundedCornerShape(bottomStart = 24.dp, bottomEnd = 24.dp)
}
