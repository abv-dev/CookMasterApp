import Foundation

struct FavoriteRecipe: Codable, Identifiable {
    let id: String
    let meatId: String
    let cutName: String
    let cookingMethod: String
    let createdAt: Date

    enum CodingKeys: String, CodingKey {
        case id = "_id"
        case meatId
        case cutName
        case cookingMethod
        case createdAt
    }
}
