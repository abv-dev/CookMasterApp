import Foundation
import Combine

// MARK: - API Service
class APIService {
    static let shared = APIService()

    private let baseURL: String
    private let session: URLSession
    private var cancellables = Set<AnyCancellable>()

    init() {
        // Load from Config or use default
        self.baseURL = APIConfig.baseURL
        self.session = URLSession.shared
    }

    // MARK: - Authentication

    func register(email: String, password: String, name: String) -> AnyPublisher<LoginResponse, Error> {
        let request = RegisterRequest(email: email, password: password, name: name)
        return post(endpoint: "/auth/register", body: request)
    }

    func login(email: String, password: String) -> AnyPublisher<LoginResponse, Error> {
        let request = LoginRequest(email: email, password: password)
        return post(endpoint: "/auth/login", body: request)
    }

    func verifyToken() -> AnyPublisher<User, Error> {
        return get(endpoint: "/auth/verify", authenticated: true)
            .map { (response: VerifyResponse) in response.user }
            .eraseToAnyPublisher()
    }

    // MARK: - Meats

    func getMeats() -> AnyPublisher<[Meat], Error> {
        return get(endpoint: "/meats")
    }

    func getCategories() -> AnyPublisher<[String], Error> {
        return get(endpoint: "/meats/categories")
    }

    func getMeatsByCategory(_ category: String) -> AnyPublisher<[Meat], Error> {
        return get(endpoint: "/meats/category/\(category)")
    }

    func getMeatById(_ id: String) -> AnyPublisher<Meat, Error> {
        return get(endpoint: "/meats/\(id)")
    }

    // MARK: - Cooking

    func calculateCookingTime(parameters: CookingParameters) -> AnyPublisher<CookingResult, Error> {
        return post(endpoint: "/cooking/calculate", body: parameters)
    }

    func getCookingMethods() -> AnyPublisher<[CookingMethodDescription], Error> {
        return get(endpoint: "/cooking/methods")
    }

    // MARK: - History

    func getHistory(limit: Int = 50, skip: Int = 0) -> AnyPublisher<HistoryResponse, Error> {
        return get(endpoint: "/history?limit=\(limit)&skip=\(skip)", authenticated: true)
    }

    func createHistory(_ history: CreateHistoryRequest) -> AnyPublisher<CreateHistoryResponse, Error> {
        return post(endpoint: "/history", body: history, authenticated: true)
    }

    func deleteHistory(_ id: String) -> AnyPublisher<DeleteResponse, Error> {
        return delete(endpoint: "/history/\(id)", authenticated: true)
    }

    // MARK: - User

    func getUserProfile() -> AnyPublisher<User, Error> {
        return get(endpoint: "/user/profile", authenticated: true)
    }

    func updatePreferences(_ preferences: UserPreferences) -> AnyPublisher<PreferencesResponse, Error> {
        return put(endpoint: "/user/preferences", body: preferences, authenticated: true)
    }

    func addFavorite(meatId: String, cutName: String, cookingMethod: String) -> AnyPublisher<FavoriteResponse, Error> {
        let request = ["meatId": meatId, "cutName": cutName, "cookingMethod": cookingMethod]
        return post(endpoint: "/user/favorites", body: request, authenticated: true)
    }

    func removeFavorite(_ id: String) -> AnyPublisher<DeleteResponse, Error> {
        return delete(endpoint: "/user/favorites/\(id)", authenticated: true)
    }

    // MARK: - Generic Request Methods

    private func get<T: Decodable>(endpoint: String, authenticated: Bool = false) -> AnyPublisher<T, Error> {
        guard let url = URL(string: baseURL + endpoint) else {
            return Fail(error: APIError.invalidURL).eraseToAnyPublisher()
        }

        var request = URLRequest(url: url)
        request.httpMethod = "GET"
        request.addValue("application/json", forHTTPHeaderField: "Content-Type")

        if authenticated, let token = KeychainManager.shared.getToken() {
            request.addValue("Bearer \(token)", forHTTPHeaderField: "Authorization")
        }

        return session.dataTaskPublisher(for: request)
            .tryMap { data, response -> Data in
                guard let httpResponse = response as? HTTPURLResponse else {
                    throw APIError.invalidResponse
                }

                guard (200...299).contains(httpResponse.statusCode) else {
                    throw APIError.httpError(httpResponse.statusCode)
                }

                return data
            }
            .decode(type: T.self, decoder: JSONDecoder.apiDecoder)
            .receive(on: DispatchQueue.main)
            .eraseToAnyPublisher()
    }

    private func post<T: Encodable, R: Decodable>(
        endpoint: String,
        body: T,
        authenticated: Bool = false
    ) -> AnyPublisher<R, Error> {
        guard let url = URL(string: baseURL + endpoint) else {
            return Fail(error: APIError.invalidURL).eraseToAnyPublisher()
        }

        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.addValue("application/json", forHTTPHeaderField: "Content-Type")

        if authenticated, let token = KeychainManager.shared.getToken() {
            request.addValue("Bearer \(token)", forHTTPHeaderField: "Authorization")
        }

        do {
            request.httpBody = try JSONEncoder().encode(body)
        } catch {
            return Fail(error: APIError.encodingError).eraseToAnyPublisher()
        }

        return session.dataTaskPublisher(for: request)
            .tryMap { data, response -> Data in
                guard let httpResponse = response as? HTTPURLResponse else {
                    throw APIError.invalidResponse
                }

                guard (200...299).contains(httpResponse.statusCode) else {
                    throw APIError.httpError(httpResponse.statusCode)
                }

                return data
            }
            .decode(type: R.self, decoder: JSONDecoder.apiDecoder)
            .receive(on: DispatchQueue.main)
            .eraseToAnyPublisher()
    }

    private func put<T: Encodable, R: Decodable>(
        endpoint: String,
        body: T,
        authenticated: Bool = false
    ) -> AnyPublisher<R, Error> {
        guard let url = URL(string: baseURL + endpoint) else {
            return Fail(error: APIError.invalidURL).eraseToAnyPublisher()
        }

        var request = URLRequest(url: url)
        request.httpMethod = "PUT"
        request.addValue("application/json", forHTTPHeaderField: "Content-Type")

        if authenticated, let token = KeychainManager.shared.getToken() {
            request.addValue("Bearer \(token)", forHTTPHeaderField: "Authorization")
        }

        do {
            request.httpBody = try JSONEncoder().encode(body)
        } catch {
            return Fail(error: APIError.encodingError).eraseToAnyPublisher()
        }

        return session.dataTaskPublisher(for: request)
            .tryMap { data, response -> Data in
                guard let httpResponse = response as? HTTPURLResponse else {
                    throw APIError.invalidResponse
                }

                guard (200...299).contains(httpResponse.statusCode) else {
                    throw APIError.httpError(httpResponse.statusCode)
                }

                return data
            }
            .decode(type: R.self, decoder: JSONDecoder.apiDecoder)
            .receive(on: DispatchQueue.main)
            .eraseToAnyPublisher()
    }

    private func delete<R: Decodable>(
        endpoint: String,
        authenticated: Bool = false
    ) -> AnyPublisher<R, Error> {
        guard let url = URL(string: baseURL + endpoint) else {
            return Fail(error: APIError.invalidURL).eraseToAnyPublisher()
        }

        var request = URLRequest(url: url)
        request.httpMethod = "DELETE"
        request.addValue("application/json", forHTTPHeaderField: "Content-Type")

        if authenticated, let token = KeychainManager.shared.getToken() {
            request.addValue("Bearer \(token)", forHTTPHeaderField: "Authorization")
        }

        return session.dataTaskPublisher(for: request)
            .tryMap { data, response -> Data in
                guard let httpResponse = response as? HTTPURLResponse else {
                    throw APIError.invalidResponse
                }

                guard (200...299).contains(httpResponse.statusCode) else {
                    throw APIError.httpError(httpResponse.statusCode)
                }

                return data
            }
            .decode(type: R.self, decoder: JSONDecoder.apiDecoder)
            .receive(on: DispatchQueue.main)
            .eraseToAnyPublisher()
    }
}

// MARK: - API Error
enum APIError: LocalizedError {
    case invalidURL
    case invalidResponse
    case httpError(Int)
    case encodingError
    case decodingError
    case networkError
    case unauthorized

    var errorDescription: String? {
        switch self {
        case .invalidURL:
            return "URL invalide"
        case .invalidResponse:
            return "Réponse invalide du serveur"
        case .httpError(let code):
            return "Erreur HTTP: \(code)"
        case .encodingError:
            return "Erreur d'encodage des données"
        case .decodingError:
            return "Erreur de décodage des données"
        case .networkError:
            return "Erreur réseau"
        case .unauthorized:
            return "Non autorisé"
        }
    }
}

// MARK: - Response Models
struct VerifyResponse: Codable {
    let valid: Bool
    let user: User
}

struct HistoryResponse: Codable {
    let history: [CookingHistory]
    let pagination: Pagination
}

struct Pagination: Codable {
    let total: Int
    let limit: Int
    let skip: Int
    let hasMore: Bool
}

struct CreateHistoryResponse: Codable {
    let message: String
    let history: CookingHistory
}

struct DeleteResponse: Codable {
    let message: String
}

struct PreferencesResponse: Codable {
    let message: String
    let preferences: UserPreferences
}

struct FavoriteResponse: Codable {
    let message: String
    let favoriteRecipes: [FavoriteRecipe]
}

struct CookingMethodDescription: Codable {
    let id: String
    let name: String
    let category: String
    let description: String
}

// MARK: - JSON Decoder Extension
extension JSONDecoder {
    static var apiDecoder: JSONDecoder {
        let decoder = JSONDecoder()
        decoder.dateDecodingStrategy = .iso8601
        decoder.keyDecodingStrategy = .convertFromSnakeCase
        return decoder
    }
}

// MARK: - API Config
struct APIConfig {
    #if DEBUG
    static let baseURL = "http://localhost:3000/api"
    #else
    static let baseURL = "https://your-production-api.com/api"
    #endif
}
