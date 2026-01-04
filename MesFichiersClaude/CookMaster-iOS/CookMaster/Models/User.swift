import Foundation

// MARK: - User
struct User: Codable, Identifiable {
    let id: String
    let email: String
    let name: String
    let preferences: UserPreferences
    let favoriteRecipes: [FavoriteRecipe]?
    let createdAt: Date?

    enum CodingKeys: String, CodingKey {
        case id = "_id"
        case email, name, preferences, favoriteRecipes, createdAt
    }
}

// MARK: - User Preferences
struct UserPreferences: Codable {
    var temperatureUnit: TemperatureUnit
    var weightUnit: WeightUnit
    var dimensionUnit: DimensionUnit
    var defaultDoneness: String
    var enableNotifications: Bool
    var timerSound: String

    init() {
        self.temperatureUnit = .celsius
        self.weightUnit = .kg
        self.dimensionUnit = .cm
        self.defaultDoneness = "à point"
        self.enableNotifications = true
        self.timerSound = "default"
    }
}

enum TemperatureUnit: String, Codable, CaseIterable {
    case celsius = "celsius"
    case fahrenheit = "fahrenheit"

    var symbol: String {
        switch self {
        case .celsius: return "°C"
        case .fahrenheit: return "°F"
        }
    }
}

enum WeightUnit: String, Codable, CaseIterable {
    case kg = "kg"
    case lbs = "lbs"

    var symbol: String { rawValue }
}

enum DimensionUnit: String, Codable, CaseIterable {
    case cm = "cm"
    case inches = "inches"

    var symbol: String {
        switch self {
        case .cm: return "cm"
        case .inches: return "\""
        }
    }
}

// MARK: - Favorite Recipe
struct FavoriteRecipe: Codable, Identifiable {
    let id: String
    let meatId: String
    let cutName: String
    let cookingMethod: String

    enum CodingKeys: String, CodingKey {
        case id = "_id"
        case meatId, cutName, cookingMethod
    }
}

// MARK: - Login Request/Response
struct LoginRequest: Codable {
    let email: String
    let password: String
}

struct LoginResponse: Codable {
    let message: String
    let token: String
    let user: User
}

struct RegisterRequest: Codable {
    let email: String
    let password: String
    let name: String
}

// MARK: - Mock Data
extension User {
    static var preview: User {
        User(
            id: "1",
            email: "user@example.com",
            name: "Chef Test",
            preferences: UserPreferences(),
            favoriteRecipes: [],
            createdAt: Date()
        )
    }
}
