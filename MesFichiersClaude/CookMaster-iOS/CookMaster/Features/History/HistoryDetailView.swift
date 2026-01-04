import SwiftUI

// MARK: - History Detail View
struct HistoryDetailView: View {
    let history: CookingHistory
    @Environment(\.dismiss) var dismiss
    @State private var showRestartConfirmation = false

    var body: some View {
        NavigationView {
            ZStack {
                Color.Theme.background
                    .ignoresSafeArea()

                ScrollView {
                    VStack(spacing: Spacing.lg) {
                        // Date Header
                        dateHeader

                        // Main Info Card
                        if let result = history.result {
                            mainInfoCard(result)
                            temperatureCard(result)
                            instructionsCard(result)

                            if !result.calculation.tips.isEmpty {
                                tipsCard(result)
                            }
                        }

                        // Notes (if any)
                        if let notes = history.notes, !notes.isEmpty {
                            notesCard(notes)
                        }

                        // Action Buttons
                        actionButtons

                        Spacer(minLength: Spacing.xl)
                    }
                    .padding(.horizontal, Spacing.lg)
                    .padding(.top, Spacing.md)
                }
            }
            .navigationTitle("Détails")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .navigationBarTrailing) {
                    Button("Fermer") { dismiss() }
                        .foregroundColor(Color.Theme.gold)
                }
            }
            .alert("Recommencer cette cuisson?", isPresented: $showRestartConfirmation) {
                Button("Annuler", role: .cancel) {}
                Button("Démarrer") {
                    restartCooking()
                }
            } message: {
                Text("Un nouveau timer sera lancé avec les mêmes paramètres")
            }
        }
    }

    // MARK: - Date Header

    private var dateHeader: some View {
        VStack(spacing: Spacing.xs) {
            Text(history.date.formatted(date: .complete, time: .omitted))
                .font(Font.Theme.caption)
                .foregroundColor(Color.Theme.textPrimary.opacity(0.7))

            Text(history.date.formatted(date: .omitted, time: .shortened))
                .font(Font.Theme.title2)
                .foregroundColor(Color.Theme.gold)
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, Spacing.md)
        .background(Color.Theme.surface)
        .cornerRadius(CornerRadius.large)
    }

    // MARK: - Main Info Card

    private func mainInfoCard(_ result: CookingResult) -> some View {
        VStack(spacing: Spacing.md) {
            // Meat Name & Icon
            HStack {
                ZStack {
                    Circle()
                        .fill(Color.Theme.gold.opacity(0.15))
                        .frame(width: 60, height: 60)

                    Image(systemName: result.meat.category.icon)
                        .font(.system(size: 30))
                        .foregroundColor(Color.Theme.gold)
                }

                VStack(alignment: .leading, spacing: Spacing.xs) {
                    Text(result.meat.name)
                        .font(Font.Theme.title2)
                        .foregroundColor(Color.Theme.textPrimary)

                    Text(result.meat.category.displayName)
                        .font(Font.Theme.caption)
                        .foregroundColor(Color.Theme.textPrimary.opacity(0.7))
                }

                Spacer()
            }

            Divider()
                .background(Color.Theme.textPrimary.opacity(0.2))

            // Cooking Details Grid
            LazyVGrid(
                columns: [
                    GridItem(.flexible()),
                    GridItem(.flexible())
                ],
                spacing: Spacing.md
            ) {
                DetailInfoBox(
                    icon: "timer",
                    label: "Temps",
                    value: "\(result.calculation.cookingTime) min"
                )

                DetailInfoBox(
                    icon: "flame.fill",
                    label: "Méthode",
                    value: result.cookingInfo.method.displayName
                )

                DetailInfoBox(
                    icon: "scalemass.fill",
                    label: "Poids",
                    value: "\(Int(result.cookingInfo.weight))g"
                )

                DetailInfoBox(
                    icon: "target",
                    label: "Cuisson",
                    value: result.cookingInfo.doneness
                )

                if let thickness = result.cookingInfo.thickness {
                    DetailInfoBox(
                        icon: "ruler.fill",
                        label: "Épaisseur",
                        value: "\(String(format: "%.1f", thickness)) cm"
                    )
                }

                if let ovenTemp = result.cookingInfo.ovenTemperature {
                    DetailInfoBox(
                        icon: "oven.fill",
                        label: "Four",
                        value: "\(ovenTemp)°C"
                    )
                }
            }
        }
        .padding(Spacing.md)
        .background(Color.Theme.surface)
        .cornerRadius(CornerRadius.large)
    }

    // MARK: - Temperature Card

    private func temperatureCard(_ result: CookingResult) -> some View {
        VStack(alignment: .leading, spacing: Spacing.md) {
            HStack {
                Image(systemName: "thermometer.medium")
                    .foregroundColor(Color.Theme.accent)

                Text("Températures")
                    .font(Font.Theme.bodyBold)
                    .foregroundColor(Color.Theme.textPrimary)
            }

            HStack(spacing: Spacing.md) {
                VStack(spacing: Spacing.xs) {
                    Text("Cœur")
                        .font(Font.Theme.caption)
                        .foregroundColor(Color.Theme.textPrimary.opacity(0.7))

                    Text("\(Int(result.calculation.targetTemperature))°C")
                        .font(.system(size: 28, weight: .bold, design: .rounded))
                        .foregroundColor(Color.Theme.accent)
                }
                .frame(maxWidth: .infinity)
                .padding(.vertical, Spacing.sm)
                .background(Color.Theme.accent.opacity(0.1))
                .cornerRadius(CornerRadius.medium)

                VStack(spacing: Spacing.xs) {
                    Text("Sécurité")
                        .font(Font.Theme.caption)
                        .foregroundColor(Color.Theme.textPrimary.opacity(0.7))

                    Text("\(Int(result.calculation.safetyTemperature))°C")
                        .font(.system(size: 28, weight: .bold, design: .rounded))
                        .foregroundColor(Color.Theme.secondary)
                }
                .frame(maxWidth: .infinity)
                .padding(.vertical, Spacing.sm)
                .background(Color.Theme.secondary.opacity(0.1))
                .cornerRadius(CornerRadius.medium)
            }

            if result.calculation.restingTime > 0 {
                HStack {
                    Image(systemName: "moon.zzz.fill")
                        .foregroundColor(Color.Theme.secondary)

                    Text("Temps de repos: \(result.calculation.restingTime) min")
                        .font(Font.Theme.caption)
                        .foregroundColor(Color.Theme.textPrimary.opacity(0.8))
                }
            }
        }
        .padding(Spacing.md)
        .background(Color.Theme.surface)
        .cornerRadius(CornerRadius.large)
    }

    // MARK: - Instructions Card

    private func instructionsCard(_ result: CookingResult) -> some View {
        VStack(alignment: .leading, spacing: Spacing.md) {
            HStack {
                Image(systemName: "list.bullet.clipboard")
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
                }
            }
        }
        .padding(Spacing.md)
        .background(Color.Theme.surface)
        .cornerRadius(CornerRadius.large)
    }

    // MARK: - Tips Card

    private func tipsCard(_ result: CookingResult) -> some View {
        VStack(alignment: .leading, spacing: Spacing.md) {
            HStack {
                Image(systemName: "lightbulb.fill")
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

                    Text(tip)
                        .font(Font.Theme.caption)
                        .foregroundColor(Color.Theme.textPrimary.opacity(0.8))
                }
            }
        }
        .padding(Spacing.md)
        .background(Color.Theme.surface)
        .cornerRadius(CornerRadius.large)
    }

    // MARK: - Notes Card

    private func notesCard(_ notes: String) -> some View {
        VStack(alignment: .leading, spacing: Spacing.sm) {
            HStack {
                Image(systemName: "note.text")
                    .foregroundColor(Color.Theme.gold)

                Text("Notes")
                    .font(Font.Theme.bodyBold)
                    .foregroundColor(Color.Theme.textPrimary)
            }

            Text(notes)
                .font(Font.Theme.bodyRegular)
                .foregroundColor(Color.Theme.textPrimary.opacity(0.8))
        }
        .padding(Spacing.md)
        .background(Color.Theme.surface)
        .cornerRadius(CornerRadius.large)
    }

    // MARK: - Action Buttons

    private var actionButtons: some View {
        VStack(spacing: Spacing.md) {
            Button(action: { showRestartConfirmation = true }) {
                HStack {
                    Image(systemName: "arrow.clockwise")
                    Text("Recommencer cette cuisson")
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

            HStack(spacing: Spacing.md) {
                Button(action: shareHistory) {
                    HStack {
                        Image(systemName: "square.and.arrow.up")
                        Text("Partager")
                            .font(Font.Theme.caption)
                    }
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, Spacing.sm)
                    .background(Color.Theme.surface)
                    .foregroundColor(Color.Theme.textPrimary)
                    .cornerRadius(CornerRadius.small)
                }

                Button(action: deleteHistory) {
                    HStack {
                        Image(systemName: "trash")
                        Text("Supprimer")
                            .font(Font.Theme.caption)
                    }
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, Spacing.sm)
                    .background(Color.Theme.surface)
                    .foregroundColor(Color.Theme.error)
                    .cornerRadius(CornerRadius.small)
                }
            }
        }
    }

    // MARK: - Helper Methods

    private func restartCooking() {
        guard let result = history.result else { return }

        TimerService.shared.start(
            totalMinutes: result.calculation.cookingTime,
            meatName: result.meat.name,
            targetTemp: result.calculation.targetTemperature,
            restingTime: result.calculation.restingTime
        )

        dismiss()
    }

    private func shareHistory() {
        // Implement share functionality
    }

    private func deleteHistory() {
        // Implement delete functionality
        APIService.shared.deleteCookingHistory(id: history.id)
            .sink(
                receiveCompletion: { _ in },
                receiveValue: { _ in
                    dismiss()
                }
            )
            .store(in: &Set<AnyCancellable>())
    }
}

// MARK: - Detail Info Box

struct DetailInfoBox: View {
    let icon: String
    let label: String
    let value: String

    var body: some View {
        VStack(spacing: Spacing.xs) {
            Image(systemName: icon)
                .font(.system(size: 20))
                .foregroundColor(Color.Theme.gold)

            Text(label)
                .font(Font.Theme.small)
                .foregroundColor(Color.Theme.textPrimary.opacity(0.6))

            Text(value)
                .font(Font.Theme.bodyBold)
                .foregroundColor(Color.Theme.textPrimary)
                .lineLimit(1)
                .minimumScaleFactor(0.8)
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, Spacing.sm)
    }
}

// MARK: - CookingHistory Extension

extension CookingHistory {
    var notes: String? {
        // This would come from the backend
        return nil
    }
}

// MARK: - Preview

struct HistoryDetailView_Previews: PreviewProvider {
    static var previews: some View {
        HistoryDetailView(
            history: CookingHistory(
                id: "1",
                userId: "user1",
                date: Date(),
                result: CookingResult.mock
            )
        )
    }
}
