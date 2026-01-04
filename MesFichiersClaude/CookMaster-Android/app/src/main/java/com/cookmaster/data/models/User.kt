package com.cookmaster.data.models

import com.google.gson.annotations.SerializedName

// MARK: - User
data class User(
    @SerializedName("_id")
    val id: String,
    val name: String,
    val email: String,
    val preferences: UserPreferences? = null,
    val createdAt: String? = null,
    val updatedAt: String? = null
)

// MARK: - User Preferences
data class UserPreferences(
    val temperatureUnit: TemperatureUnit = TemperatureUnit.CELSIUS,
    val weightUnit: WeightUnit = WeightUnit.GRAMS,
    val dimensionUnit: DimensionUnit = DimensionUnit.CENTIMETERS,
    val language: String = "fr",
    val notificationsEnabled: Boolean = true,
    val soundEnabled: Boolean = true
)

// MARK: - Temperature Unit
enum class TemperatureUnit(val value: String, val displayName: String, val symbol: String) {
    @SerializedName("celsius")
    CELSIUS("celsius", "Celsius", "°C"),

    @SerializedName("fahrenheit")
    FAHRENHEIT("fahrenheit", "Fahrenheit", "°F");

    companion object {
        fun fromValue(value: String): TemperatureUnit {
            return values().find { it.value == value } ?: CELSIUS
        }
    }
}

// MARK: - Weight Unit
enum class WeightUnit(val value: String, val displayName: String, val symbol: String) {
    @SerializedName("grams")
    GRAMS("grams", "Grammes", "g"),

    @SerializedName("kilograms")
    KILOGRAMS("kilograms", "Kilogrammes", "kg"),

    @SerializedName("pounds")
    POUNDS("pounds", "Livres", "lb"),

    @SerializedName("ounces")
    OUNCES("ounces", "Onces", "oz");

    companion object {
        fun fromValue(value: String): WeightUnit {
            return values().find { it.value == value } ?: GRAMS
        }
    }
}

// MARK: - Dimension Unit
enum class DimensionUnit(val value: String, val displayName: String, val symbol: String) {
    @SerializedName("centimeters")
    CENTIMETERS("centimeters", "Centimètres", "cm"),

    @SerializedName("inches")
    INCHES("inches", "Pouces", "in");

    companion object {
        fun fromValue(value: String): DimensionUnit {
            return values().find { it.value == value } ?: CENTIMETERS
        }
    }
}

// MARK: - Login Request
data class LoginRequest(
    val email: String,
    val password: String
)

// MARK: - Login Response
data class LoginResponse(
    val token: String,
    val user: User
)

// MARK: - Register Request
data class RegisterRequest(
    val name: String,
    val email: String,
    val password: String
)

// MARK: - Register Response
data class RegisterResponse(
    val token: String,
    val user: User
)

// MARK: - Verify Token Response
data class VerifyTokenResponse(
    val user: User
)

// MARK: - Update Preferences Request
data class UpdatePreferencesRequest(
    val preferences: UserPreferences
)
