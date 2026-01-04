import Foundation

// MARK: - Meat
struct Meat: Codable, Identifiable {
    let id: String
    let category: MeatCategory
    let name: String
    let nameEn: String?
    let description: String?
    let cuts: [MeatCut]
    let createdAt: Date?
    let updatedAt: Date?

    enum CodingKeys: String, CodingKey {
        case id = "_id"
        case category, name, nameEn, description, cuts, createdAt, updatedAt
    }
}

// MARK: - Meat Category
enum MeatCategory: String, Codable, CaseIterable {
    case boeuf = "boeuf"
    case porc = "porc"
    case agneau = "agneau"
    case veau = "veau"
    case volaille = "volaille"
    case gibier = "gibier"

    var displayName: String {
        switch self {
        case .boeuf: return "Bœuf"
        case .porc: return "Porc"
        case .agneau: return "Agneau"
        case .veau: return "Veau"
        case .volaille: return "Volaille"
        case .gibier: return "Gibier"
        }
    }

    var icon: String {
        switch self {
        case .boeuf: return "🥩"
        case .porc: return "🐖"
        case .agneau: return "🐑"
        case .veau: return "🐄"
        case .volaille: return "🐔"
        case .gibier: return "🦌"
        }
    }
}

// MARK: - Meat Cut
struct MeatCut: Codable, Identifiable {
    let id: String
    let name: String
    let nameEn: String?
    let description: String?
    let typicalWeight: WeightRange?
    let typicalDimensions: Dimensions?
    let recommendations: String?
    let temperatures: [CookingTemperature]
    let cookingMethods: [CookingMethodInfo]

    enum CodingKeys: String, CodingKey {
        case id = "_id"
        case name, nameEn, description, typicalWeight, typicalDimensions
        case recommendations, temperatures, cookingMethods
    }
}

// MARK: - Weight Range
struct WeightRange: Codable {
    let min: Double
    let max: Double
    let unit: String
}

// MARK: - Dimensions
struct Dimensions: Codable {
    let length: Double?
    let width: Double?
    let height: Double?
    let unit: String
}

// MARK: - Cooking Temperature
struct CookingTemperature: Codable, Identifiable {
    var id: String { doneness }

    let doneness: String
    let coreTemperature: Double
    let safetyTemperature: Double?
    let description: String

    var displayDoneness: String {
        doneness.capitalized
    }

    var temperatureColor: String {
        switch coreTemperature {
        case 0..<45: return "TempBlue"
        case 45..<55: return "TempRed"
        case 55..<65: return "TempOrange"
        default: return "TempYellow"
        }
    }
}

// MARK: - Cooking Method Info
struct CookingMethodInfo: Codable, Identifiable {
    var id: String { method.rawValue }

    let method: CookingMethod
    let cookingTemperature: Double
    let baseTimePerKg: Double
    let baseTimePerCm: Double?
    let adjustmentFactor: Double
    let restingTime: Double
}

// MARK: - Cooking Method
enum CookingMethod: String, Codable, CaseIterable {
    // Four
    case fourTraditionnel = "four_traditionnel"
    case fourConvection = "four_convection"
    case fourVapeur = "four_vapeur"
    case fourChaleurTournante = "four_chaleur_tournante"

    // Poêle/Plancha
    case poele = "poele"
    case plancha = "plancha"
    case wok = "wok"
    case sauteuse = "sauteuse"

    // Grillades
    case grill = "grill"
    case barbecueCharbon = "barbecue_charbon"
    case barbecueGaz = "barbecue_gaz"
    case barbecueElectrique = "barbecue_electrique"
    case salamandre = "salamandre"

    // Mijotées
    case cocotte = "cocotte"
    case mijoteuse = "mijoteuse"
    case braisage = "braisage"
    case ragout = "ragout"

    // Basse température
    case sousVide = "sous_vide"
    case basseTemperature = "basse_temperature"

    // Rôtissage
    case rotissoire = "rotissoire"
    case rotissoireVerticale = "rotissoire_verticale"

    // Vapeur
    case vapeur = "vapeur"
    case courtBouillon = "court_bouillon"
    case pochage = "pochage"

    // Rapides
    case saisie = "saisie"
    case flambe = "flambe"

    // Fumage
    case fumoirChaud = "fumoir_chaud"
    case fumoirFroid = "fumoir_froid"

    // Spéciales
    case airFryer = "air_fryer"
    case microOndes = "micro_ondes"
    case pierreChaude = "pierre_chaude"

    // Traditionnelles
    case tajine = "tajine"
    case papillote = "papillote"
    case crouteSel = "croute_sel"
    case crouteArgile = "croute_argile"

    // Professionnelles
    case planchaProfessionnelle = "plancha_professionnelle"
    case grillPierreDeLave = "grill_pierre_de_lave"
    case grillSalamandre = "grill_salamandre"

    var displayName: String {
        switch self {
        case .fourTraditionnel: return "Four traditionnel"
        case .fourConvection: return "Four à convection"
        case .fourVapeur: return "Four vapeur"
        case .fourChaleurTournante: return "Four chaleur tournante"
        case .poele: return "Poêle"
        case .plancha: return "Plancha"
        case .wok: return "Wok"
        case .sauteuse: return "Sauteuse"
        case .grill: return "Grill"
        case .barbecueCharbon: return "Barbecue au charbon"
        case .barbecueGaz: return "Barbecue au gaz"
        case .barbecueElectrique: return "Barbecue électrique"
        case .salamandre: return "Salamandre"
        case .cocotte: return "Cocotte"
        case .mijoteuse: return "Mijoteuse"
        case .braisage: return "Braisage"
        case .ragout: return "Ragoût"
        case .sousVide: return "Sous-vide"
        case .basseTemperature: return "Basse température"
        case .rotissoire: return "Rôtissoire"
        case .rotissoireVerticale: return "Rôtissoire verticale"
        case .vapeur: return "Vapeur"
        case .courtBouillon: return "Court-bouillon"
        case .pochage: return "Pochage"
        case .saisie: return "Saisie"
        case .flambe: return "Flambé"
        case .fumoirChaud: return "Fumoir chaud"
        case .fumoirFroid: return "Fumoir froid"
        case .airFryer: return "Air fryer"
        case .microOndes: return "Micro-ondes"
        case .pierreChaude: return "Pierre chaude"
        case .tajine: return "Tajine"
        case .papillote: return "Papillote"
        case .crouteSel: return "Croûte de sel"
        case .crouteArgile: return "Croûte d'argile"
        case .planchaProfessionnelle: return "Plancha professionnelle"
        case .grillPierreDeLave: return "Grill pierre de lave"
        case .grillSalamandre: return "Grill salamandre"
        }
    }

    var icon: String {
        switch self {
        case .fourTraditionnel, .fourConvection, .fourVapeur, .fourChaleurTournante:
            return "🔥"
        case .poele, .plancha, .wok, .sauteuse:
            return "🍳"
        case .grill, .barbecueCharbon, .barbecueGaz, .barbecueElectrique, .salamandre:
            return "🔥"
        case .cocotte, .mijoteuse, .braisage, .ragout:
            return "🍲"
        case .sousVide, .basseTemperature:
            return "🌡️"
        case .rotissoire, .rotissoireVerticale:
            return "🍗"
        case .vapeur, .courtBouillon, .pochage:
            return "♨️"
        case .saisie, .flambe:
            return "⚡"
        case .fumoirChaud, .fumoirFroid:
            return "💨"
        case .airFryer:
            return "🌪️"
        case .microOndes:
            return "📡"
        case .pierreChaude, .tajine, .papillote, .crouteSel, .crouteArgile:
            return "🏺"
        default:
            return "🔧"
        }
    }

    var category: String {
        switch self {
        case .fourTraditionnel, .fourConvection, .fourVapeur, .fourChaleurTournante:
            return "Four"
        case .poele, .plancha, .wok, .sauteuse:
            return "Poêle/Plancha"
        case .grill, .barbecueCharbon, .barbecueGaz, .barbecueElectrique, .salamandre:
            return "Grillades"
        case .cocotte, .mijoteuse, .braisage, .ragout:
            return "Mijotées"
        case .sousVide, .basseTemperature:
            return "Basse température"
        case .rotissoire, .rotissoireVerticale:
            return "Rôtissage"
        case .vapeur, .courtBouillon, .pochage:
            return "Vapeur"
        case .saisie, .flambe:
            return "Rapides"
        case .fumoirChaud, .fumoirFroid:
            return "Fumage"
        case .airFryer, .microOndes, .pierreChaude:
            return "Spéciales"
        case .tajine, .papillote, .crouteSel, .crouteArgile:
            return "Traditionnelles"
        case .planchaProfessionnelle, .grillPierreDeLave, .grillSalamandre:
            return "Professionnelles"
        }
    }
}

// MARK: - Mock Data
extension Meat {
    static var preview: Meat {
        Meat(
            id: "1",
            category: .boeuf,
            name: "Bœuf",
            nameEn: "Beef",
            description: "Viande de bœuf riche et savoureuse",
            cuts: [MeatCut.preview],
            createdAt: Date(),
            updatedAt: Date()
        )
    }
}

extension MeatCut {
    static var preview: MeatCut {
        MeatCut(
            id: "1",
            name: "Filet",
            nameEn: "Tenderloin",
            description: "Morceau le plus tendre",
            typicalWeight: WeightRange(min: 0.4, max: 2.0, unit: "kg"),
            typicalDimensions: Dimensions(length: 30, width: 8, height: 8, unit: "cm"),
            recommendations: "Cuisson rapide recommandée",
            temperatures: [
                CookingTemperature(
                    doneness: "saignant",
                    coreTemperature: 50,
                    safetyTemperature: 52,
                    description: "Centre rouge et tiède"
                ),
                CookingTemperature(
                    doneness: "à point",
                    coreTemperature: 55,
                    safetyTemperature: 57,
                    description: "Centre rosé et chaud"
                )
            ],
            cookingMethods: [
                CookingMethodInfo(
                    method: .poele,
                    cookingTemperature: 180,
                    baseTimePerKg: 15,
                    baseTimePerCm: 3,
                    adjustmentFactor: 1.0,
                    restingTime: 5
                )
            ]
        )
    }
}
