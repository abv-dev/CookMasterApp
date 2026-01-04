import SwiftUI

struct AuthenticationView: View {
    @EnvironmentObject var authViewModel: AuthenticationViewModel
    @State private var showLogin = true

    var body: some View {
        ZStack {
            Color.Theme.background
                .ignoresSafeArea()

            if showLogin {
                LoginView(showRegister: $showLogin)
            } else {
                RegisterView(showLogin: $showLogin)
            }
        }
    }
}

// MARK: - Login View
struct LoginView: View {
    @EnvironmentObject var authViewModel: AuthenticationViewModel
    @Binding var showRegister: Bool

    @State private var email = ""
    @State private var password = ""
    @State private var showPassword = false

    var body: some View {
        ScrollView {
            VStack(spacing: Spacing.lg) {
                // Logo
                Image(systemName: "flame.fill")
                    .font(.system(size: 80))
                    .foregroundColor(Color.Theme.gold)
                    .padding(.top, Spacing.xxl)

                // Title
                Text("CookMaster")
                    .font(Font.Theme.displayMedium)
                    .foregroundColor(Color.Theme.gold)

                Text("Maîtrisez la cuisson parfaite")
                    .font(Font.Theme.caption)
                    .foregroundColor(Color.Theme.textPrimary.opacity(0.7))
                    .padding(.bottom, Spacing.xl)

                // Email Field
                VStack(alignment: .leading, spacing: Spacing.xs) {
                    Text("Email")
                        .font(Font.Theme.caption)
                        .foregroundColor(Color.Theme.textPrimary.opacity(0.7))

                    TextField("votre@email.com", text: $email)
                        .textFieldStyle(CustomTextFieldStyle())
                        .keyboardType(.emailAddress)
                        .autocapitalization(.none)
                }

                // Password Field
                VStack(alignment: .leading, spacing: Spacing.xs) {
                    Text("Mot de passe")
                        .font(Font.Theme.caption)
                        .foregroundColor(Color.Theme.textPrimary.opacity(0.7))

                    HStack {
                        if showPassword {
                            TextField("••••••••", text: $password)
                        } else {
                            SecureField("••••••••", text: $password)
                        }

                        Button(action: { showPassword.toggle() }) {
                            Image(systemName: showPassword ? "eye.slash.fill" : "eye.fill")
                                .foregroundColor(Color.Theme.textPrimary.opacity(0.5))
                        }
                    }
                    .textFieldStyle(CustomTextFieldStyle())
                }

                // Error Message
                if let error = authViewModel.errorMessage {
                    Text(error)
                        .font(Font.Theme.caption)
                        .foregroundColor(Color.Theme.error)
                        .multilineTextAlignment(.center)
                }

                // Login Button
                Button(action: { authViewModel.login(email: email, password: password) }) {
                    if authViewModel.isLoading {
                        ProgressView()
                            .tint(.white)
                    } else {
                        Text("Se connecter")
                    }
                }
                .primaryButtonStyle()
                .disabled(authViewModel.isLoading)
                .padding(.top, Spacing.md)

                // Register Link
                HStack {
                    Text("Pas encore de compte?")
                        .foregroundColor(Color.Theme.textPrimary.opacity(0.7))

                    Button("S'inscrire") {
                        withAnimation {
                            showRegister = false
                        }
                    }
                    .foregroundColor(Color.Theme.gold)
                }
                .font(Font.Theme.caption)
                .padding(.top, Spacing.sm)

                // Skip Button
                Button("Utiliser sans compte") {
                    // Skip authentication
                }
                .foregroundColor(Color.Theme.textPrimary.opacity(0.5))
                .font(Font.Theme.caption)
                .padding(.top, Spacing.xl)
            }
            .padding(.horizontal, Spacing.lg)
        }
    }
}

// MARK: - Register View
struct RegisterView: View {
    @EnvironmentObject var authViewModel: AuthenticationViewModel
    @Binding var showLogin: Bool

    @State private var name = ""
    @State private var email = ""
    @State private var password = ""
    @State private var confirmPassword = ""
    @State private var showPassword = false

    var body: some View {
        ScrollView {
            VStack(spacing: Spacing.lg) {
                // Logo
                Image(systemName: "flame.fill")
                    .font(.system(size: 60))
                    .foregroundColor(Color.Theme.gold)
                    .padding(.top, Spacing.xl)

                // Title
                Text("Créer un compte")
                    .font(Font.Theme.title1)
                    .foregroundColor(Color.Theme.gold)
                    .padding(.bottom, Spacing.lg)

                // Name Field
                VStack(alignment: .leading, spacing: Spacing.xs) {
                    Text("Nom")
                        .font(Font.Theme.caption)
                        .foregroundColor(Color.Theme.textPrimary.opacity(0.7))

                    TextField("Votre nom", text: $name)
                        .textFieldStyle(CustomTextFieldStyle())
                }

                // Email Field
                VStack(alignment: .leading, spacing: Spacing.xs) {
                    Text("Email")
                        .font(Font.Theme.caption)
                        .foregroundColor(Color.Theme.textPrimary.opacity(0.7))

                    TextField("votre@email.com", text: $email)
                        .textFieldStyle(CustomTextFieldStyle())
                        .keyboardType(.emailAddress)
                        .autocapitalization(.none)
                }

                // Password Field
                VStack(alignment: .leading, spacing: Spacing.xs) {
                    Text("Mot de passe")
                        .font(Font.Theme.caption)
                        .foregroundColor(Color.Theme.textPrimary.opacity(0.7))

                    HStack {
                        if showPassword {
                            TextField("Minimum 6 caractères", text: $password)
                        } else {
                            SecureField("Minimum 6 caractères", text: $password)
                        }

                        Button(action: { showPassword.toggle() }) {
                            Image(systemName: showPassword ? "eye.slash.fill" : "eye.fill")
                                .foregroundColor(Color.Theme.textPrimary.opacity(0.5))
                        }
                    }
                    .textFieldStyle(CustomTextFieldStyle())
                }

                // Confirm Password
                VStack(alignment: .leading, spacing: Spacing.xs) {
                    Text("Confirmer mot de passe")
                        .font(Font.Theme.caption)
                        .foregroundColor(Color.Theme.textPrimary.opacity(0.7))

                    SecureField("Confirmer", text: $confirmPassword)
                        .textFieldStyle(CustomTextFieldStyle())
                }

                // Error Message
                if let error = authViewModel.errorMessage {
                    Text(error)
                        .font(Font.Theme.caption)
                        .foregroundColor(Color.Theme.error)
                        .multilineTextAlignment(.center)
                }

                // Password Mismatch
                if !confirmPassword.isEmpty && password != confirmPassword {
                    Text("Les mots de passe ne correspondent pas")
                        .font(Font.Theme.caption)
                        .foregroundColor(Color.Theme.error)
                }

                // Register Button
                Button(action: {
                    if password == confirmPassword {
                        authViewModel.register(email: email, password: password, name: name)
                    }
                }) {
                    if authViewModel.isLoading {
                        ProgressView()
                            .tint(.white)
                    } else {
                        Text("S'inscrire")
                    }
                }
                .primaryButtonStyle()
                .disabled(authViewModel.isLoading || password != confirmPassword)
                .padding(.top, Spacing.md)

                // Login Link
                HStack {
                    Text("Déjà un compte?")
                        .foregroundColor(Color.Theme.textPrimary.opacity(0.7))

                    Button("Se connecter") {
                        withAnimation {
                            showLogin = true
                        }
                    }
                    .foregroundColor(Color.Theme.gold)
                }
                .font(Font.Theme.caption)
                .padding(.top, Spacing.sm)
            }
            .padding(.horizontal, Spacing.lg)
        }
    }
}

// MARK: - Custom Text Field Style
struct CustomTextFieldStyle: TextFieldStyle {
    func _body(configuration: TextField<Self._Label>) -> some View {
        configuration
            .padding()
            .background(Color.Theme.surface)
            .cornerRadius(CornerRadius.medium)
            .foregroundColor(Color.Theme.textPrimary)
            .font(Font.Theme.bodyRegular)
    }
}

// MARK: - Preview
struct AuthenticationView_Previews: PreviewProvider {
    static var previews: some View {
        AuthenticationView()
            .environmentObject(AuthenticationViewModel())
    }
}
