import Foundation

struct CookingHistory: Codable, Identifiable {
    let id: String
    let userId: String
    let meatId: String
    let cutName: String
    let cookingMethod: String
    let weight: Double
    let actualCookingTime: Int
    let targetDoneness: String
    let notes: String?
    let rating: Int?
    let photoUrl: String?
    let createdAt: Date
    let updatedAt: Date

    enum CodingKeys: String, CodingKey {
        case id = "_id"
        case userId
        case meatId
        case cutName
        case cookingMethod
        case weight
        case actualCookingTime
        case targetDoneness
        case notes
        case rating
        case photoUrl
        case createdAt
        case updatedAt
    }
}
