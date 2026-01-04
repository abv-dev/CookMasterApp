import Foundation
import Combine

// MARK: - Authentication ViewModel
class AuthenticationViewModel: ObservableObject {
    @Published var isAuthenticated = false
    @Published var currentUser: User?
    @Published var isLoading = false
    @Published var errorMessage: String?

    private var cancellables = Set<AnyCancellable>()
    private let apiService = APIService.shared

    init() {
        checkAuthStatus()
    }

    // MARK: - Authentication Methods

    func checkAuthStatus() {
        guard KeychainManager.shared.getToken() != nil else {
            isAuthenticated = false
            return
        }

        isLoading = true

        apiService.verifyToken()
            .sink(
                receiveCompletion: { [weak self] completion in
                    self?.isLoading = false
                    if case .failure = completion {
                        self?.logout()
                    }
                },
                receiveValue: { [weak self] user in
                    self?.currentUser = user
                    self?.isAuthenticated = true
                }
            )
            .store(in: &cancellables)
    }

    func login(email: String, password: String) {
        guard !email.isEmpty, !password.isEmpty else {
            errorMessage = "Email et mot de passe requis"
            return
        }

        isLoading = true
        errorMessage = nil

        apiService.login(email: email, password: password)
            .sink(
                receiveCompletion: { [weak self] completion in
                    self?.isLoading = false
                    if case .failure(let error) = completion {
                        self?.errorMessage = error.localizedDescription
                    }
                },
                receiveValue: { [weak self] response in
                    KeychainManager.shared.saveToken(response.token)
                    self?.currentUser = response.user
                    self?.isAuthenticated = true
                }
            )
            .store(in: &cancellables)
    }

    func register(email: String, password: String, name: String) {
        guard !email.isEmpty, !password.isEmpty, !name.isEmpty else {
            errorMessage = "Tous les champs sont requis"
            return
        }

        guard isValidEmail(email) else {
            errorMessage = "Email invalide"
            return
        }

        guard password.count >= 6 else {
            errorMessage = "Le mot de passe doit contenir au moins 6 caractères"
            return
        }

        isLoading = true
        errorMessage = nil

        apiService.register(email: email, password: password, name: name)
            .sink(
                receiveCompletion: { [weak self] completion in
                    self?.isLoading = false
                    if case .failure(let error) = completion {
                        self?.errorMessage = error.localizedDescription
                    }
                },
                receiveValue: { [weak self] response in
                    KeychainManager.shared.saveToken(response.token)
                    self?.currentUser = response.user
                    self?.isAuthenticated = true
                }
            )
            .store(in: &cancellables)
    }

    func logout() {
        KeychainManager.shared.deleteToken()
        isAuthenticated = false
        currentUser = nil
        errorMessage = nil
    }

    // MARK: - Validation

    private func isValidEmail(_ email: String) -> Bool {
        let emailRegex = "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}"
        let emailPredicate = NSPredicate(format: "SELF MATCHES %@", emailRegex)
        return emailPredicate.evaluate(with: email)
    }
}
