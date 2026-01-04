import Foundation
import UserNotifications
import AVFoundation

// MARK: - Notification Service
class NotificationService: NSObject, ObservableObject {
    static let shared = NotificationService()

    @Published var isAuthorized = false
    private let center = UNUserNotificationCenter.current()
    private var audioPlayer: AVAudioPlayer?

    private override init() {
        super.init()
        center.delegate = self
    }

    // MARK: - Authorization

    func requestAuthorization() {
        center.requestAuthorization(options: [.alert, .sound, .badge]) { granted, error in
            DispatchQueue.main.async {
                self.isAuthorized = granted
                if let error = error {
                    print("Notification authorization error: \(error)")
                }
            }
        }
    }

    func checkAuthorizationStatus() {
        center.getNotificationSettings { settings in
            DispatchQueue.main.async {
                self.isAuthorized = settings.authorizationStatus == .authorized
            }
        }
    }

    // MARK: - Timer Notifications

    func scheduleTimerNotification(
        title: String,
        body: String,
        timeInterval: TimeInterval,
        identifier: String = "timerNotification"
    ) {
        let content = UNMutableNotificationContent()
        content.title = title
        content.body = body
        content.sound = .default
        content.categoryIdentifier = "TIMER_CATEGORY"

        let trigger = UNTimeIntervalNotificationTrigger(
            timeInterval: timeInterval,
            repeats: false
        )

        let request = UNNotificationRequest(
            identifier: identifier,
            content: content,
            trigger: trigger
        )

        center.add(request) { error in
            if let error = error {
                print("Error scheduling notification: \(error)")
            }
        }
    }

    func scheduleProgressNotifications(
        meatName: String,
        totalMinutes: Int
    ) {
        let percentages: [Double] = [0.75, 0.90, 0.95, 1.0]

        for percentage in percentages {
            let timeInterval = Double(totalMinutes) * 60 * percentage
            let minutesRemaining = Int(Double(totalMinutes) * (1 - percentage))

            let body: String
            if percentage == 1.0 {
                body = "🎉 Votre \(meatName) est prêt! N'oubliez pas le temps de repos."
            } else if percentage == 0.95 {
                body = "⏰ Plus qu'1 minute! Préparez l'assiette."
            } else if percentage == 0.90 {
                body = "🔔 Bientôt prêt! Plus que \(minutesRemaining) minutes."
            } else {
                body = "⏱️ Plus que \(minutesRemaining) minutes pour votre \(meatName)."
            }

            scheduleTimerNotification(
                title: "Cuisson en cours",
                body: body,
                timeInterval: timeInterval,
                identifier: "timer_\(Int(percentage * 100))"
            )
        }
    }

    func cancelAllTimerNotifications() {
        let identifiers = [
            "timerNotification",
            "timer_75",
            "timer_90",
            "timer_95",
            "timer_100"
        ]
        center.removePendingNotificationRequests(withIdentifiers: identifiers)
    }

    // MARK: - Smart Notifications

    func scheduleSmartReminder(
        title: String,
        body: String,
        date: Date,
        identifier: String
    ) {
        let content = UNMutableNotificationContent()
        content.title = title
        content.body = body
        content.sound = .default

        let components = Calendar.current.dateComponents(
            [.year, .month, .day, .hour, .minute],
            from: date
        )

        let trigger = UNCalendarNotificationTrigger(
            dateMatching: components,
            repeats: false
        )

        let request = UNNotificationRequest(
            identifier: identifier,
            content: content,
            trigger: trigger
        )

        center.add(request)
    }

    // MARK: - Sound

    func playSound(named soundName: String = "timer_done") {
        guard let url = Bundle.main.url(forResource: soundName, withExtension: "mp3") else {
            print("Sound file not found: \(soundName)")
            return
        }

        do {
            audioPlayer = try AVAudioPlayer(contentsOf: url)
            audioPlayer?.prepareToPlay()
            audioPlayer?.play()
        } catch {
            print("Error playing sound: \(error)")
        }
    }

    func stopSound() {
        audioPlayer?.stop()
        audioPlayer = nil
    }

    // MARK: - Badge

    func setBadgeCount(_ count: Int) {
        center.setBadgeCount(count) { error in
            if let error = error {
                print("Error setting badge: \(error)")
            }
        }
    }

    func clearBadge() {
        setBadgeCount(0)
    }
}

// MARK: - UNUserNotificationCenterDelegate
extension NotificationService: UNUserNotificationCenterDelegate {
    func userNotificationCenter(
        _ center: UNUserNotificationCenter,
        willPresent notification: UNNotification,
        withCompletionHandler completionHandler: @escaping (UNNotificationPresentationOptions) -> Void
    ) {
        // Show notification even when app is in foreground
        completionHandler([.banner, .sound, .badge])
    }

    func userNotificationCenter(
        _ center: UNUserNotificationCenter,
        didReceive response: UNNotificationResponse,
        withCompletionHandler completionHandler: @escaping () -> Void
    ) {
        // Handle notification tap
        let identifier = response.notification.request.identifier

        if identifier.starts(with: "timer") {
            // Navigate to timer screen
            NotificationCenter.default.post(
                name: NSNotification.Name("NavigateToTimer"),
                object: nil
            )
        }

        completionHandler()
    }
}
