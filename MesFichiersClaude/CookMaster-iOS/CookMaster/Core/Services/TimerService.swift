import Foundation
import Combine

// MARK: - Timer Service
class TimerService: ObservableObject {
    static let shared = TimerService()

    @Published var isRunning = false
    @Published var remainingSeconds: Int = 0
    @Published var totalSeconds: Int = 0
    @Published var progress: Double = 0.0

    private var timer: Timer?
    private var startTime: Date?
    private var pausedTime: Date?

    // Cooking info
    @Published var meatName: String?
    @Published var targetTemperature: Double?
    @Published var restingTimeMinutes: Int?

    private init() {}

    // MARK: - Timer Control

    func start(totalMinutes: Int, meatName: String? = nil, targetTemp: Double? = nil, restingTime: Int? = nil) {
        self.totalSeconds = totalMinutes * 60
        self.remainingSeconds = totalSeconds
        self.meatName = meatName
        self.targetTemperature = targetTemp
        self.restingTimeMinutes = restingTime
        self.startTime = Date()
        self.isRunning = true

        // Schedule notifications
        if let meatName = meatName {
            NotificationService.shared.scheduleProgressNotifications(
                meatName: meatName,
                totalMinutes: totalMinutes
            )
        }

        startTimer()
    }

    func pause() {
        isRunning = false
        pausedTime = Date()
        timer?.invalidate()
        timer = nil

        // Cancel notifications
        NotificationService.shared.cancelAllTimerNotifications()
    }

    func resume() {
        if let pausedTime = pausedTime, let startTime = startTime {
            let pausedDuration = Date().timeIntervalSince(pausedTime)
            self.startTime = startTime.addingTimeInterval(pausedDuration)
        }

        isRunning = true
        self.pausedTime = nil

        // Reschedule notifications
        if let meatName = meatName {
            let remainingMinutes = Int(ceil(Double(remainingSeconds) / 60.0))
            NotificationService.shared.scheduleProgressNotifications(
                meatName: meatName,
                totalMinutes: remainingMinutes
            )
        }

        startTimer()
    }

    func stop() {
        isRunning = false
        timer?.invalidate()
        timer = nil
        remainingSeconds = 0
        totalSeconds = 0
        progress = 0.0
        startTime = nil
        pausedTime = nil
        meatName = nil
        targetTemperature = nil
        restingTimeMinutes = nil

        NotificationService.shared.cancelAllTimerNotifications()
    }

    func addMinutes(_ minutes: Int) {
        totalSeconds += minutes * 60
        remainingSeconds += minutes * 60

        // Reschedule notifications
        if isRunning, let meatName = meatName {
            NotificationService.shared.cancelAllTimerNotifications()
            let remainingMinutes = Int(ceil(Double(remainingSeconds) / 60.0))
            NotificationService.shared.scheduleProgressNotifications(
                meatName: meatName,
                totalMinutes: remainingMinutes
            )
        }
    }

    // MARK: - Private Methods

    private func startTimer() {
        timer = Timer.scheduledTimer(withTimeInterval: 1.0, repeats: true) { [weak self] _ in
            guard let self = self else { return }

            if self.remainingSeconds > 0 {
                self.remainingSeconds -= 1
                self.progress = 1.0 - (Double(self.remainingSeconds) / Double(self.totalSeconds))
            } else {
                self.timerFinished()
            }
        }
    }

    private func timerFinished() {
        stop()
        NotificationService.shared.playSound(named: "timer_done")

        // Post notification for UI
        NotificationCenter.default.post(
            name: NSNotification.Name("TimerFinished"),
            object: nil
        )
    }

    // MARK: - Computed Properties

    var formattedTime: String {
        let hours = remainingSeconds / 3600
        let minutes = (remainingSeconds % 3600) / 60
        let seconds = remainingSeconds % 60

        if hours > 0 {
            return String(format: "%02d:%02d:%02d", hours, minutes, seconds)
        } else {
            return String(format: "%02d:%02d", minutes, seconds)
        }
    }

    var progressPercentage: Int {
        return Int(progress * 100)
    }

    var estimatedEndTime: Date? {
        guard let startTime = startTime else { return nil }
        return startTime.addingTimeInterval(TimeInterval(totalSeconds))
    }
}

// MARK: - Multiple Timers Support
class MultiTimerService: ObservableObject {
    @Published var timers: [CookingTimer] = []

    func addTimer(
        name: String,
        totalMinutes: Int,
        meatName: String,
        targetTemp: Double
    ) {
        let timer = CookingTimer(
            id: UUID(),
            name: name,
            totalSeconds: totalMinutes * 60,
            meatName: meatName,
            targetTemperature: targetTemp
        )
        timers.append(timer)
    }

    func removeTimer(id: UUID) {
        timers.removeAll { $0.id == id }
    }

    func pauseTimer(id: UUID) {
        if let index = timers.firstIndex(where: { $0.id == id }) {
            timers[index].pause()
        }
    }

    func resumeTimer(id: UUID) {
        if let index = timers.firstIndex(where: { $0.id == id }) {
            timers[index].resume()
        }
    }
}

// MARK: - Cooking Timer Model
struct CookingTimer: Identifiable {
    let id: UUID
    let name: String
    var totalSeconds: Int
    var remainingSeconds: Int
    var isRunning: Bool = true
    let meatName: String
    let targetTemperature: Double
    let startTime: Date

    init(
        id: UUID = UUID(),
        name: String,
        totalSeconds: Int,
        meatName: String,
        targetTemperature: Double
    ) {
        self.id = id
        self.name = name
        self.totalSeconds = totalSeconds
        self.remainingSeconds = totalSeconds
        self.meatName = meatName
        self.targetTemperature = targetTemperature
        self.startTime = Date()
    }

    var progress: Double {
        return 1.0 - (Double(remainingSeconds) / Double(totalSeconds))
    }

    var formattedTime: String {
        let minutes = remainingSeconds / 60
        let seconds = remainingSeconds % 60
        return String(format: "%02d:%02d", minutes, seconds)
    }

    mutating func pause() {
        isRunning = false
    }

    mutating func resume() {
        isRunning = true
    }
}
