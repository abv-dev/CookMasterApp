import Foundation

struct CreateHistoryRequest: Codable {
    let meatId: String
    let cutName: String
    let cookingMethod: String
    let weight: Double
    let actualCookingTime: Int
    let targetDoneness: String
    let notes: String?
    let rating: Int?

    enum CodingKeys: String, CodingKey {
        case meatId
        case cutName
        case cookingMethod
        case weight
        case actualCookingTime
        case targetDoneness
        case notes
        case rating
    }
}
