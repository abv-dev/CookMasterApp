import Foundation

struct CookingParameters: Codable {
    let meatId: String
    let cutName: String
    let weight: Double
    let thickness: Double?
    let cookingMethod: String
    let targetDoneness: String
    let cookingTemperature: Int?

    enum CodingKeys: String, CodingKey {
        case meatId
        case cutName
        case weight
        case thickness
        case cookingMethod
        case targetDoneness
        case cookingTemperature
    }
}
