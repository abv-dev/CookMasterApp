import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { settingsService } from '../services/settingsService'

function Auth() {
  const navigate = useNavigate()
  const { login, register, sendVerificationCode, verifyCode } = useAuth()
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // États pour le flow d'inscription
  const [step, setStep] = useState(1) // 1: email, 2: code, 3: password
  const [codeSent, setCodeSent] = useState(false)
  const [codeVerified, setCodeVerified] = useState(false)
  const [countdown, setCountdown] = useState(0)

  const settings = settingsService.getSettings()
  const lang = settings.language === 'auto'
    ? settingsService.detectBrowserLanguage()
    : settings.language

  const t = {
    login: lang === 'en' ? 'Login' : 'Connexion',
    register: lang === 'en' ? 'Sign Up' : 'Inscription',
    email: lang === 'en' ? 'Email' : 'Email',
    password: lang === 'en' ? 'Password' : 'Mot de passe',
    name: lang === 'en' ? 'Name (optional)' : 'Nom (optionnel)',
    submit: lang === 'en' ? 'Continue' : 'Continuer',
    switchToRegister: lang === 'en' ? "Don't have an account?" : "Pas encore de compte ?",
    switchToLogin: lang === 'en' ? 'Already have an account?' : 'Déjà un compte ?',
    signUp: lang === 'en' ? 'Sign up' : "S'inscrire",
    signIn: lang === 'en' ? 'Sign in' : 'Se connecter',
    orContinue: lang === 'en' ? 'or' : 'ou',
    skip: lang === 'en' ? 'Continue without account' : 'Continuer sans compte',
    welcome: lang === 'en' ? 'CookMaster' : 'CookMaster',
    subtitle: lang === 'en'
      ? 'Sync your history and favorites'
      : 'Synchronisez historique et favoris',
    minPassword: lang === 'en' ? 'Min. 6 characters' : 'Min. 6 caractères',
    sendCode: lang === 'en' ? 'Send code' : 'Envoyer le code',
    verifyCode: lang === 'en' ? 'Verify' : 'Vérifier',
    codeSent: lang === 'en' ? 'Code sent!' : 'Code envoyé !',
    codeVerified: lang === 'en' ? 'Email verified!' : 'Email vérifié !',
    enterCode: lang === 'en' ? 'Enter the 6-digit code' : 'Entrez le code à 6 chiffres',
    resendCode: lang === 'en' ? 'Resend code' : 'Renvoyer le code',
    checkEmail: lang === 'en' ? 'Check your email' : 'Vérifiez vos emails',
    step1: lang === 'en' ? 'Step 1: Email' : 'Étape 1 : Email',
    step2: lang === 'en' ? 'Step 2: Verification' : 'Étape 2 : Vérification',
    step3: lang === 'en' ? 'Step 3: Password' : 'Étape 3 : Mot de passe'
  }

  // Countdown pour le renvoi de code
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [countdown])

  // Reset form when switching modes
  const handleModeSwitch = (toLogin) => {
    setIsLogin(toLogin)
    setError('')
    setStep(1)
    setCodeSent(false)
    setCodeVerified(false)
    setCode('')
  }

  // Envoyer le code de vérification
  const handleSendCode = async () => {
    if (!email) {
      setError(lang === 'en' ? 'Email required' : 'Email requis')
      return
    }

    setError('')
    setLoading(true)

    try {
      const result = await sendVerificationCode(email)
      if (result.success) {
        setCodeSent(true)
        setStep(2)
        setCountdown(60) // 60 secondes avant de pouvoir renvoyer
      } else {
        setError(result.error || 'Erreur')
      }
    } catch (err) {
      setError(lang === 'en' ? 'Server error' : 'Erreur serveur')
    } finally {
      setLoading(false)
    }
  }

  // Vérifier le code
  const handleVerifyCode = async () => {
    if (!code || code.length !== 6) {
      setError(lang === 'en' ? '6-digit code required' : 'Code à 6 chiffres requis')
      return
    }

    setError('')
    setLoading(true)

    try {
      const result = await verifyCode(email, code)
      if (result.success) {
        setCodeVerified(true)
        setStep(3)
      } else {
        setError(result.error || 'Code invalide')
      }
    } catch (err) {
      setError(lang === 'en' ? 'Server error' : 'Erreur serveur')
    } finally {
      setLoading(false)
    }
  }

  // Soumission finale (login ou register)
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      let result
      if (isLogin) {
        result = await login(email, password)
      } else {
        if (!codeVerified) {
          setError(lang === 'en' ? 'Please verify your email first' : 'Veuillez vérifier votre email d\'abord')
          setLoading(false)
          return
        }
        result = await register(email, password, name, code)
      }

      if (result.success) {
        navigate('/')
      } else {
        setError(result.error || 'Une erreur est survenue')
      }
    } catch (err) {
      setError(lang === 'en' ? 'Server connection error' : 'Erreur de connexion au serveur')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FFF0F0' }}>
      {/* Header avec bouton retour */}
      <header className="p-4">
        <button
          onClick={() => navigate('/')}
          className="text-accent font-medium"
        >
          ← {lang === 'en' ? 'Back' : 'Retour'}
        </button>
      </header>

      {/* Contenu principal */}
      <main className="flex-1 flex flex-col justify-center px-6 pb-8">
        {/* Logo et titre */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center text-4xl" style={{ backgroundColor: '#F97066' }}>
            🥩
          </div>
          <h1 className="text-2xl font-bold" style={{ color: '#2D3436' }}>{t.welcome}</h1>
          <p className="text-sm mt-1" style={{ color: '#636E72' }}>{t.subtitle}</p>
        </div>

        {/* Toggle Connexion / Inscription */}
        <div className="flex rounded-xl p-1 mb-6" style={{ backgroundColor: '#FFFFFF' }}>
          <button
            type="button"
            onClick={() => handleModeSwitch(true)}
            className="flex-1 py-3 rounded-lg text-sm font-semibold transition-all"
            style={{
              backgroundColor: isLogin ? '#F97066' : 'transparent',
              color: isLogin ? '#FFFFFF' : '#636E72'
            }}
          >
            {t.login}
          </button>
          <button
            type="button"
            onClick={() => handleModeSwitch(false)}
            className="flex-1 py-3 rounded-lg text-sm font-semibold transition-all"
            style={{
              backgroundColor: !isLogin ? '#F97066' : 'transparent',
              color: !isLogin ? '#FFFFFF' : '#636E72'
            }}
          >
            {t.register}
          </button>
        </div>

        {/* Indicateur d'étapes pour inscription */}
        {!isLogin && (
          <div className="flex justify-center gap-2 mb-4">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className="w-8 h-1 rounded-full transition-all"
                style={{
                  backgroundColor: step >= s ? '#F97066' : '#E0E0E0'
                }}
              />
            ))}
          </div>
        )}

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* === MODE CONNEXION === */}
          {isLogin && (
            <>
              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#2D3436' }}>
                  {t.email}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-base"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '2px solid #E0E0E0',
                    color: '#2D3436',
                    outline: 'none'
                  }}
                  placeholder="email@exemple.com"
                  required
                  autoComplete="email"
                  onFocus={(e) => e.target.style.borderColor = '#F97066'}
                  onBlur={(e) => e.target.style.borderColor = '#E0E0E0'}
                />
              </div>

              {/* Mot de passe */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#2D3436' }}>
                  {t.password}
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-base"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '2px solid #E0E0E0',
                    color: '#2D3436',
                    outline: 'none'
                  }}
                  placeholder="••••••••"
                  required
                  minLength={6}
                  autoComplete="current-password"
                  onFocus={(e) => e.target.style.borderColor = '#F97066'}
                  onBlur={(e) => e.target.style.borderColor = '#E0E0E0'}
                />
              </div>

              {/* Bouton connexion */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl text-base font-semibold transition-all"
                style={{
                  background: loading ? '#CCCCCC' : 'linear-gradient(135deg, #F97066, #ff8a80)',
                  color: '#FFFFFF',
                  boxShadow: loading ? 'none' : '0 4px 12px rgba(249, 112, 102, 0.4)'
                }}
              >
                {loading ? '...' : t.signIn}
              </button>
            </>
          )}

          {/* === MODE INSCRIPTION === */}
          {!isLogin && (
            <>
              {/* Étape 1: Email */}
              {step === 1 && (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#2D3436' }}>
                      {t.email}
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl text-base"
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: '2px solid #E0E0E0',
                        color: '#2D3436',
                        outline: 'none'
                      }}
                      placeholder="email@exemple.com"
                      required
                      autoComplete="email"
                      onFocus={(e) => e.target.style.borderColor = '#F97066'}
                      onBlur={(e) => e.target.style.borderColor = '#E0E0E0'}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleSendCode}
                    disabled={loading || !email}
                    className="w-full py-4 rounded-xl text-base font-semibold transition-all"
                    style={{
                      background: loading || !email ? '#CCCCCC' : 'linear-gradient(135deg, #F97066, #ff8a80)',
                      color: '#FFFFFF',
                      boxShadow: loading || !email ? 'none' : '0 4px 12px rgba(249, 112, 102, 0.4)'
                    }}
                  >
                    {loading ? '...' : t.sendCode}
                  </button>
                </>
              )}

              {/* Étape 2: Code de vérification */}
              {step === 2 && (
                <>
                  <div className="text-center mb-4 p-4 rounded-xl" style={{ backgroundColor: '#E8F5E9' }}>
                    <p className="text-sm font-medium" style={{ color: '#2E7D32' }}>
                      ✓ {t.codeSent}
                    </p>
                    <p className="text-xs mt-1" style={{ color: '#636E72' }}>
                      {t.checkEmail}: {email}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#2D3436' }}>
                      {t.enterCode}
                    </label>
                    <input
                      type="text"
                      value={code}
                      onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      className="w-full px-4 py-3 rounded-xl text-center text-2xl font-bold tracking-widest"
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: '2px solid #E0E0E0',
                        color: '#2D3436',
                        outline: 'none',
                        letterSpacing: '0.5em'
                      }}
                      placeholder="000000"
                      maxLength={6}
                      autoComplete="one-time-code"
                      onFocus={(e) => e.target.style.borderColor = '#F97066'}
                      onBlur={(e) => e.target.style.borderColor = '#E0E0E0'}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleVerifyCode}
                    disabled={loading || code.length !== 6}
                    className="w-full py-4 rounded-xl text-base font-semibold transition-all"
                    style={{
                      background: loading || code.length !== 6 ? '#CCCCCC' : 'linear-gradient(135deg, #F97066, #ff8a80)',
                      color: '#FFFFFF',
                      boxShadow: loading || code.length !== 6 ? 'none' : '0 4px 12px rgba(249, 112, 102, 0.4)'
                    }}
                  >
                    {loading ? '...' : t.verifyCode}
                  </button>

                  {/* Bouton renvoyer */}
                  <button
                    type="button"
                    onClick={handleSendCode}
                    disabled={countdown > 0 || loading}
                    className="w-full py-2 text-sm font-medium"
                    style={{ color: countdown > 0 ? '#B2BEC3' : '#F97066' }}
                  >
                    {countdown > 0 ? `${t.resendCode} (${countdown}s)` : t.resendCode}
                  </button>
                </>
              )}

              {/* Étape 3: Mot de passe et nom */}
              {step === 3 && (
                <>
                  <div className="text-center mb-4 p-4 rounded-xl" style={{ backgroundColor: '#E8F5E9' }}>
                    <p className="text-sm font-medium" style={{ color: '#2E7D32' }}>
                      ✓ {t.codeVerified}
                    </p>
                  </div>

                  {/* Nom */}
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#2D3436' }}>
                      {t.name}
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl text-base"
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: '2px solid #E0E0E0',
                        color: '#2D3436',
                        outline: 'none'
                      }}
                      placeholder="Jean Dupont"
                      onFocus={(e) => e.target.style.borderColor = '#F97066'}
                      onBlur={(e) => e.target.style.borderColor = '#E0E0E0'}
                    />
                  </div>

                  {/* Mot de passe */}
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#2D3436' }}>
                      {t.password}
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl text-base"
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: '2px solid #E0E0E0',
                        color: '#2D3436',
                        outline: 'none'
                      }}
                      placeholder="••••••••"
                      required
                      minLength={6}
                      autoComplete="new-password"
                      onFocus={(e) => e.target.style.borderColor = '#F97066'}
                      onBlur={(e) => e.target.style.borderColor = '#E0E0E0'}
                    />
                    <p className="text-xs mt-1" style={{ color: '#636E72' }}>{t.minPassword}</p>
                  </div>

                  {/* Bouton inscription */}
                  <button
                    type="submit"
                    disabled={loading || password.length < 6}
                    className="w-full py-4 rounded-xl text-base font-semibold transition-all"
                    style={{
                      background: loading || password.length < 6 ? '#CCCCCC' : 'linear-gradient(135deg, #F97066, #ff8a80)',
                      color: '#FFFFFF',
                      boxShadow: loading || password.length < 6 ? 'none' : '0 4px 12px rgba(249, 112, 102, 0.4)'
                    }}
                  >
                    {loading ? '...' : t.signUp}
                  </button>
                </>
              )}
            </>
          )}

          {/* Message d'erreur */}
          {error && (
            <div
              className="px-4 py-3 rounded-xl text-sm font-medium"
              style={{ backgroundColor: '#FFEBEE', color: '#E74C3C' }}
            >
              {error}
            </div>
          )}
        </form>

        {/* Lien pour changer de mode */}
        <p className="text-center mt-6 text-sm" style={{ color: '#636E72' }}>
          {isLogin ? t.switchToRegister : t.switchToLogin}{' '}
          <button
            type="button"
            onClick={() => handleModeSwitch(!isLogin)}
            className="font-semibold"
            style={{ color: '#F97066' }}
          >
            {isLogin ? t.signUp : t.signIn}
          </button>
        </p>

        {/* Séparateur */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px" style={{ backgroundColor: '#E0E0E0' }}></div>
          <span className="px-4 text-sm" style={{ color: '#636E72' }}>{t.orContinue}</span>
          <div className="flex-1 h-px" style={{ backgroundColor: '#E0E0E0' }}></div>
        </div>

        {/* Bouton passer */}
        <button
          type="button"
          onClick={() => navigate('/')}
          className="w-full py-3 rounded-xl text-sm font-medium"
          style={{
            backgroundColor: '#FFFFFF',
            color: '#636E72',
            border: '2px solid #E0E0E0'
          }}
        >
          {t.skip}
        </button>
      </main>
    </div>
  )
}

export default Auth
