# 🎨 Guide de Génération des Icônes Android

Ce guide explique comment générer toutes les icônes nécessaires pour l'application Android.

---

## 📋 Ce dont vous avez besoin

- Un logo au format PNG 1024×1024 pixels
- Fond transparent ou couleur unie
- Marges de sécurité (ne pas mettre d'éléments importants sur les bords)

---

## 🚀 Méthode 1 : Android Studio Image Asset Studio (RECOMMANDÉ)

### Étape 1 : Préparer votre Logo

1. Créer un logo PNG 1024×1024
2. S'assurer qu'il y a des marges (environ 10% sur chaque côté)
3. Le logo doit être centré

### Étape 2 : Générer les Icônes dans Android Studio

1. Ouvrir le projet dans **Android Studio**
2. Clic droit sur `res` > **New** > **Image Asset**
3. Configurer les paramètres :

**Icon Type** : `Launcher Icons (Adaptive and Legacy)`

**Foreground Layer** :
```
Source Asset Type:    Image
Path:                 [Votre logo 1024×1024]
Scaling:              Trim (ou ajuster selon besoin)
Resize:               100%
```

**Background Layer** :
```
Source Asset Type:    Color
Color:                #1A1A1A (ou votre couleur de marque)
```

4. Cliquer sur **Next**
5. Vérifier la prévisualisation sur différents devices
6. Cliquer sur **Finish**

**Résultat** : Android Studio génère automatiquement toutes les tailles d'icônes :
- `mipmap-mdpi/` (48×48)
- `mipmap-hdpi/` (72×72)
- `mipmap-xhdpi/` (96×96)
- `mipmap-xxhdpi/` (144×144)
- `mipmap-xxxhdpi/` (192×192)
- `mipmap-anydpi-v26/` (adaptive icons)

---

## 🌐 Méthode 2 : Générateur en Ligne

Si vous n'avez pas Android Studio disponible :

### Option A : Icon Kitchen

1. Aller sur **https://icon.kitchen/**
2. Upload votre logo 1024×1024
3. Configurer :
   - **Style** : Adaptive
   - **Background** : Custom color `#1A1A1A`
   - **Padding** : 10-20%
4. Télécharger le fichier ZIP
5. Extraire et copier les dossiers `mipmap-*` dans `app/src/main/res/`

### Option B : AppIcon.co

1. Aller sur **https://appicon.co/**
2. Upload votre logo
3. Sélectionner **Android** uniquement
4. Télécharger
5. Copier les fichiers dans votre projet

### Option C : Android Asset Studio

1. Aller sur **https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html**
2. Suivre les étapes
3. Télécharger le package
4. Intégrer dans le projet

---

## 📐 Tailles Requises pour Android

Si vous générez manuellement :

| Densité | Taille (px) | Dossier |
|---------|-------------|---------|
| mdpi    | 48×48       | mipmap-mdpi |
| hdpi    | 72×72       | mipmap-hdpi |
| xhdpi   | 96×96       | mipmap-xhdpi |
| xxhdpi  | 144×144     | mipmap-xxhdpi |
| xxxhdpi | 192×192     | mipmap-xxxhdpi |

### Adaptive Icons (Android 8.0+)

En plus des icônes classiques, créer :
- **Foreground** : L'icône elle-même (transparente)
- **Background** : Couleur ou image de fond

---

## 🎨 Guide de Design

### Règles de Base

1. **Padding** : Laisser 15-20% de marge sur tous les côtés
2. **Contraste** : L'icône doit être visible sur fond clair ET foncé
3. **Simplicité** : Éviter trop de détails (illisibles en petite taille)
4. **Forme** : Prévoir que l'icône sera rognée en cercle, carré arrondi, etc.

### Couleurs CookMaster

**Palette officielle** :
- Fond : `#1A1A1A` (noir profond)
- Accent : `#D4AF37` (or)
- Secondaire : `#FF6B35` (orange)

### Exemple de Design

**Option 1 : Icône Symbole**
- Un couteau et une fourchette stylisés en or (`#D4AF37`)
- Sur fond noir (`#1A1A1A`)
- Style minimaliste ligne fine

**Option 2 : Icône Lettre**
- La lettre "C" en style élégant
- Police Playfair Display ou similaire
- Couleur or sur fond noir

**Option 3 : Icône Flamme**
- Une flamme stylisée représentant la cuisson
- Dégradé or→orange
- Sur fond noir

---

## ✅ Vérification

Après génération, vérifier :

1. **Toutes les densités présentes** :
```bash
ls app/src/main/res/mipmap-*/ic_launcher.png
```

2. **Adaptive icons configurés** :
```bash
ls app/src/main/res/mipmap-anydpi-v26/
```

3. **AndroidManifest.xml** :
```xml
<application
    android:icon="@mipmap/ic_launcher"
    android:roundIcon="@mipmap/ic_launcher_round"
    ...>
```

4. **Prévisualisation** :
   - Build l'app
   - Vérifier sur l'écran d'accueil
   - Tester sur différents devices/émulateurs

---

## 🛠️ Outils de Design (Optionnels)

### Pour créer votre logo

**Gratuits** :
- **Figma** (https://figma.com) - En ligne
- **Canva** (https://canva.com) - Simpl et intuitif
- **Inkscape** (https://inkscape.org) - Desktop, vectoriel

**Payants** :
- **Adobe Illustrator** - Professionnel
- **Affinity Designer** - Alternative à Illustrator

### Templates

Rechercher sur :
- **Figma Community** : Templates d'icônes Android
- **Dribbble** : Inspiration design
- **Behance** : Exemples de design d'apps

---

## 📝 Exemple de Commande (ImageMagick)

Si vous avez ImageMagick installé, vous pouvez générer les tailles :

```bash
# Installer ImageMagick
brew install imagemagick  # macOS
apt-get install imagemagick  # Linux

# Générer les tailles
convert logo.png -resize 48x48 mipmap-mdpi/ic_launcher.png
convert logo.png -resize 72x72 mipmap-hdpi/ic_launcher.png
convert logo.png -resize 96x96 mipmap-xhdpi/ic_launcher.png
convert logo.png -resize 144x144 mipmap-xxhdpi/ic_launcher.png
convert logo.png -resize 192x192 mipmap-xxxhdpi/ic_launcher.png
```

---

## 🎯 Checklist Finale

Avant de publier :

- [ ] Logo source 1024×1024 créé
- [ ] Icônes générées pour toutes les densités
- [ ] Adaptive icons configurés (Android 8.0+)
- [ ] Icône visible sur fond clair ET foncé
- [ ] Testé sur émulateur
- [ ] Testé sur device physique
- [ ] AndroidManifest.xml correctement configuré
- [ ] Pas d'erreurs de build
- [ ] Icône apparaît correctement sur l'écran d'accueil

---

## 🆘 Problèmes Courants

### L'icône est trop grande/petite

**Solution** : Ajuster le padding dans Image Asset Studio (15-25%)

### L'icône est floue

**Solution** : Vérifier que le logo source est en haute résolution (min 1024×1024)

### L'icône n'apparaît pas

**Solution** :
1. Clean & Rebuild le projet
2. Désinstaller l'app du device
3. Réinstaller

### Icône différente sur Android ancien

**Solution** : C'est normal ! Android 8.0+ utilise adaptive icons, les versions antérieures utilisent les legacy icons.

---

**Besoin d'aide pour le design ?**

Contactez un designer freelance sur :
- Fiverr (à partir de 5€)
- Upwork
- 99designs

Ou utilisez un template gratuit sur Figma Community !
