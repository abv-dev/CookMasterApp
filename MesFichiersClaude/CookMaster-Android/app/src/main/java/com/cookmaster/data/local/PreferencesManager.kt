package com.cookmaster.data.local

import android.content.SharedPreferences
import com.cookmaster.data.models.User
import com.google.gson.Gson
import javax.inject.Inject
import javax.inject.Singleton

@Singleton
class PreferencesManager @Inject constructor(
    private val sharedPreferences: SharedPreferences
) {
    private val gson = Gson()

    companion object {
        private const val KEY_TOKEN = "auth_token"
        private const val KEY_USER = "user"
        private const val KEY_ONBOARDING_COMPLETED = "onboarding_completed"
        private const val KEY_TEMPERATURE_UNIT = "temperature_unit"
        private const val KEY_WEIGHT_UNIT = "weight_unit"
        private const val KEY_LANGUAGE = "language"
        private const val KEY_NOTIFICATIONS_ENABLED = "notifications_enabled"
        private const val KEY_SOUND_ENABLED = "sound_enabled"
    }

    // Token Management
    fun saveToken(token: String) {
        sharedPreferences.edit().putString(KEY_TOKEN, token).apply()
    }

    fun getToken(): String? {
        return sharedPreferences.getString(KEY_TOKEN, null)
    }

    fun deleteToken() {
        sharedPreferences.edit().remove(KEY_TOKEN).apply()
    }

    // User Management
    fun saveUser(user: User) {
        val userJson = gson.toJson(user)
        sharedPreferences.edit().putString(KEY_USER, userJson).apply()
    }

    fun getUser(): User? {
        val userJson = sharedPreferences.getString(KEY_USER, null)
        return userJson?.let { gson.fromJson(it, User::class.java) }
    }

    fun deleteUser() {
        sharedPreferences.edit().remove(KEY_USER).apply()
    }

    // Onboarding
    fun setOnboardingCompleted(completed: Boolean) {
        sharedPreferences.edit().putBoolean(KEY_ONBOARDING_COMPLETED, completed).apply()
    }

    fun hasCompletedOnboarding(): Boolean {
        return sharedPreferences.getBoolean(KEY_ONBOARDING_COMPLETED, false)
    }

    // Preferences
    fun setTemperatureUnit(unit: String) {
        sharedPreferences.edit().putString(KEY_TEMPERATURE_UNIT, unit).apply()
    }

    fun getTemperatureUnit(): String {
        return sharedPreferences.getString(KEY_TEMPERATURE_UNIT, "celsius") ?: "celsius"
    }

    fun setWeightUnit(unit: String) {
        sharedPreferences.edit().putString(KEY_WEIGHT_UNIT, unit).apply()
    }

    fun getWeightUnit(): String {
        return sharedPreferences.getString(KEY_WEIGHT_UNIT, "grams") ?: "grams"
    }

    fun setLanguage(language: String) {
        sharedPreferences.edit().putString(KEY_LANGUAGE, language).apply()
    }

    fun getLanguage(): String {
        return sharedPreferences.getString(KEY_LANGUAGE, "fr") ?: "fr"
    }

    fun setNotificationsEnabled(enabled: Boolean) {
        sharedPreferences.edit().putBoolean(KEY_NOTIFICATIONS_ENABLED, enabled).apply()
    }

    fun areNotificationsEnabled(): Boolean {
        return sharedPreferences.getBoolean(KEY_NOTIFICATIONS_ENABLED, true)
    }

    fun setSoundEnabled(enabled: Boolean) {
        sharedPreferences.edit().putBoolean(KEY_SOUND_ENABLED, enabled).apply()
    }

    fun isSoundEnabled(): Boolean {
        return sharedPreferences.getBoolean(KEY_SOUND_ENABLED, true)
    }

    // Clear all data
    fun clearAll() {
        sharedPreferences.edit().clear().apply()
    }
}
