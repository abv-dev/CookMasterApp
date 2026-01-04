package com.cookmaster.data.models

import com.google.gson.annotations.SerializedName

// MARK: - Meat
data class Meat(
    @SerializedName("_id")
    val id: String,
    val name: String,
    val category: MeatCategory,
    val description: String? = null,
    val cuts: List<Cut> = emptyList(),
    val imageUrl: String? = null
)

// MARK: - Meat Category
enum class MeatCategory(val value: String, val displayName: String, val icon: String) {
    @SerializedName("boeuf")
    BEEF("boeuf", "Bœuf", "🥩"),

    @SerializedName("porc")
    PORK("porc", "Porc", "🥓"),

    @SerializedName("agneau")
    LAMB("agneau", "Agneau", "🐑"),

    @SerializedName("volaille")
    POULTRY("volaille", "Volaille", "🍗"),

    @SerializedName("veau")
    VEAL("veau", "Veau", "🥩"),

    @SerializedName("gibier")
    GAME("gibier", "Gibier", "🦌");

    companion object {
        fun fromValue(value: String): MeatCategory? {
            return values().find { it.value == value }
        }
    }
}

// MARK: - Cut
data class Cut(
    @SerializedName("_id")
    val id: String? = null,
    val name: String,
    val description: String? = null,
    val temperatures: List<Temperature> = emptyList(),
    val cookingMethods: List<CookingMethodInfo> = emptyList(),
    val imageUrl: String? = null
)

// MARK: - Temperature
data class Temperature(
    val doneness: String,
    val coreTemperature: Double,
    val safetyTemperature: Double,
    val description: String,
    @SerializedName("_id")
    val id: String? = null
)

// MARK: - Cooking Method Info
data class CookingMethodInfo(
    val method: String,
    val recommendedOvenTemp: Int? = null,
    val estimatedTimePerKg: Int,
    @SerializedName("_id")
    val id: String? = null
)

// MARK: - Cooking Method
enum class CookingMethod(val value: String, val displayName: String) {
    @SerializedName("four_traditionnel")
    OVEN_TRADITIONAL("four_traditionnel", "Four traditionnel"),

    @SerializedName("four_chaleur_tournante")
    OVEN_CONVECTION("four_chaleur_tournante", "Four chaleur tournante"),

    @SerializedName("four_vapeur")
    OVEN_STEAM("four_vapeur", "Four vapeur"),

    @SerializedName("poele")
    PAN("poele", "Poêle"),

    @SerializedName("plancha")
    PLANCHA("plancha", "Plancha"),

    @SerializedName("wok")
    WOK("wok", "Wok"),

    @SerializedName("grill")
    GRILL("grill", "Grill"),

    @SerializedName("grill_electrique")
    ELECTRIC_GRILL("grill_electrique", "Grill électrique"),

    @SerializedName("barbecue_charbon")
    BBQ_CHARCOAL("barbecue_charbon", "Barbecue charbon"),

    @SerializedName("barbecue_gaz")
    BBQ_GAS("barbecue_gaz", "Barbecue gaz"),

    @SerializedName("sous_vide")
    SOUS_VIDE("sous_vide", "Sous-vide"),

    @SerializedName("mijoter")
    SIMMER("mijoter", "Mijoter"),

    @SerializedName("cuire_a_leau")
    BOIL("cuire_a_leau", "Cuire à l'eau"),

    @SerializedName("cocotte")
    DUTCH_OVEN("cocotte", "Cocotte"),

    @SerializedName("friture")
    DEEP_FRY("friture", "Friture"),

    @SerializedName("rotisserie")
    ROTISSERIE("rotisserie", "Rôtisserie"),

    @SerializedName("fumage_chaud")
    HOT_SMOKE("fumage_chaud", "Fumage chaud"),

    @SerializedName("fumage_froid")
    COLD_SMOKE("fumage_froid", "Fumage froid"),

    @SerializedName("pierre_chaude")
    HOT_STONE("pierre_chaude", "Pierre chaude"),

    @SerializedName("air_fryer")
    AIR_FRYER("air_fryer", "Air fryer");

    companion object {
        fun fromValue(value: String): CookingMethod? {
            return values().find { it.value == value }
        }
    }

    fun getIcon(): String {
        return when (this) {
            OVEN_TRADITIONAL, OVEN_CONVECTION, OVEN_STEAM -> "🔥"
            PAN, PLANCHA, WOK -> "🍳"
            GRILL, ELECTRIC_GRILL, BBQ_CHARCOAL, BBQ_GAS -> "🔥"
            SOUS_VIDE -> "💧"
            SIMMER, BOIL, DUTCH_OVEN -> "🥘"
            DEEP_FRY -> "🍤"
            ROTISSERIE -> "🍗"
            HOT_SMOKE, COLD_SMOKE -> "💨"
            HOT_STONE -> "🪨"
            AIR_FRYER -> "⚡"
        }
    }
}
