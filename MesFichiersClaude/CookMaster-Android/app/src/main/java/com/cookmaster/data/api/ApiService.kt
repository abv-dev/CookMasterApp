package com.cookmaster.data.api

import com.cookmaster.data.models.*
import retrofit2.Response
import retrofit2.http.*

interface ApiService {

    // MARK: - Authentication

    @POST("auth/login")
    suspend fun login(@Body request: LoginRequest): Response<LoginResponse>

    @POST("auth/register")
    suspend fun register(@Body request: RegisterRequest): Response<RegisterResponse>

    @GET("auth/verify")
    suspend fun verifyToken(): Response<VerifyTokenResponse>

    // MARK: - Meats

    @GET("meats")
    suspend fun getMeats(): Response<List<Meat>>

    @GET("meats/{id}")
    suspend fun getMeatById(@Path("id") id: String): Response<Meat>

    @GET("meats/category/{category}")
    suspend fun getMeatsByCategory(@Path("category") category: String): Response<List<Meat>>

    // MARK: - Cooking Calculation

    @POST("cooking/calculate")
    suspend fun calculateCookingTime(@Body parameters: CookingParameters): Response<CookingResult>

    // MARK: - History

    @GET("history")
    suspend fun getCookingHistory(): Response<GetHistoryResponse>

    @GET("history/{id}")
    suspend fun getHistoryById(@Path("id") id: String): Response<CookingHistory>

    @POST("history")
    suspend fun saveCookingHistory(@Body request: SaveHistoryRequest): Response<SaveHistoryResponse>

    @DELETE("history/{id}")
    suspend fun deleteCookingHistory(@Path("id") id: String): Response<Unit>

    @PUT("history/{id}/favorite")
    suspend fun toggleFavorite(@Path("id") id: String): Response<CookingHistory>

    // MARK: - User

    @GET("user/profile")
    suspend fun getUserProfile(): Response<User>

    @PUT("user/preferences")
    suspend fun updatePreferences(@Body request: UpdatePreferencesRequest): Response<User>

    // MARK: - Stats

    @GET("stats/summary")
    suspend fun getUserStats(): Response<UserStats>
}

// MARK: - User Stats
data class UserStats(
    val totalCookings: Int,
    val totalMinutes: Int,
    val favoriteMeat: String?,
    val successRate: Double,
    val perfectCookings: Int
)
