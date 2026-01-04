import SwiftUI

// MARK: - Result View
struct ResultView: View {
    let result: CookingResult
    @Environment(\.dismiss) var dismiss
    @State private var showTimer = false
    @State private var saveSuccess = false

    var body: some View {
        NavigationView {
            ZStack {
                Color.Theme.background
                    .ignoresSafeArea()

                ScrollView {
                    VStack(spacing: Spacing.lg) {
                        // Success Icon
                        successHeader

                        // Main Result Card
                        mainResultCard

                        // Temperature Info
                        temperatureCard

                        // Cooking Instructions
                        instructionsCard

                        // Resting Time (if applicable)
                        if result.calculation.restingTime > 0 {
                            restingTimeCard
                        }

                        // Tips
                        if !result.calculation.tips.isEmpty {
                            tipsSection
                        }

                        // Action Buttons
                        actionButtons

                        Spacer(minLength: Spacing.xl)
                    }
                    .padding(.horizontal, Spacing.lg)
                    .padding(.top, Spacing.md)
                }
            }
            .navigationTitle("Résultat")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .navigationBarTrailing) {
                    Button("Fermer") { dismiss() }
                        .foregroundColor(Color.Theme.gold)
                }
            }
            .sheet(isPresented: $showTimer) {
                TimerView(result: result)
            }
            .alert("Sauvegardé!", isPresented: $saveSuccess) {
                Button("OK", role: .cancel) {}
            } message: {
                Text("Cette cuisson a été ajoutée à votre historique")
            }
        }
    }

    // MARK: - Success Header

    private var successHeader: some View {
        VStack(spacing: Spacing.md) {
            ZStack {
                Circle()
                    .fill(
                        LinearGradient(
                            colors: [Color.Theme.gold, Color.Theme.gold.opacity(0.7)],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
                    .frame(width: 100, height: 100)
                    .shadow(color: Color.Theme.gold.opacity(0.4), radius: 20, y: 10)

                Image(systemName: "checkmark")
                    .font(.system(size: 50, weight: .bold))
                    .foregroundColor(.white)
            }

            Text("Calcul terminé!")
                .font(Font.Theme.title1)
                .foregroundColor(Color.Theme.gold)

            Text(result.meat.name)
                .font(Font.Theme.bodyRegular)
                .foregroundColor(Color.Theme.textPrimary.opacity(0.8))
        }
        .padding(.vertical, Spacing.lg)
    }

    // MARK: - Main Result Card

    private var mainResultCard: some View {
        VStack(spacing: Spacing.md) {
            HStack {
                Image(systemName: "timer")
                    .font(.system(size: 24))
                    .foregroundColor(Color.Theme.gold)

                Text("Temps de cuisson")
                    .font(Font.Theme.bodyBold)
                    .foregroundColor(Color.Theme.textPrimary)

                Spacer()
            }

            HStack(alignment: .lastTextBaseline, spacing: Spacing.xs) {
                Text("\(result.calculation.cookingTime)")
                    .font(.system(size: 60, weight: .bold, design: .rounded))
                    .foregroundColor(Color.Theme.gold)

                Text("min")
                    .font(Font.Theme.title2)
                    .foregroundColor(Color.Theme.textPrimary.opacity(0.7))
            }
            .frame(maxWidth: .infinity)

            Divider()
                .background(Color.Theme.textPrimary.opacity(0.2))

            // Cooking Details
            HStack(spacing: Spacing.lg) {
                DetailItem(
                    icon: "flame.fill",
                    title: result.cookingInfo.method.displayName,
                    value: ""
                )

                Divider()
                    .frame(height: 40)

                DetailItem(
                    icon: "scalemass.fill",
                    title: "\(Int(result.cookingInfo.weight))g",
                    value: ""
                )

                Divider()
                    .frame(height: 40)

                DetailItem(
                    icon: "target",
                    title: result.cookingInfo.doneness,
                    value: ""
                )
            }
            .frame(maxWidth: .infinity)
        }
        .padding(Spacing.lg)
        .background(Color.Theme.surface)
        .cornerRadius(CornerRadius.large)
        .shadow(color: Color.black.opacity(0.1), radius: 10, y: 5)
    }

    // MARK: - Temperature Card

    private var temperatureCard: some View {
        VStack(alignment: .leading, spacing: Spacing.md) {
            HStack {
                Image(systemName: "thermometer.medium")
                    .font(.system(size: 20))
                    .foregroundColor(Color.Theme.accent)

                Text("Températures")
                    .font(Font.Theme.bodyBold)
                    .foregroundColor(Color.Theme.textPrimary)
            }

            HStack(spacing: Spacing.md) {
                TemperatureBox(
                    title: "Température cœur",
                    temperature: result.calculation.targetTemperature,
                    color: Color.Theme.accent
                )

                TemperatureBox(
                    title: "Température sécurité",
                    temperature: result.calculation.safetyTemperature,
                    color: Color.Theme.secondary
                )
            }

            if let ovenTemp = result.cookingInfo.ovenTemperature {
                HStack {
                    Image(systemName: "oven.fill")
                        .foregroundColor(Color.Theme.gold)

                    Text("Température du four: \(ovenTemp)°C")
                        .font(Font.Theme.caption)
                        .foregroundColor(Color.Theme.textPrimary.opacity(0.8))
                }
                .padding(.top, Spacing.xs)
            }
        }
        .padding(Spacing.md)
        .background(Color.Theme.surface)
        .cornerRadius(CornerRadius.large)
    }

    // MARK: - Instructions Card

    private var instructionsCard: some View {
        VStack(alignment: .leading, spacing: Spacing.md) {
            HStack {
                Image(systemName: "list.bullet.clipboard")
                    .font(.system(size: 20))
                    .foregroundColor(Color.Theme.gold)

                Text("Instructions")
                    .font(Font.Theme.bodyBold)
                    .foregroundColor(Color.Theme.textPrimary)
            }

            ForEach(Array(result.calculation.instructions.enumerated()), id: \.offset) { index, instruction in
                HStack(alignment: .top, spacing: Spacing.sm) {
                    Text("\(index + 1).")
                        .font(Font.Theme.bodyBold)
                        .foregroundColor(Color.Theme.gold)
                        .frame(width: 24)

                    Text(instruction)
                        .font(Font.Theme.bodyRegular)
                        .foregroundColor(Color.Theme.textPrimary.opacity(0.9))
                        .fixedSize(horizontal: false, vertical: true)
                }
            }
        }
        .padding(Spacing.md)
        .background(Color.Theme.surface)
        .cornerRadius(CornerRadius.large)
    }

    // MARK: - Resting Time Card

    private var restingTimeCard: some View {
        HStack(spacing: Spacing.md) {
            Image(systemName: "moon.zzz.fill")
                .font(.system(size: 32))
                .foregroundColor(Color.Theme.secondary)
                .frame(width: 60, height: 60)
                .background(Color.Theme.secondary.opacity(0.15))
                .cornerRadius(CornerRadius.medium)

            VStack(alignment: .leading, spacing: Spacing.xs) {
                Text("Temps de repos")
                    .font(Font.Theme.bodyBold)
                    .foregroundColor(Color.Theme.textPrimary)

                Text("\(result.calculation.restingTime) minutes")
                    .font(Font.Theme.title2)
                    .foregroundColor(Color.Theme.secondary)

                Text("Laissez reposer avant de servir")
                    .font(Font.Theme.caption)
                    .foregroundColor(Color.Theme.textPrimary.opacity(0.7))
            }

            Spacer()
        }
        .padding(Spacing.md)
        .background(Color.Theme.surface)
        .cornerRadius(CornerRadius.large)
    }

    // MARK: - Tips Section

    private var tipsSection: some View {
        VStack(alignment: .leading, spacing: Spacing.md) {
            HStack {
                Image(systemName: "lightbulb.fill")
                    .font(.system(size: 20))
                    .foregroundColor(Color.Theme.gold)

                Text("Conseils")
                    .font(Font.Theme.bodyBold)
                    .foregroundColor(Color.Theme.textPrimary)
            }

            ForEach(result.calculation.tips, id: \.self) { tip in
                HStack(alignment: .top, spacing: Spacing.sm) {
                    Image(systemName: "checkmark.circle.fill")
                        .foregroundColor(Color.Theme.gold)
                        .font(.system(size: 16))
                        .padding(.top, 2)

                    Text(tip)
                        .font(Font.Theme.caption)
                        .foregroundColor(Color.Theme.textPrimary.opacity(0.8))
                        .fixedSize(horizontal: false, vertical: true)
                }
            }
        }
        .padding(Spacing.md)
        .background(Color.Theme.surface)
        .cornerRadius(CornerRadius.large)
    }

    // MARK: - Action Buttons

    private var actionButtons: some View {
        VStack(spacing: Spacing.md) {
            // Start Timer Button
            Button(action: {
                TimerService.shared.start(
                    totalMinutes: result.calculation.cookingTime,
                    meatName: result.meat.name,
                    targetTemp: result.calculation.targetTemperature,
                    restingTime: result.calculation.restingTime
                )
                showTimer = true
            }) {
                HStack {
                    Image(systemName: "timer")
                    Text("Démarrer le timer")
                        .font(Font.Theme.bodyBold)
                }
                .frame(maxWidth: .infinity)
                .padding()
                .background(
                    LinearGradient(
                        colors: [Color.Theme.gold, Color.Theme.gold.opacity(0.8)],
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .foregroundColor(.white)
                .cornerRadius(CornerRadius.medium)
                .shadow(color: Color.Theme.gold.opacity(0.3), radius: 8, y: 4)
            }

            // Save Button
            Button(action: {
                saveToHistory()
            }) {
                HStack {
                    Image(systemName: "bookmark.fill")
                    Text("Sauvegarder")
                        .font(Font.Theme.bodyBold)
                }
                .frame(maxWidth: .infinity)
                .padding()
                .background(Color.Theme.surface)
                .foregroundColor(Color.Theme.textPrimary)
                .cornerRadius(CornerRadius.medium)
            }
        }
    }

    // MARK: - Helper Methods

    private func saveToHistory() {
        let history = CookingHistory(
            id: UUID().uuidString,
            userId: "", // Will be set by API
            date: Date(),
            result: result
        )

        APIService.shared.saveCookingHistory(history)
            .sink(
                receiveCompletion: { _ in },
                receiveValue: { _ in
                    saveSuccess = true
                }
            )
            .store(in: &Set<AnyCancellable>())
    }
}

// MARK: - Detail Item

struct DetailItem: View {
    let icon: String
    let title: String
    let value: String

    var body: some View {
        VStack(spacing: Spacing.xs) {
            Image(systemName: icon)
                .font(.system(size: 20))
                .foregroundColor(Color.Theme.gold)

            Text(title)
                .font(Font.Theme.caption)
                .foregroundColor(Color.Theme.textPrimary)
                .multilineTextAlignment(.center)

            if !value.isEmpty {
                Text(value)
                    .font(Font.Theme.bodyBold)
                    .foregroundColor(Color.Theme.textPrimary)
            }
        }
        .frame(maxWidth: .infinity)
    }
}

// MARK: - Temperature Box

struct TemperatureBox: View {
    let title: String
    let temperature: Double
    let color: Color

    var body: some View {
        VStack(spacing: Spacing.xs) {
            Text(title)
                .font(Font.Theme.caption)
                .foregroundColor(Color.Theme.textPrimary.opacity(0.7))
                .multilineTextAlignment(.center)

            HStack(alignment: .top, spacing: 2) {
                Text("\(Int(temperature))")
                    .font(.system(size: 32, weight: .bold, design: .rounded))
                    .foregroundColor(color)

                Text("°C")
                    .font(Font.Theme.caption)
                    .foregroundColor(color.opacity(0.7))
                    .padding(.top, 4)
            }
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, Spacing.md)
        .background(color.opacity(0.1))
        .cornerRadius(CornerRadius.medium)
    }
}

// MARK: - Preview

struct ResultView_Previews: PreviewProvider {
    static var previews: some View {
        ResultView(result: CookingResult.mock)
    }
}

// MARK: - Mock Data Extension
extension CookingResult {
    static var mock: CookingResult {
        CookingResult(
            calculation: Calculation(
                cookingTime: 25,
                targetTemperature: 52,
                safetyTemperature: 63,
                restingTime: 5,
                instructions: [
                    "Sortir la viande du réfrigérateur 30 minutes avant",
                    "Préchauffer la poêle à feu vif",
                    "Saisir 2 minutes de chaque côté",
                    "Réduire le feu et cuire jusqu'à température désirée"
                ],
                tips: [
                    "Utiliser un thermomètre pour plus de précision",
                    "Ne pas piquer la viande pendant la cuisson"
                ]
            ),
            meat: Meat(
                id: "1",
                name: "Bœuf - Entrecôte",
                category: .boeuf,
                cuts: []
            ),
            cookingInfo: CookingInfo(
                method: .poele,
                doneness: "À point",
                weight: 250,
                thickness: 2.5,
                initialTemperature: 4,
                ovenTemperature: nil
            )
        )
    }
}
