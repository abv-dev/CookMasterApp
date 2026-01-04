import SwiftUI

// MARK: - Color Theme
// Warm cooking-inspired palette - browns, oranges, reds reminiscent of meat and grilling
extension Color {
    enum Theme {
        // Primary Colors - Rich browns and warm tones (cooked meat, seared surfaces)
        static let meatBrown = Color(hex: "8B4513")        // Sienna brown - cooked meat
        static let meatBrownDark = Color(hex: "654321")    // Dark brown - well-done
        static let meatBrownLight = Color(hex: "A0522D")   // Light brown - medium

        // Secondary Colors - Fire and grill tones
        static let fireOrange = Color(hex: "E07B39")       // Warm orange - flames
        static let fireRed = Color(hex: "D84315")          // Red-orange - hot coals
        static let grillGray = Color(hex: "5D4E37")        // Charcoal gray

        // Background & Surface - Warm neutrals
        static let background = Color(hex: "FAF6F1")       // Cream/beige - butcher paper
        static let surface = Color(hex: "FFFFFF")          // White - clean surface
        static let surfaceVariant = Color(hex: "F5EBE0")   // Light tan

        // Accent Colors
        static let rareRed = Color(hex: "D32F2F")          // Rare meat red
        static let mediumRose = Color(hex: "E57373")       // Medium-rare pink
        static let wellDoneBrown = Color(hex: "6D4C41")    // Well-done brown

        // Text Colors
        static let textPrimary = Color(hex: "3E2723")      // Dark brown text
        static let textSecondary = Color(hex: "6D4C41")    // Medium brown
        static let textTertiary = Color(hex: "8D6E63")     // Light brown

        // Functional Colors
        static let success = Color(hex: "2E7D32")
        static let error = Color(hex: "C62828")
        static let warning = Color(hex: "F57C00")
        static let info = Color(hex: "1976D2")

        // Convenience
        static let primary = meatBrown
        static let secondary = fireOrange
        static let tertiary = grillGray
        static let cardBackground = surface
        static let divider = Color(hex: "6D4C41").opacity(0.12)
    }
}

// MARK: - Color Extension for Hex
extension Color {
    init(hex: String) {
        let hex = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted)
        var int: UInt64 = 0
        Scanner(string: hex).scanHexInt64(&int)
        let a, r, g, b: UInt64
        switch hex.count {
        case 3: // RGB (12-bit)
            (a, r, g, b) = (255, (int >> 8) * 17, (int >> 4 & 0xF) * 17, (int & 0xF) * 17)
        case 6: // RGB (24-bit)
            (a, r, g, b) = (255, int >> 16, int >> 8 & 0xFF, int & 0xFF)
        case 8: // ARGB (32-bit)
            (a, r, g, b) = (int >> 24, int >> 16 & 0xFF, int >> 8 & 0xFF, int & 0xFF)
        default:
            (a, r, g, b) = (255, 0, 0, 0)
        }

        self.init(
            .sRGB,
            red: Double(r) / 255,
            green: Double(g) / 255,
            blue:  Double(b) / 255,
            opacity: Double(a) / 255
        )
    }
}

// MARK: - Typography
extension Font {
    enum Theme {
        // Playfair Display (Titles)
        static func playfair(size: CGFloat, weight: Font.Weight = .regular) -> Font {
            return .custom("PlayfairDisplay-\(weight.cssName)", size: size)
        }

        // SF Pro / Inter (Body)
        static func body(size: CGFloat = 16, weight: Font.Weight = .regular) -> Font {
            return .system(size: size, weight: weight)
        }

        // Specific Sizes
        static let displayLarge = playfair(size: 40, weight: .bold)
        static let displayMedium = playfair(size: 32, weight: .bold)
        static let title1 = playfair(size: 28, weight: .semibold)
        static let title2 = playfair(size: 24, weight: .semibold)
        static let title3 = playfair(size: 20, weight: .semibold)
        static let bodyLarge = body(size: 18, weight: .regular)
        static let bodyRegular = body(size: 16, weight: .regular)
        static let caption = body(size: 14, weight: .regular)
        static let small = body(size: 12, weight: .regular)

        // Timer (Monospace)
        static func timer(size: CGFloat) -> Font {
            return .system(size: size, weight: .medium, design: .monospaced)
        }
    }
}

extension Font.Weight {
    var cssName: String {
        switch self {
        case .bold: return "Bold"
        case .semibold: return "SemiBold"
        case .medium: return "Medium"
        default: return "Regular"
        }
    }
}

// MARK: - Spacing
enum Spacing {
    static let xxs: CGFloat = 4
    static let xs: CGFloat = 8
    static let sm: CGFloat = 12
    static let md: CGFloat = 16
    static let lg: CGFloat = 24
    static let xl: CGFloat = 32
    static let xxl: CGFloat = 48
}

// MARK: - Corner Radius
enum CornerRadius {
    static let small: CGFloat = 8
    static let medium: CGFloat = 12
    static let large: CGFloat = 16
    static let xlarge: CGFloat = 24
}

// MARK: - Animation
enum Animation {
    static let quick = SwiftUI.Animation.easeOut(duration: 0.15)
    static let standard = SwiftUI.Animation.easeOut(duration: 0.3)
    static let slow = SwiftUI.Animation.easeOut(duration: 0.5)
    static let spring = SwiftUI.Animation.spring(response: 0.3, dampingFraction: 0.7)
}

// MARK: - Shadow
enum Shadow {
    static let small = (color: Color.black.opacity(0.1), radius: CGFloat(4), x: CGFloat(0), y: CGFloat(2))
    static let medium = (color: Color.black.opacity(0.15), radius: CGFloat(8), x: CGFloat(0), y: CGFloat(4))
    static let large = (color: Color.black.opacity(0.2), radius: CGFloat(16), x: CGFloat(0), y: CGFloat(8))
}

// MARK: - View Extensions for Theme
extension View {
    func cardStyle() -> some View {
        self
            .background(Color.Theme.cardBackground)
            .cornerRadius(CornerRadius.medium)
            .shadow(
                color: Shadow.medium.color,
                radius: Shadow.medium.radius,
                x: Shadow.medium.x,
                y: Shadow.medium.y
            )
    }

    func primaryButtonStyle() -> some View {
        self
            .font(Font.Theme.bodyLarge)
            .foregroundColor(.white)
            .frame(maxWidth: .infinity)
            .frame(height: 56)
            .background(Color.Theme.primary)
            .cornerRadius(CornerRadius.medium)
    }

    func secondaryButtonStyle() -> some View {
        self
            .font(Font.Theme.bodyLarge)
            .foregroundColor(Color.Theme.primary)
            .frame(maxWidth: .infinity)
            .frame(height: 56)
            .background(Color.Theme.primary.opacity(0.1))
            .cornerRadius(CornerRadius.medium)
            .overlay(
                RoundedRectangle(cornerRadius: CornerRadius.medium)
                    .stroke(Color.Theme.primary, lineWidth: 1)
            )
    }
}
