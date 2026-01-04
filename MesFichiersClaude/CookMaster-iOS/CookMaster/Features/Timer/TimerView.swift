import SwiftUI

// MARK: - Timer View
struct TimerView: View {
    let result: CookingResult?
    @StateObject private var timerService = TimerService.shared
    @Environment(\.dismiss) var dismiss
    @State private var showCancelAlert = false

    init(result: CookingResult? = nil) {
        self.result = result
    }

    var body: some View {
        NavigationView {
            ZStack {
                // Gradient Background
                LinearGradient(
                    colors: [
                        Color.Theme.background,
                        Color.Theme.surface
                    ],
                    startPoint: .top,
                    endPoint: .bottom
                )
                .ignoresSafeArea()

                VStack(spacing: Spacing.xxl) {
                    Spacer()

                    // Meat Name
                    if let meatName = timerService.meatName {
                        Text(meatName)
                            .font(Font.Theme.title1)
                            .foregroundColor(Color.Theme.gold)
                    }

                    // Circular Progress
                    circularProgress

                    // Time Display
                    timeDisplay

                    // Target Temperature (if available)
                    if let targetTemp = timerService.targetTemperature {
                        targetTemperatureView(targetTemp)
                    }

                    Spacer()

                    // Control Buttons
                    controlButtons

                    // Additional Actions
                    additionalActions

                    Spacer()
                }
                .padding(.horizontal, Spacing.lg)
            }
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .navigationBarTrailing) {
                    Button(action: { showCancelAlert = true }) {
                        Image(systemName: "xmark")
                            .foregroundColor(Color.Theme.textPrimary)
                    }
                }
            }
            .alert("Arrêter le timer?", isPresented: $showCancelAlert) {
                Button("Continuer", role: .cancel) {}
                Button("Arrêter", role: .destructive) {
                    timerService.stop()
                    dismiss()
                }
            } message: {
                Text("Êtes-vous sûr de vouloir arrêter la cuisson?")
            }
            .onReceive(NotificationCenter.default.publisher(for: NSNotification.Name("TimerFinished"))) { _ in
                // Timer finished notification
            }
        }
    }

    // MARK: - Circular Progress

    private var circularProgress: some View {
        ZStack {
            // Background Circle
            Circle()
                .stroke(Color.Theme.surface, lineWidth: 20)
                .frame(width: 280, height: 280)

            // Progress Circle
            Circle()
                .trim(from: 0, to: timerService.progress)
                .stroke(
                    LinearGradient(
                        colors: progressGradientColors,
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    ),
                    style: StrokeStyle(lineWidth: 20, lineCap: .round)
                )
                .frame(width: 280, height: 280)
                .rotationEffect(.degrees(-90))
                .animation(.linear(duration: 1), value: timerService.progress)

            // Inner Glow
            Circle()
                .fill(
                    RadialGradient(
                        colors: [
                            progressGradientColors[0].opacity(0.2),
                            Color.clear
                        ],
                        center: .center,
                        startRadius: 0,
                        endRadius: 140
                    )
                )
                .frame(width: 280, height: 280)

            // Percentage
            VStack(spacing: Spacing.xs) {
                Text("\(timerService.progressPercentage)")
                    .font(.system(size: 72, weight: .bold, design: .rounded))
                    .foregroundColor(progressGradientColors[0])

                Text("%")
                    .font(Font.Theme.title2)
                    .foregroundColor(Color.Theme.textPrimary.opacity(0.7))
            }
        }
    }

    // MARK: - Time Display

    private var timeDisplay: some View {
        VStack(spacing: Spacing.xs) {
            Text(timerService.formattedTime)
                .font(.system(size: 56, weight: .medium, design: .rounded))
                .foregroundColor(Color.Theme.textPrimary)
                .monospacedDigit()

            if let endTime = timerService.estimatedEndTime {
                Text("Fin estimée: \(endTime.formatted(date: .omitted, time: .shortened))")
                    .font(Font.Theme.caption)
                    .foregroundColor(Color.Theme.textPrimary.opacity(0.6))
            }
        }
    }

    // MARK: - Target Temperature

    private func targetTemperatureView(_ temperature: Double) -> some View {
        HStack(spacing: Spacing.md) {
            Image(systemName: "thermometer.medium")
                .font(.system(size: 20))
                .foregroundColor(Color.Theme.accent)

            VStack(alignment: .leading, spacing: 2) {
                Text("Température cible")
                    .font(Font.Theme.caption)
                    .foregroundColor(Color.Theme.textPrimary.opacity(0.7))

                Text("\(Int(temperature))°C")
                    .font(Font.Theme.bodyBold)
                    .foregroundColor(Color.Theme.accent)
            }

            Spacer()

            if let restingTime = timerService.restingTimeMinutes, restingTime > 0 {
                VStack(alignment: .trailing, spacing: 2) {
                    Text("Repos")
                        .font(Font.Theme.caption)
                        .foregroundColor(Color.Theme.textPrimary.opacity(0.7))

                    Text("\(restingTime) min")
                        .font(Font.Theme.bodyBold)
                        .foregroundColor(Color.Theme.secondary)
                }
            }
        }
        .padding()
        .background(Color.Theme.surface)
        .cornerRadius(CornerRadius.large)
    }

    // MARK: - Control Buttons

    private var controlButtons: some View {
        HStack(spacing: Spacing.lg) {
            // Pause/Resume Button
            Button(action: {
                if timerService.isRunning {
                    timerService.pause()
                } else {
                    timerService.resume()
                }
            }) {
                ZStack {
                    Circle()
                        .fill(Color.Theme.surface)
                        .frame(width: 80, height: 80)
                        .shadow(color: Color.black.opacity(0.2), radius: 10, y: 5)

                    Image(systemName: timerService.isRunning ? "pause.fill" : "play.fill")
                        .font(.system(size: 32))
                        .foregroundColor(Color.Theme.gold)
                }
            }

            // Stop Button
            Button(action: { showCancelAlert = true }) {
                ZStack {
                    Circle()
                        .fill(Color.Theme.error.opacity(0.15))
                        .frame(width: 80, height: 80)

                    Image(systemName: "stop.fill")
                        .font(.system(size: 32))
                        .foregroundColor(Color.Theme.error)
                }
            }
        }
    }

    // MARK: - Additional Actions

    private var additionalActions: some View {
        HStack(spacing: Spacing.lg) {
            // Add 1 minute
            ActionButton(
                icon: "plus",
                label: "+1 min",
                action: { timerService.addMinutes(1) }
            )

            // Add 5 minutes
            ActionButton(
                icon: "plus",
                label: "+5 min",
                action: { timerService.addMinutes(5) }
            )

            // Add 10 minutes
            ActionButton(
                icon: "plus",
                label: "+10 min",
                action: { timerService.addMinutes(10) }
            )
        }
    }

    // MARK: - Computed Properties

    private var progressGradientColors: [Color] {
        let progress = timerService.progress
        if progress < 0.5 {
            return [Color.Theme.secondary, Color.Theme.secondary.opacity(0.7)]
        } else if progress < 0.75 {
            return [Color.Theme.accent, Color.Theme.accent.opacity(0.7)]
        } else if progress < 0.95 {
            return [Color.Theme.gold, Color.Theme.gold.opacity(0.7)]
        } else {
            return [Color.Theme.error, Color.Theme.error.opacity(0.7)]
        }
    }
}

// MARK: - Action Button

struct ActionButton: View {
    let icon: String
    let label: String
    let action: () -> Void

    var body: some View {
        Button(action: action) {
            VStack(spacing: Spacing.xs) {
                Image(systemName: icon)
                    .font(.system(size: 20))
                    .foregroundColor(Color.Theme.gold)

                Text(label)
                    .font(Font.Theme.small)
                    .foregroundColor(Color.Theme.textPrimary.opacity(0.8))
            }
            .frame(maxWidth: .infinity)
            .padding(.vertical, Spacing.md)
            .background(Color.Theme.surface)
            .cornerRadius(CornerRadius.medium)
        }
    }
}

// MARK: - Timer Finished View

struct TimerFinishedView: View {
    let result: CookingResult?
    let onDismiss: () -> Void

    var body: some View {
        ZStack {
            Color.Theme.background.opacity(0.95)
                .ignoresSafeArea()

            VStack(spacing: Spacing.xl) {
                // Confetti Animation
                Image(systemName: "party.popper.fill")
                    .font(.system(size: 80))
                    .foregroundColor(Color.Theme.gold)
                    .rotationEffect(.degrees(-15))

                Text("Cuisson terminée!")
                    .font(Font.Theme.displayMedium)
                    .foregroundColor(Color.Theme.gold)

                if let meatName = result?.meat.name {
                    Text("Votre \(meatName) est prêt")
                        .font(Font.Theme.title2)
                        .foregroundColor(Color.Theme.textPrimary)
                }

                if let restingTime = result?.calculation.restingTime, restingTime > 0 {
                    VStack(spacing: Spacing.sm) {
                        Image(systemName: "moon.zzz.fill")
                            .font(.system(size: 40))
                            .foregroundColor(Color.Theme.secondary)

                        Text("N'oubliez pas le temps de repos")
                            .font(Font.Theme.bodyBold)
                            .foregroundColor(Color.Theme.textPrimary)

                        Text("\(restingTime) minutes")
                            .font(Font.Theme.title1)
                            .foregroundColor(Color.Theme.secondary)
                    }
                    .padding(Spacing.lg)
                    .background(Color.Theme.surface)
                    .cornerRadius(CornerRadius.large)
                }

                Button(action: onDismiss) {
                    Text("Terminer")
                        .font(Font.Theme.bodyBold)
                        .foregroundColor(.white)
                        .frame(maxWidth: .infinity)
                        .padding()
                        .background(
                            LinearGradient(
                                colors: [Color.Theme.gold, Color.Theme.gold.opacity(0.8)],
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )
                        .cornerRadius(CornerRadius.medium)
                }
                .padding(.horizontal, Spacing.lg)
            }
            .padding(Spacing.xl)
        }
    }
}

// MARK: - Preview

struct TimerView_Previews: PreviewProvider {
    static var previews: some View {
        TimerView(result: CookingResult.mock)
    }
}
