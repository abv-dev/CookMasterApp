package com.cookmaster.data.models

import com.google.gson.annotations.SerializedName
import java.util.Date

// MARK: - Cooking Parameters (Request)
data class CookingParameters(
    val meatId: String,
    val cutName: String,
    val weight: Double,
    val thickness: Double? = null,
    val initialTemperature: Double,
    val doneness: String,
    val method: String,
    val equipment: String = "standard",
    val altitude: Int? = null,
    val humidity: Int? = null,
    val ovenTemperature: Int? = null
)

// MARK: - Cooking Result (Response)
data class CookingResult(
    val calculation: Calculation,
    val meat: MeatInfo,
    val cookingInfo: CookingInfo
)

// MARK: - Calculation
data class Calculation(
    val cookingTime: Int, // in minutes
    val targetTemperature: Double,
    val safetyTemperature: Double,
    val restingTime: Int,
    val instructions: List<String>,
    val tips: List<String>
)

// MARK: - Meat Info
data class MeatInfo(
    @SerializedName("_id")
    val id: String,
    val name: String,
    val category: MeatCategory
)

// MARK: - Cooking Info
data class CookingInfo(
    val method: CookingMethod,
    val doneness: String,
    val weight: Double,
    val thickness: Double? = null,
    val initialTemperature: Double,
    val ovenTemperature: Int? = null
)

// MARK: - Cooking History
data class CookingHistory(
    @SerializedName("_id")
    val id: String,
    val userId: String,
    val date: Date,
    val result: CookingResult?,
    val notes: String? = null,
    val isFavorite: Boolean = false,
    val rating: Int? = null,
    val photoUrl: String? = null
)

// MARK: - Save History Request
data class SaveHistoryRequest(
    val result: CookingResult,
    val notes: String? = null,
    val rating: Int? = null
)

// MARK: - Save History Response
data class SaveHistoryResponse(
    val history: CookingHistory
)

// MARK: - Get History Response
data class GetHistoryResponse(
    val history: List<CookingHistory>
)
