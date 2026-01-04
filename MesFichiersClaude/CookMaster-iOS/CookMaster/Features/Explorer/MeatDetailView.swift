import SwiftUI

// MARK: - Meat Detail View
struct MeatDetailView: View {
    let meat: Meat
    let onCalculate: () -> Void
    @Environment(\.dismiss) var dismiss

    var body: some View {
        NavigationView {
            ZStack {
                Color.Theme.background
                    .ignoresSafeArea()

                ScrollView {
                    VStack(spacing: Spacing.lg) {
                        // Hero Image/Icon
                        heroSection

                        // Meat Info
                        infoSection

                        // Cuts Section
                        cutsSection

                        // Cooking Methods
                        cookingMethodsSection

                        // Calculate Button
                        calculateButton

                        Spacer(minLength: Spacing.xl)
                    }
                    .padding(.horizontal, Spacing.lg)
                }
            }
            .navigationTitle(meat.name)
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .navigationBarTrailing) {
                    Button("Fermer") { dismiss() }
                        .foregroundColor(Color.Theme.gold)
                }
            }
        }
    }

    // MARK: - Hero Section

    private var heroSection: some View {
        ZStack {
            RoundedRectangle(cornerRadius: CornerRadius.large)
                .fill(
                    LinearGradient(
                        colors: [
                            Color.Theme.gold,
                            Color.Theme.gold.opacity(0.6)
                        ],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                )
                .frame(height: 200)
                .shadow(color: Color.Theme.gold.opacity(0.3), radius: 15, y: 8)

            Image(systemName: meat.category.icon)
                .font(.system(size: 80))
                .foregroundColor(.white)
        }
        .padding(.top, Spacing.md)
    }

    // MARK: - Info Section

    private var infoSection: some View {
        VStack(alignment: .leading, spacing: Spacing.md) {
            HStack {
                VStack(alignment: .leading, spacing: Spacing.xs) {
                    Text(meat.category.displayName)
                        .font(Font.Theme.caption)
                        .foregroundColor(Color.Theme.gold)

                    Text(meat.name)
                        .font(Font.Theme.title1)
                        .foregroundColor(Color.Theme.textPrimary)
                }

                Spacer()
            }

            if let description = meat.description {
                Text(description)
                    .font(Font.Theme.bodyRegular)
                    .foregroundColor(Color.Theme.textPrimary.opacity(0.8))
                    .lineSpacing(4)
            }

            // Quick Stats
            HStack(spacing: Spacing.lg) {
                StatBox(
                    icon: "list.bullet",
                    value: "\(meat.cuts.count)",
                    label: "Coupes"
                )

                StatBox(
                    icon: "flame.fill",
                    value: "\(availableCookingMethods.count)",
                    label: "Méthodes"
                )

                StatBox(
                    icon: "thermometer.medium",
                    value: "\(totalTemperatureOptions)",
                    label: "Cuissons"
                )
            }
        }
        .padding(Spacing.md)
        .background(Color.Theme.surface)
        .cornerRadius(CornerRadius.large)
    }

    // MARK: - Cuts Section

    private var cutsSection: some View {
        VStack(alignment: .leading, spacing: Spacing.md) {
            Text("Coupes disponibles")
                .font(Font.Theme.title2)
                .foregroundColor(Color.Theme.textPrimary)

            ForEach(meat.cuts) { cut in
                CutCard(cut: cut)
            }
        }
    }

    // MARK: - Cooking Methods

    private var cookingMethodsSection: some View {
        VStack(alignment: .leading, spacing: Spacing.md) {
            Text("Méthodes de cuisson")
                .font(Font.Theme.title2)
                .foregroundColor(Color.Theme.textPrimary)

            LazyVGrid(
                columns: [
                    GridItem(.flexible()),
                    GridItem(.flexible()),
                    GridItem(.flexible())
                ],
                spacing: Spacing.sm
            ) {
                ForEach(Array(availableCookingMethods.prefix(9)), id: \.self) { method in
                    MethodChip(method: method)
                }
            }
        }
    }

    // MARK: - Calculate Button

    private var calculateButton: some View {
        Button(action: {
            dismiss()
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) {
                onCalculate()
            }
        }) {
            HStack {
                Image(systemName: "flame.fill")
                Text("Calculer la cuisson")
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
    }

    // MARK: - Computed Properties

    private var availableCookingMethods: [CookingMethod] {
        var methods: Set<CookingMethod> = []
        for cut in meat.cuts {
            for method in cut.cookingMethods {
                if let cookingMethod = CookingMethod(rawValue: method.method) {
                    methods.insert(cookingMethod)
                }
            }
        }
        return Array(methods).sorted { $0.displayName < $1.displayName }
    }

    private var totalTemperatureOptions: Int {
        meat.cuts.reduce(0) { $0 + $1.temperatures.count }
    }
}

// MARK: - Stat Box

struct StatBox: View {
    let icon: String
    let value: String
    let label: String

    var body: some View {
        VStack(spacing: Spacing.xs) {
            Image(systemName: icon)
                .font(.system(size: 20))
                .foregroundColor(Color.Theme.gold)

            Text(value)
                .font(Font.Theme.title2)
                .foregroundColor(Color.Theme.textPrimary)

            Text(label)
                .font(Font.Theme.small)
                .foregroundColor(Color.Theme.textPrimary.opacity(0.6))
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, Spacing.sm)
    }
}

// MARK: - Cut Card

struct CutCard: View {
    let cut: Cut

    var body: some View {
        VStack(alignment: .leading, spacing: Spacing.sm) {
            HStack {
                Text(cut.name)
                    .font(Font.Theme.bodyBold)
                    .foregroundColor(Color.Theme.textPrimary)

                Spacer()

                Image(systemName: "chevron.right")
                    .font(.system(size: 12))
                    .foregroundColor(Color.Theme.textPrimary.opacity(0.3))
            }

            if let description = cut.description {
                Text(description)
                    .font(Font.Theme.caption)
                    .foregroundColor(Color.Theme.textPrimary.opacity(0.7))
                    .lineLimit(2)
            }

            // Temperature Range
            if let firstTemp = cut.temperatures.first,
               let lastTemp = cut.temperatures.last {
                HStack(spacing: Spacing.xs) {
                    Image(systemName: "thermometer.medium")
                        .font(.system(size: 12))
                        .foregroundColor(Color.Theme.accent)

                    Text("\(Int(firstTemp.coreTemperature))°C - \(Int(lastTemp.coreTemperature))°C")
                        .font(Font.Theme.small)
                        .foregroundColor(Color.Theme.accent)

                    Spacer()

                    Text("\(cut.temperatures.count) cuissons")
                        .font(Font.Theme.small)
                        .foregroundColor(Color.Theme.textPrimary.opacity(0.6))
                }
            }
        }
        .padding(Spacing.md)
        .background(Color.Theme.surface)
        .cornerRadius(CornerRadius.medium)
    }
}

// MARK: - Method Chip

struct MethodChip: View {
    let method: CookingMethod

    var body: some View {
        VStack(spacing: Spacing.xs) {
            Image(systemName: method.icon)
                .font(.system(size: 20))
                .foregroundColor(Color.Theme.gold)

            Text(method.displayName)
                .font(Font.Theme.small)
                .foregroundColor(Color.Theme.textPrimary)
                .multilineTextAlignment(.center)
                .lineLimit(2)
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, Spacing.sm)
        .padding(.horizontal, Spacing.xs)
        .background(Color.Theme.surface)
        .cornerRadius(CornerRadius.small)
    }
}

// MARK: - Preview

struct MeatDetailView_Previews: PreviewProvider {
    static var previews: some View {
        MeatDetailView(meat: Meat.mock) {}
    }
}

// MARK: - Mock Extension
extension Meat {
    static var mock: Meat {
        Meat(
            id: "1",
            name: "Bœuf - Entrecôte",
            category: .boeuf,
            description: "Coupe de choix pour les grillades, l'entrecôte est persillée et très savoureuse.",
            cuts: [
                Cut(
                    id: "1",
                    name: "Entrecôte épaisse",
                    description: "Coupe généreuse de 3-4cm d'épaisseur",
                    temperatures: [
                        Temperature(
                            doneness: "Saignant",
                            coreTemperature: 44,
                            safetyTemperature: 52,
                            description: "Rouge tiède au centre"
                        ),
                        Temperature(
                            doneness: "À point",
                            coreTemperature: 52,
                            safetyTemperature: 57,
                            description: "Rosé au centre"
                        )
                    ],
                    cookingMethods: [
                        CookingMethodInfo(
                            method: "poele",
                            recommendedOvenTemp: nil,
                            estimatedTimePerKg: 15
                        )
                    ]
                )
            ]
        )
    }
}
