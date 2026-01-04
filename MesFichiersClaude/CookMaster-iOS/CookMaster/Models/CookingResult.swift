import Foundation

// MARK: - Cooking Parameters (Request)
struct CookingParameters: Codable {
    let meatId: String
    let cutName: String
    let cookingMethod: String
    let weight: WeightData?
    let dimensions: DimensionData?
    let cookingTemperature: TemperatureData?
    let targetDoneness: String
    let userPreferences: UserPreferences?
}

struct WeightData: Codable {
    let value: Double
    let unit: String
}

struct DimensionData: Codable {
    let thickness: Double?
    let length: Double?
    let width: Double?
    let unit: String
}

struct TemperatureData: Codable {
    let value: Double
    let unit: String
}

// MARK: - Cooking Result (Response)
struct CookingResult: Codable, Identifiable {
    var id = UUID()

    let calculation: CalculationResult
    let meatInfo: MeatInfo
    let cookingInfo: CookingInfo
    let targetInfo: TargetInfo
    let recommendations: String?

    enum CodingKeys: String, CodingKey {
        case calculation, meatInfo, cookingInfo, targetInfo, recommendations
    }
}

struct CalculationResult: Codable {
    let cookingTime: Int // minutes
    let restingTime: Int // minutes
    let totalTime: Int // minutes
    let estimatedEndTime: Date
    let confidence: Int // 0-100%
}

struct MeatInfo: Codable {
    let category: String
    let name: String
    let cut: String
}

struct CookingInfo: Codable {
    let method: String
    let cookingTemperature: Double
    let temperatureUnit: String
}

struct TargetInfo: Codable {
    let doneness: String
    let coreTemperature: Double
    let temperatureUnit: String
    let description: String
}

// MARK: - Cooking History
struct CookingHistory: Codable, Identifiable {
    let id: String
    let userId: String
    let meatCategory: String
    let meatName: String
    let cutName: String
    let cookingMethod: String
    let parameters: HistoryParameters
    let calculatedCookingTime: Int
    let actualCookingTime: Int?
    let restingTime: Int
    let rating: Int?
    let notes: String?
    let photos: [String]?
    let success: Bool
    let date: Date
    let createdAt: Date?
    let updatedAt: Date?

    enum CodingKeys: String, CodingKey {
        case id = "_id"
        case userId, meatCategory, meatName, cutName, cookingMethod
        case parameters, calculatedCookingTime, actualCookingTime, restingTime
        case rating, notes, photos, success, date, createdAt, updatedAt
    }
}

struct HistoryParameters: Codable {
    let weight: WeightData?
    let dimensions: DimensionData?
    let cookingTemperature: Double?
    let targetDoneness: String?
    let targetCoreTemperature: Double?
}

// MARK: - Create History Request
struct CreateHistoryRequest: Codable {
    let meatCategory: String
    let meatName: String
    let cutName: String
    let cookingMethod: String
    let parameters: HistoryParameters
    let calculatedCookingTime: Int
    let actualCookingTime: Int?
    let restingTime: Int
    let rating: Int?
    let notes: String?
    let photos: [String]?
    let success: Bool
}

// MARK: - Mock Data
extension CookingResult {
    static var preview: CookingResult {
        CookingResult(
            calculation: CalculationResult(
                cookingTime: 18,
                restingTime: 5,
                totalTime: 23,
                estimatedEndTime: Date().addingTimeInterval(23 * 60),
                confidence: 95
            ),
            meatInfo: MeatInfo(
                category: "boeuf",
                name: "Bœuf",
                cut: "Filet"
            ),
            cookingInfo: CookingInfo(
                method: "poele",
                cookingTemperature: 180,
                temperatureUnit: "celsius"
            ),
            targetInfo: TargetInfo(
                doneness: "à point",
                coreTemperature: 55,
                temperatureUnit: "celsius",
                description: "Centre rosé et chaud"
            ),
            recommendations: "Sortez la viande 30 minutes avant cuisson"
        )
    }
}

extension CookingHistory {
    static var preview: CookingHistory {
        CookingHistory(
            id: "1",
            userId: "user1",
            meatCategory: "boeuf",
            meatName: "Bœuf",
            cutName: "Filet",
            cookingMethod: "poele",
            parameters: HistoryParameters(
                weight: WeightData(value: 0.5, unit: "kg"),
                dimensions: DimensionData(thickness: 3, length: nil, width: nil, unit: "cm"),
                cookingTemperature: 180,
                targetDoneness: "à point",
                targetCoreTemperature: 55
            ),
            calculatedCookingTime: 18,
            actualCookingTime: 19,
            restingTime: 5,
            rating: 5,
            notes: "Parfait! Viande tendre et juteuse",
            photos: nil,
            success: true,
            date: Date(),
            createdAt: Date(),
            updatedAt: Date()
        )
    }
}
