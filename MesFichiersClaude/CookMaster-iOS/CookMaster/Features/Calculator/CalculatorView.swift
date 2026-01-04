import SwiftUI

// MARK: - Calculator View
struct CalculatorView: View {
    @StateObject private var viewModel = CalculatorViewModel()
    @Environment(\.dismiss) var dismiss

    var body: some View {
        NavigationView {
            ZStack {
                Color.Theme.background
                    .ignoresSafeArea()

                ScrollView {
                    VStack(spacing: Spacing.lg) {
                        // Mode Toggle
                        modeToggle

                        if viewModel.selectedMeat == nil {
                            // Meat Selection
                            meatSelectionSection
                        } else {
                            // Configuration
                            configurationSection
                        }

                        // Calculate Button
                        if viewModel.selectedMeat != nil {
                            calculateButton
                        }

                        Spacer(minLength: Spacing.xl)
                    }
                    .padding(.horizontal, Spacing.lg)
                    .padding(.top, Spacing.md)
                }
            }
            .navigationTitle("Calculateur")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .navigationBarLeading) {
                    Button("Fermer") { dismiss() }
                        .foregroundColor(Color.Theme.gold)
                }

                if viewModel.selectedMeat != nil {
                    ToolbarItem(placement: .navigationBarTrailing) {
                        Button("Réinitialiser") {
                            withAnimation {
                                viewModel.reset()
                            }
                        }
                        .foregroundColor(Color.Theme.error)
                    }
                }
            }
            .sheet(isPresented: $viewModel.showResult) {
                if let result = viewModel.calculationResult {
                    ResultView(result: result)
                }
            }
            .alert("Erreur", isPresented: .constant(viewModel.errorMessage != nil)) {
                Button("OK") { viewModel.errorMessage = nil }
            } message: {
                Text(viewModel.errorMessage ?? "")
            }
        }
    }

    // MARK: - Mode Toggle

    private var modeToggle: some View {
        HStack(spacing: 0) {
            Button(action: { withAnimation { viewModel.isAdvancedMode = false } }) {
                Text("Simple")
                    .font(Font.Theme.bodyBold)
                    .foregroundColor(viewModel.isAdvancedMode ? Color.Theme.textPrimary.opacity(0.5) : .white)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, Spacing.sm)
                    .background(viewModel.isAdvancedMode ? Color.clear : Color.Theme.gold)
                    .cornerRadius(CornerRadius.medium, corners: [.topLeft, .bottomLeft])
            }

            Button(action: { withAnimation { viewModel.isAdvancedMode = true } }) {
                Text("Avancé")
                    .font(Font.Theme.bodyBold)
                    .foregroundColor(viewModel.isAdvancedMode ? .white : Color.Theme.textPrimary.opacity(0.5))
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, Spacing.sm)
                    .background(viewModel.isAdvancedMode ? Color.Theme.gold : Color.clear)
                    .cornerRadius(CornerRadius.medium, corners: [.topRight, .bottomRight])
            }
        }
        .background(Color.Theme.surface)
        .cornerRadius(CornerRadius.medium)
    }

    // MARK: - Meat Selection

    private var meatSelectionSection: some View {
        VStack(alignment: .leading, spacing: Spacing.md) {
            // Search Bar
            HStack {
                Image(systemName: "magnifyingglass")
                    .foregroundColor(Color.Theme.textPrimary.opacity(0.5))

                TextField("Rechercher une viande...", text: $viewModel.searchQuery)
                    .foregroundColor(Color.Theme.textPrimary)
                    .font(Font.Theme.bodyRegular)

                if !viewModel.searchQuery.isEmpty {
                    Button(action: { viewModel.searchQuery = "" }) {
                        Image(systemName: "xmark.circle.fill")
                            .foregroundColor(Color.Theme.textPrimary.opacity(0.5))
                    }
                }
            }
            .padding()
            .background(Color.Theme.surface)
            .cornerRadius(CornerRadius.medium)

            // Meat Categories
            if viewModel.isLoading {
                ProgressView()
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, Spacing.xxl)
            } else {
                ForEach(MeatCategory.allCases, id: \.self) { category in
                    let categoryMeats = viewModel.filteredMeats.filter { $0.category == category }
                    if !categoryMeats.isEmpty {
                        VStack(alignment: .leading, spacing: Spacing.sm) {
                            Text(category.displayName)
                                .font(Font.Theme.bodyBold)
                                .foregroundColor(Color.Theme.gold)
                                .padding(.top, Spacing.sm)

                            ForEach(categoryMeats) { meat in
                                MeatSelectionRow(meat: meat) {
                                    withAnimation {
                                        viewModel.selectMeat(meat)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    // MARK: - Configuration Section

    private var configurationSection: some View {
        VStack(spacing: Spacing.lg) {
            // Selected Meat
            if let meat = viewModel.selectedMeat {
                selectedMeatCard(meat)
            }

            // Cut Selection
            if let meat = viewModel.selectedMeat {
                cutSelectionSection(meat)
            }

            // Weight Input
            inputField(
                title: "Poids (g)",
                placeholder: "ex: 250",
                text: $viewModel.weight,
                icon: "scalemass.fill",
                keyboardType: .decimalPad
            )

            // Thickness Input (Optional)
            inputField(
                title: "Épaisseur (cm) - Optionnel",
                placeholder: "ex: 2.5",
                text: $viewModel.thickness,
                icon: "ruler.fill",
                keyboardType: .decimalPad
            )

            // Doneness Selection
            if !viewModel.availableDoneness.isEmpty {
                donenessSection
            }

            // Cooking Method
            cookingMethodSection

            // Initial Temperature
            temperatureSlider

            // Advanced Options
            if viewModel.isAdvancedMode {
                advancedOptionsSection
            }
        }
    }

    // MARK: - Selected Meat Card

    private func selectedMeatCard(_ meat: Meat) -> some View {
        HStack {
            Image(systemName: meat.category.icon)
                .font(.system(size: 32))
                .foregroundColor(Color.Theme.gold)
                .frame(width: 60, height: 60)
                .background(Color.Theme.gold.opacity(0.15))
                .cornerRadius(CornerRadius.medium)

            VStack(alignment: .leading, spacing: Spacing.xs) {
                Text(meat.name)
                    .font(Font.Theme.title2)
                    .foregroundColor(Color.Theme.textPrimary)

                Text(meat.category.displayName)
                    .font(Font.Theme.caption)
                    .foregroundColor(Color.Theme.textPrimary.opacity(0.7))
            }

            Spacer()

            Button(action: {
                withAnimation {
                    viewModel.selectedMeat = nil
                }
            }) {
                Image(systemName: "xmark.circle.fill")
                    .foregroundColor(Color.Theme.textPrimary.opacity(0.5))
                    .font(.system(size: 24))
            }
        }
        .padding(Spacing.md)
        .background(Color.Theme.surface)
        .cornerRadius(CornerRadius.large)
    }

    // MARK: - Cut Selection

    private func cutSelectionSection(_ meat: Meat) -> some View {
        VStack(alignment: .leading, spacing: Spacing.sm) {
            Text("Coupe")
                .font(Font.Theme.bodyBold)
                .foregroundColor(Color.Theme.textPrimary)

            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: Spacing.sm) {
                    ForEach(meat.cuts) { cut in
                        Button(action: { viewModel.selectCut(cut) }) {
                            Text(cut.name)
                                .font(Font.Theme.caption)
                                .foregroundColor(viewModel.selectedCut?.id == cut.id ? .white : Color.Theme.textPrimary)
                                .padding(.horizontal, Spacing.md)
                                .padding(.vertical, Spacing.sm)
                                .background(viewModel.selectedCut?.id == cut.id ? Color.Theme.gold : Color.Theme.surface)
                                .cornerRadius(CornerRadius.small)
                        }
                    }
                }
            }
        }
    }

    // MARK: - Doneness Section

    private var donenessSection: some View {
        VStack(alignment: .leading, spacing: Spacing.sm) {
            Text("Cuisson")
                .font(Font.Theme.bodyBold)
                .foregroundColor(Color.Theme.textPrimary)

            ForEach(viewModel.availableDoneness, id: \.doneness) { temp in
                Button(action: { viewModel.selectedDoneness = temp.doneness }) {
                    HStack {
                        VStack(alignment: .leading, spacing: Spacing.xs) {
                            Text(temp.doneness.capitalized)
                                .font(Font.Theme.bodyBold)
                                .foregroundColor(Color.Theme.textPrimary)

                            Text(temp.description)
                                .font(Font.Theme.caption)
                                .foregroundColor(Color.Theme.textPrimary.opacity(0.7))

                            Text("🌡️ \(Int(temp.coreTemperature))°C")
                                .font(Font.Theme.small)
                                .foregroundColor(Color.Theme.accent)
                        }

                        Spacer()

                        if viewModel.selectedDoneness == temp.doneness {
                            Image(systemName: "checkmark.circle.fill")
                                .foregroundColor(Color.Theme.gold)
                                .font(.system(size: 24))
                        }
                    }
                    .padding(Spacing.md)
                    .background(viewModel.selectedDoneness == temp.doneness ? Color.Theme.gold.opacity(0.15) : Color.Theme.surface)
                    .cornerRadius(CornerRadius.medium)
                    .overlay(
                        RoundedRectangle(cornerRadius: CornerRadius.medium)
                            .stroke(viewModel.selectedDoneness == temp.doneness ? Color.Theme.gold : Color.clear, lineWidth: 2)
                    )
                }
            }
        }
    }

    // MARK: - Cooking Method Section

    private var cookingMethodSection: some View {
        VStack(alignment: .leading, spacing: Spacing.sm) {
            Text("Méthode de cuisson")
                .font(Font.Theme.bodyBold)
                .foregroundColor(Color.Theme.textPrimary)

            Menu {
                ForEach(CookingMethod.allCases.prefix(15), id: \.self) { method in
                    Button(method.displayName) {
                        viewModel.selectedMethod = method
                    }
                }
            } label: {
                HStack {
                    Image(systemName: viewModel.selectedMethod.icon)
                        .foregroundColor(Color.Theme.gold)

                    Text(viewModel.selectedMethod.displayName)
                        .font(Font.Theme.bodyRegular)
                        .foregroundColor(Color.Theme.textPrimary)

                    Spacer()

                    Image(systemName: "chevron.down")
                        .foregroundColor(Color.Theme.textPrimary.opacity(0.5))
                }
                .padding()
                .background(Color.Theme.surface)
                .cornerRadius(CornerRadius.medium)
            }
        }
    }

    // MARK: - Temperature Slider

    private var temperatureSlider: some View {
        VStack(alignment: .leading, spacing: Spacing.sm) {
            HStack {
                Text("Température initiale")
                    .font(Font.Theme.bodyBold)
                    .foregroundColor(Color.Theme.textPrimary)

                Spacer()

                Text("\(Int(viewModel.initialTemperature))°C")
                    .font(Font.Theme.bodyBold)
                    .foregroundColor(Color.Theme.gold)
            }

            Slider(value: $viewModel.initialTemperature, in: -18...25, step: 1)
                .accentColor(Color.Theme.gold)

            HStack {
                Text("Congelé (-18°C)")
                    .font(Font.Theme.small)
                    .foregroundColor(Color.Theme.textPrimary.opacity(0.6))

                Spacer()

                Text("Température ambiante (25°C)")
                    .font(Font.Theme.small)
                    .foregroundColor(Color.Theme.textPrimary.opacity(0.6))
            }
        }
        .padding(Spacing.md)
        .background(Color.Theme.surface)
        .cornerRadius(CornerRadius.medium)
    }

    // MARK: - Advanced Options

    private var advancedOptionsSection: some View {
        VStack(spacing: Spacing.md) {
            Text("Options avancées")
                .font(Font.Theme.title2)
                .foregroundColor(Color.Theme.gold)
                .frame(maxWidth: .infinity, alignment: .leading)

            inputField(
                title: "Altitude (m)",
                placeholder: "ex: 500",
                text: $viewModel.altitude,
                icon: "mountain.2.fill",
                keyboardType: .numberPad
            )

            inputField(
                title: "Humidité (%)",
                placeholder: "ex: 60",
                text: $viewModel.humidity,
                icon: "humidity.fill",
                keyboardType: .numberPad
            )

            inputField(
                title: "Température du four (°C)",
                placeholder: "ex: 180",
                text: $viewModel.customOvenTemp,
                icon: "oven.fill",
                keyboardType: .numberPad
            )
        }
    }

    // MARK: - Calculate Button

    private var calculateButton: some View {
        Button(action: { viewModel.calculate() }) {
            HStack {
                if viewModel.isLoading {
                    ProgressView()
                        .tint(.white)
                } else {
                    Image(systemName: "flame.fill")
                    Text("Calculer le temps de cuisson")
                        .font(Font.Theme.bodyBold)
                }
            }
            .frame(maxWidth: .infinity)
            .padding()
            .background(
                LinearGradient(
                    colors: viewModel.isCalculateEnabled ? [Color.Theme.gold, Color.Theme.gold.opacity(0.8)] : [Color.Theme.surface, Color.Theme.surface],
                    startPoint: .leading,
                    endPoint: .trailing
                )
            )
            .foregroundColor(viewModel.isCalculateEnabled ? .white : Color.Theme.textPrimary.opacity(0.5))
            .cornerRadius(CornerRadius.medium)
            .shadow(color: viewModel.isCalculateEnabled ? Color.Theme.gold.opacity(0.3) : Color.clear, radius: 8, y: 4)
        }
        .disabled(!viewModel.isCalculateEnabled || viewModel.isLoading)
    }

    // MARK: - Input Field Helper

    private func inputField(
        title: String,
        placeholder: String,
        text: Binding<String>,
        icon: String,
        keyboardType: UIKeyboardType = .default
    ) -> some View {
        VStack(alignment: .leading, spacing: Spacing.xs) {
            Text(title)
                .font(Font.Theme.bodyBold)
                .foregroundColor(Color.Theme.textPrimary)

            HStack {
                Image(systemName: icon)
                    .foregroundColor(Color.Theme.gold)
                    .frame(width: 24)

                TextField(placeholder, text: text)
                    .foregroundColor(Color.Theme.textPrimary)
                    .font(Font.Theme.bodyRegular)
                    .keyboardType(keyboardType)
            }
            .padding()
            .background(Color.Theme.surface)
            .cornerRadius(CornerRadius.medium)
        }
    }
}

// MARK: - Meat Selection Row

struct MeatSelectionRow: View {
    let meat: Meat
    let action: () -> Void

    var body: some View {
        Button(action: action) {
            HStack {
                Image(systemName: meat.category.icon)
                    .foregroundColor(Color.Theme.gold)
                    .frame(width: 24)

                Text(meat.name)
                    .font(Font.Theme.bodyRegular)
                    .foregroundColor(Color.Theme.textPrimary)

                Spacer()

                Image(systemName: "chevron.right")
                    .foregroundColor(Color.Theme.textPrimary.opacity(0.3))
                    .font(.system(size: 14))
            }
            .padding()
            .background(Color.Theme.surface)
            .cornerRadius(CornerRadius.medium)
        }
    }
}

// MARK: - Corner Radius Extension

extension View {
    func cornerRadius(_ radius: CGFloat, corners: UIRectCorner) -> some View {
        clipShape(RoundedCorner(radius: radius, corners: corners))
    }
}

struct RoundedCorner: Shape {
    var radius: CGFloat = .infinity
    var corners: UIRectCorner = .allCorners

    func path(in rect: CGRect) -> Path {
        let path = UIBezierPath(
            roundedRect: rect,
            byRoundingCorners: corners,
            cornerRadii: CGSize(width: radius, height: radius)
        )
        return Path(path.cgPath)
    }
}

// MARK: - Preview

struct CalculatorView_Previews: PreviewProvider {
    static var previews: some View {
        CalculatorView()
    }
}
