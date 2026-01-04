# Meat Cooking - Application Android

Application native Android pour calculer les temps de cuisson de viande.

## 🚀 Prérequis

- Android Studio Giraffe (2023.2.1) ou supérieur
- Kotlin 1.9+
- Android SDK 24+ (Android 7.0 Nougat)
- Gradle 8.0+

## 📱 Fonctionnalités

### Principales
- ✅ Catalogue complet des viandes et morceaux
- ✅ 40+ modes de cuisson différents
- ✅ Calcul précis du temps de cuisson
- ✅ Températures européennes/françaises (normes gustatives idéales)
- ✅ Conversion automatique d'unités (kg/lbs, °C/°F, cm/inches)
- ✅ Timer intégré avec notifications
- ✅ Historique des cuissons avec notes et photos
- ✅ Favoris et recettes sauvegardées
- ✅ Mode hors ligne (données en cache)

### Interface
- Design Material Design 3
- Dark theme supporté
- Animations fluides
- Jetpack Compose pour l'UI
- Widgets Android

## 🏗️ Architecture

### Structure du projet
```
app/
├── src/
│   ├── main/
│   │   ├── java/com/meatcooking/
│   │   │   ├── MeatCookingApplication.kt
│   │   │   ├── data/              # Couche données
│   │   │   │   ├── model/
│   │   │   │   │   ├── Meat.kt
│   │   │   │   │   ├── CookingMethod.kt
│   │   │   │   │   ├── CookingHistory.kt
│   │   │   │   │   └── User.kt
│   │   │   │   ├── repository/
│   │   │   │   │   ├── MeatRepository.kt
│   │   │   │   │   ├── CookingRepository.kt
│   │   │   │   │   └── HistoryRepository.kt
│   │   │   │   ├── local/
│   │   │   │   │   ├── dao/
│   │   │   │   │   └── database/
│   │   │   │   └── remote/
│   │   │   │       ├── ApiService.kt
│   │   │   │       └── dto/
│   │   │   ├── ui/                # Interface utilisateur
│   │   │   │   ├── theme/
│   │   │   │   │   ├── Color.kt
│   │   │   │   │   ├── Theme.kt
│   │   │   │   │   └── Type.kt
│   │   │   │   ├── screens/
│   │   │   │   │   ├── home/
│   │   │   │   │   │   ├── HomeScreen.kt
│   │   │   │   │   │   └── HomeViewModel.kt
│   │   │   │   │   ├── meats/
│   │   │   │   │   │   ├── MeatListScreen.kt
│   │   │   │   │   │   ├── MeatDetailScreen.kt
│   │   │   │   │   │   └── MeatViewModel.kt
│   │   │   │   │   ├── cooking/
│   │   │   │   │   │   ├── CookingCalculatorScreen.kt
│   │   │   │   │   │   ├── CookingTimerScreen.kt
│   │   │   │   │   │   └── CookingViewModel.kt
│   │   │   │   │   ├── history/
│   │   │   │   │   │   ├── HistoryScreen.kt
│   │   │   │   │   │   └── HistoryViewModel.kt
│   │   │   │   │   └── settings/
│   │   │   │   │       ├── SettingsScreen.kt
│   │   │   │   │       └── SettingsViewModel.kt
│   │   │   │   ├── components/
│   │   │   │   └── navigation/
│   │   │   │       └── NavGraph.kt
│   │   │   ├── domain/            # Logique métier
│   │   │   │   ├── usecase/
│   │   │   │   └── calculator/
│   │   │   │       └── CookingCalculator.kt
│   │   │   └── util/              # Utilitaires
│   │   │       ├── UnitConverter.kt
│   │   │       ├── NotificationHelper.kt
│   │   │       └── Extensions.kt
│   │   ├── res/                   # Ressources
│   │   │   ├── drawable/
│   │   │   ├── values/
│   │   │   │   ├── strings.xml
│   │   │   │   ├── colors.xml
│   │   │   │   └── themes.xml
│   │   │   └── raw/
│   │   └── AndroidManifest.xml
│   └── test/
└── build.gradle.kts
```

### Architecture Clean Architecture + MVVM
L'application suit les principes de Clean Architecture:
- **Data Layer**: Repositories, API, Database
- **Domain Layer**: Use Cases, Business Logic
- **Presentation Layer**: ViewModels, UI (Jetpack Compose)

### Technologies utilisées
- **Jetpack Compose**: Framework UI moderne
- **Kotlin Coroutines & Flow**: Programmation asynchrone
- **Retrofit**: Client HTTP
- **Room**: Base de données locale
- **Hilt**: Injection de dépendances
- **DataStore**: Préférences utilisateur
- **WorkManager**: Tâches en arrière-plan
- **Coil**: Chargement d'images
- **Material 3**: Design system

## 🔧 Installation

### 1. Cloner le projet
```bash
cd android-app
```

### 2. Ouvrir dans Android Studio
File → Open → Sélectionner le dossier `android-app`

### 3. Configuration
Modifier `gradle.properties` ou créer un fichier `local.properties`:
```properties
API_BASE_URL="http://10.0.2.2:3000/api"  # Emulator
# API_BASE_URL="http://localhost:3000/api"  # Device avec USB
# API_BASE_URL="https://your-api.com/api"  # Production
```

### 4. Sync Gradle
Tools → Gradle → Sync Project with Gradle Files

### 5. Build et Run
Sélectionner un émulateur ou appareil et appuyer sur Run (Shift+F10)

## 📝 Exemples de code

### build.gradle.kts (Module app)

\`\`\`kotlin
plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
    id("com.google.dagger.hilt.android")
    id("kotlin-kapt")
    id("kotlinx-serialization")
}

android {
    namespace = "com.meatcooking.app"
    compileSdk = 34

    defaultConfig {
        applicationId = "com.meatcooking.app"
        minSdk = 24
        targetSdk = 34
        versionCode = 1
        versionName = "1.0"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
        vectorDrawables {
            useSupportLibrary = true
        }

        buildConfigField("String", "API_BASE_URL", "\\"\${project.properties["API_BASE_URL"]}\\"")
    }

    buildTypes {
        release {
            isMinifyEnabled = true
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }

    kotlinOptions {
        jvmTarget = "17"
    }

    buildFeatures {
        compose = true
        buildConfig = true
    }

    composeOptions {
        kotlinCompilerExtensionVersion = "1.5.3"
    }

    packaging {
        resources {
            excludes += "/META-INF/{AL2.0,LGPL2.1}"
        }
    }
}

dependencies {
    // Core
    implementation("androidx.core:core-ktx:1.12.0")
    implementation("androidx.lifecycle:lifecycle-runtime-ktx:2.6.2")
    implementation("androidx.activity:activity-compose:1.8.0")

    // Compose
    implementation(platform("androidx.compose:compose-bom:2023.10.01"))
    implementation("androidx.compose.ui:ui")
    implementation("androidx.compose.ui:ui-graphics")
    implementation("androidx.compose.ui:ui-tooling-preview")
    implementation("androidx.compose.material3:material3")
    implementation("androidx.navigation:navigation-compose:2.7.5")

    // Hilt
    implementation("com.google.dagger:hilt-android:2.48")
    kapt("com.google.dagger:hilt-compiler:2.48")
    implementation("androidx.hilt:hilt-navigation-compose:1.1.0")

    // Networking
    implementation("com.squareup.retrofit2:retrofit:2.9.0")
    implementation("com.squareup.retrofit2:converter-gson:2.9.0")
    implementation("com.squareup.okhttp3:logging-interceptor:4.11.0")

    // Coroutines
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-android:1.7.3")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.7.3")

    // Room
    implementation("androidx.room:room-runtime:2.6.0")
    implementation("androidx.room:room-ktx:2.6.0")
    kapt("androidx.room:room-compiler:2.6.0")

    // DataStore
    implementation("androidx.datastore:datastore-preferences:1.0.0")

    // WorkManager
    implementation("androidx.work:work-runtime-ktx:2.8.1")

    // Coil (Image Loading)
    implementation("io.coil-kt:coil-compose:2.5.0")

    // Testing
    testImplementation("junit:junit:4.13.2")
    androidTestImplementation("androidx.test.ext:junit:1.1.5")
    androidTestImplementation("androidx.test.espresso:espresso-core:3.5.1")
    androidTestImplementation(platform("androidx.compose:compose-bom:2023.10.01"))
    androidTestImplementation("androidx.compose.ui:ui-test-junit4")
    debugImplementation("androidx.compose.ui:ui-tooling")
    debugImplementation("androidx.compose.ui:ui-test-manifest")
}
\`\`\`

### API Service avec Retrofit

\`\`\`kotlin
// data/remote/ApiService.kt
import retrofit2.http.*

interface ApiService {
    @GET("meats")
    suspend fun getMeats(): List<Meat>

    @GET("meats/categories")
    suspend fun getCategories(): List<String>

    @GET("meats/{id}")
    suspend fun getMeatById(@Path("id") meatId: String): Meat

    @POST("cooking/calculate")
    suspend fun calculateCookingTime(@Body params: CookingParameters): CookingResult

    @POST("auth/login")
    suspend fun login(@Body credentials: LoginRequest): LoginResponse

    @GET("history")
    suspend fun getHistory(
        @Query("limit") limit: Int = 50,
        @Query("skip") skip: Int = 0
    ): HistoryResponse

    @POST("history")
    suspend fun saveHistory(@Body history: CookingHistoryRequest): CookingHistory

    @GET("user/profile")
    suspend fun getUserProfile(@Header("Authorization") token: String): User
}

// data/remote/RetrofitInstance.kt
object RetrofitInstance {
    private val okHttpClient = OkHttpClient.Builder()
        .addInterceptor(HttpLoggingInterceptor().apply {
            level = HttpLoggingInterceptor.Level.BODY
        })
        .addInterceptor { chain ->
            val original = chain.request()
            val requestBuilder = original.newBuilder()
                .header("Content-Type", "application/json")

            // Add auth token if available
            val token = TokenManager.getToken()
            if (token != null) {
                requestBuilder.header("Authorization", "Bearer $token")
            }

            chain.proceed(requestBuilder.build())
        }
        .build()

    val api: ApiService by lazy {
        Retrofit.Builder()
            .baseUrl(BuildConfig.API_BASE_URL)
            .client(okHttpClient)
            .addConverterFactory(GsonConverterFactory.create())
            .build()
            .create(ApiService::class.java)
    }
}
\`\`\`

### ViewModel avec StateFlow

\`\`\`kotlin
// ui/screens/cooking/CookingViewModel.kt
@HiltViewModel
class CookingViewModel @Inject constructor(
    private val cookingRepository: CookingRepository,
    private val meatRepository: MeatRepository
) : ViewModel() {

    private val _uiState = MutableStateFlow(CookingUiState())
    val uiState: StateFlow<CookingUiState> = _uiState.asStateFlow()

    init {
        loadMeats()
    }

    private fun loadMeats() {
        viewModelScope.launch {
            _uiState.update { it.copy(isLoading = true) }

            meatRepository.getMeats()
                .onSuccess { meats ->
                    _uiState.update {
                        it.copy(
                            meats = meats,
                            isLoading = false
                        )
                    }
                }
                .onFailure { error ->
                    _uiState.update {
                        it.copy(
                            error = error.message,
                            isLoading = false
                        )
                    }
                }
        }
    }

    fun calculateCookingTime(params: CookingParameters) {
        viewModelScope.launch {
            _uiState.update { it.copy(isCalculating = true) }

            cookingRepository.calculateCookingTime(params)
                .onSuccess { result ->
                    _uiState.update {
                        it.copy(
                            cookingResult = result,
                            isCalculating = false
                        )
                    }
                }
                .onFailure { error ->
                    _uiState.update {
                        it.copy(
                            error = error.message,
                            isCalculating = false
                        )
                    }
                }
        }
    }
}

data class CookingUiState(
    val meats: List<Meat> = emptyList(),
    val selectedMeat: Meat? = null,
    val selectedCut: MeatCut? = null,
    val cookingResult: CookingResult? = null,
    val isLoading: Boolean = false,
    val isCalculating: Boolean = false,
    val error: String? = null
)
\`\`\`

### Screen avec Jetpack Compose

\`\`\`kotlin
// ui/screens/cooking/CookingCalculatorScreen.kt
@Composable
fun CookingCalculatorScreen(
    viewModel: CookingViewModel = hiltViewModel(),
    onNavigateToTimer: (CookingResult) -> Unit
) {
    val uiState by viewModel.uiState.collectAsState()

    var weight by remember { mutableStateOf("0.5") }
    var thickness by remember { mutableStateOf("3.0") }
    var selectedMethod by remember { mutableStateOf(CookingMethod.POELE) }
    var selectedDoneness by remember { mutableStateOf(Doneness.A_POINT) }

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Calculateur de cuisson") }
            )
        }
    ) { paddingValues ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
                .verticalScroll(rememberScrollState())
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            // Sélection de viande
            Card {
                Column(modifier = Modifier.padding(16.dp)) {
                    Text("Viande", style = MaterialTheme.typography.titleMedium)

                    Spacer(modifier = Modifier.height(8.dp))

                    // Dropdown pour sélectionner la viande
                    ExposedDropdownMenuBox(
                        expanded = false,
                        onExpandedChange = { }
                    ) {
                        OutlinedTextField(
                            value = uiState.selectedMeat?.name ?: "Sélectionner",
                            onValueChange = { },
                            readOnly = true,
                            label = { Text("Type de viande") },
                            trailingIcon = { ExposedDropdownMenuDefaults.TrailingIcon(expanded = false) },
                            modifier = Modifier.fillMaxWidth()
                        )
                    }
                }
            }

            // Paramètres
            Card {
                Column(modifier = Modifier.padding(16.dp)) {
                    Text("Paramètres", style = MaterialTheme.typography.titleMedium)

                    Spacer(modifier = Modifier.height(8.dp))

                    OutlinedTextField(
                        value = weight,
                        onValueChange = { weight = it },
                        label = { Text("Poids (kg)") },
                        keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Decimal),
                        modifier = Modifier.fillMaxWidth()
                    )

                    Spacer(modifier = Modifier.height(8.dp))

                    OutlinedTextField(
                        value = thickness,
                        onValueChange = { thickness = it },
                        label = { Text("Épaisseur (cm)") },
                        keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Decimal),
                        modifier = Modifier.fillMaxWidth()
                    )
                }
            }

            // Résultat
            if (uiState.cookingResult != null) {
                ResultCard(
                    result = uiState.cookingResult!!,
                    onStartTimer = { onNavigateToTimer(uiState.cookingResult!!) }
                )
            }

            // Bouton de calcul
            Button(
                onClick = {
                    viewModel.calculateCookingTime(
                        CookingParameters(
                            meatId = uiState.selectedMeat?.id ?: "",
                            cutName = uiState.selectedCut?.name ?: "",
                            cookingMethod = selectedMethod,
                            weight = WeightData(weight.toDoubleOrNull() ?: 0.0, "kg"),
                            targetDoneness = selectedDoneness
                        )
                    )
                },
                modifier = Modifier.fillMaxWidth(),
                enabled = !uiState.isCalculating
            ) {
                if (uiState.isCalculating) {
                    CircularProgressIndicator(
                        modifier = Modifier.size(24.dp),
                        color = MaterialTheme.colorScheme.onPrimary
                    )
                } else {
                    Text("Calculer")
                }
            }
        }
    }
}

@Composable
fun ResultCard(result: CookingResult, onStartTimer: () -> Unit) {
    Card {
        Column(modifier = Modifier.padding(16.dp)) {
            Text("Résultat", style = MaterialTheme.typography.titleMedium)

            Spacer(modifier = Modifier.height(12.dp))

            ResultRow("Temps de cuisson", "${result.cookingTime} min")
            ResultRow("Temps de repos", "${result.restingTime} min")
            ResultRow("Temps total", "${result.totalTime} min")
            ResultRow("Température à cœur", "${result.targetCoreTemperature}°C")

            Spacer(modifier = Modifier.height(12.dp))

            Button(
                onClick = onStartTimer,
                modifier = Modifier.fillMaxWidth()
            ) {
                Icon(Icons.Default.Timer, contentDescription = null)
                Spacer(modifier = Modifier.width(8.dp))
                Text("Démarrer le timer")
            }
        }
    }
}

@Composable
fun ResultRow(label: String, value: String) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(vertical = 4.dp),
        horizontalArrangement = Arrangement.SpaceBetween
    ) {
        Text(label)
        Text(value, fontWeight = FontWeight.Bold)
    }
}
\`\`\`

### Notification Service

\`\`\`kotlin
// util/NotificationHelper.kt
class NotificationHelper(private val context: Context) {

    companion object {
        const val CHANNEL_ID = "cooking_timer_channel"
        const val NOTIFICATION_ID = 1
    }

    init {
        createNotificationChannel()
    }

    private fun createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val channel = NotificationChannel(
                CHANNEL_ID,
                "Timer de cuisson",
                NotificationManager.IMPORTANCE_HIGH
            ).apply {
                description = "Notifications pour le timer de cuisson"
                enableVibration(true)
                setSound(
                    RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION),
                    null
                )
            }

            val notificationManager = context.getSystemService(NotificationManager::class.java)
            notificationManager.createNotificationChannel(channel)
        }
    }

    fun showTimerNotification(title: String, message: String) {
        val notification = NotificationCompat.Builder(context, CHANNEL_ID)
            .setSmallIcon(R.drawable.ic_notification)
            .setContentTitle(title)
            .setContentText(message)
            .setPriority(NotificationCompat.PRIORITY_HIGH)
            .setAutoCancel(true)
            .build()

        NotificationManagerCompat.from(context).notify(NOTIFICATION_ID, notification)
    }
}
\`\`\`

## 🎨 Personnalisation

### Thème Material 3
Modifier `ui/theme/Color.kt` et `ui/theme/Theme.kt` pour personnaliser les couleurs.

### Localisation
Ajouter des fichiers `strings.xml` dans `res/values-XX/` pour supporter plusieurs langues.

## 🧪 Tests

### Tests unitaires
```bash
./gradlew test
```

### Tests instrumentés
```bash
./gradlew connectedAndroidTest
```

## 📦 Build pour production

### 1. Configuration
- Changer l'URL de l'API vers la production dans `gradle.properties`
- Configurer le keystore pour la signature
- Activer ProGuard/R8

### 2. Build APK
```bash
./gradlew assembleRelease
```

### 3. Build AAB (Google Play)
```bash
./gradlew bundleRelease
```

## 🔐 Sécurité

- Tokens JWT stockés dans EncryptedSharedPreferences
- HTTPS uniquement en production
- ProGuard/R8 pour obfusquer le code
- Certificate pinning (optionnel)

## 📱 Widgets (optionnel)

Des widgets Android peuvent être ajoutés pour afficher:
- Les recettes favorites
- L'historique récent
- Un timer de cuisson en cours

## 🐛 Debug

### Logcat
Utiliser Timber pour les logs:
```kotlin
Timber.d("Calculating cooking time for %s", meatName)
```

## 📄 Licence
ISC
