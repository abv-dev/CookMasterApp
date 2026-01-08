import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Email d'expédition - utilise le domaine personnalisé si configuré dans Resend
const FROM_EMAIL = process.env.FROM_EMAIL || 'CookMaster <onboarding@resend.dev>'

/**
 * Envoyer un code de vérification par email
 */
export async function sendVerificationCode(email, code) {
  try {
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Code de vérification CookMaster',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #FFF0F0; padding: 40px 20px; }
            .container { max-width: 400px; margin: 0 auto; background: white; border-radius: 16px; padding: 32px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
            .logo { text-align: center; font-size: 48px; margin-bottom: 16px; }
            h1 { color: #2D3436; text-align: center; font-size: 24px; margin: 0 0 8px 0; }
            .subtitle { color: #636E72; text-align: center; font-size: 14px; margin-bottom: 32px; }
            .code-box { background: #FFF0F0; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 24px; }
            .code { font-size: 36px; font-weight: bold; color: #F97066; letter-spacing: 8px; }
            .info { color: #636E72; font-size: 12px; text-align: center; }
            .footer { color: #B2BEC3; font-size: 11px; text-align: center; margin-top: 24px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="logo">🥩</div>
            <h1>CookMaster</h1>
            <p class="subtitle">Votre code de vérification</p>
            <div class="code-box">
              <div class="code">${code}</div>
            </div>
            <p class="info">Ce code expire dans 10 minutes.<br>Si vous n'avez pas demandé ce code, ignorez cet email.</p>
            <p class="footer">© CookMaster - L'assistant cuisson parfaite</p>
          </div>
        </body>
        </html>
      `
    })

    if (error) {
      console.error('Resend error:', error)
      return { success: false, error: error.message }
    }

    console.log('Email sent:', data)
    return { success: true, messageId: data.id }
  } catch (error) {
    console.error('Email send error:', error)
    return { success: false, error: error.message }
  }
}

/**
 * Générer un code à 6 chiffres
 */
export function generateCode() {
  return Math.floor(100000 + Math.random() * 900000).toString()
}
