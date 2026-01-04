// Data
let meatsData = [];
let currentCategory = null;

// Normaliser un nom en ID (pour les recettes)
function normalizeToId(name) {
    return name.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '_')
        .replace(/^_+|_+$/g, '');
}

// Tips
const tips = [
    "Laissez toujours votre viande reposer après cuisson pour redistribuer les jus.",
    "Sortez la viande du réfrigérateur 30 minutes avant la cuisson.",
    "Utilisez un thermomètre pour vérifier la température à cœur.",
    "Pour un meilleur saisissement, séchez bien la viande avant cuisson.",
    "Ne piquez jamais la viande pendant la cuisson pour garder les jus.",
    "Assaisonnez généreusement avec du sel et du poivre avant cuisson.",
    "Pour les gros morceaux, utilisez la cuisson indirecte au barbecue.",
    "Laissez votre four préchauffer complètement avant d'enfourner."
];

// Sample data
const sampleMeats = [
    { _id: '1', name: 'Entrecôte', category: 'boeuf', description: 'Morceau tendre et savoureux', emoji: '🥩', cuts: [{ name: 'Entrecôte' }] },
    { _id: '2', name: 'Filet mignon', category: 'boeuf', description: 'Le plus tendre des morceaux', emoji: '🥩', cuts: [{ name: 'Filet' }] },
    { _id: '3', name: 'Côtelettes', category: 'porc', description: 'Parfaites pour le grill', emoji: '🥓', cuts: [{ name: 'Côtelette' }] },
    { _id: '4', name: 'Épaule', category: 'agneau', description: 'Idéale pour le four', emoji: '🐑', cuts: [{ name: 'Épaule' }] },
    { _id: '5', name: 'Poulet entier', category: 'volaille', description: 'Rôti au four traditionnel', emoji: '🍗', cuts: [{ name: 'Entier' }] },
    { _id: '6', name: 'Escalope', category: 'veau', description: 'Fine et délicate', emoji: '🥩', cuts: [{ name: 'Escalope' }] },
    { _id: '7', name: 'Magret de canard', category: 'gibier', description: 'Saveur unique', emoji: '🦆', cuts: [{ name: 'Magret' }] },
    { _id: '8', name: 'Côte de bœuf', category: 'boeuf', description: 'Pour les grandes occasions', emoji: '🥩', cuts: [{ name: 'Côte' }] },
    { _id: '9', name: 'Travers de porc', category: 'porc', description: 'Excellent au barbecue', emoji: '🥓', cuts: [{ name: 'Travers' }] },
    { _id: '10', name: 'Gigot', category: 'agneau', description: 'Classique des fêtes', emoji: '🐑', cuts: [{ name: 'Gigot' }] }
];

const samplePosts = [
    {
        id: '1',
        userName: 'Marie L.',
        title: 'Entrecôte parfaite!',
        content: 'J\'ai suivi les recommandations de l\'app pour mon entrecôte - résultat parfait! Saignante à souhait.',
        rating: 5,
        emoji: '🥩',
        time: 'Il y a 2 heures'
    },
    {
        id: '2',
        userName: 'Jean D.',
        title: 'Poulet rôti du dimanche',
        content: 'Premier essai avec le calculateur pour mon poulet. Temps de cuisson au top, je recommande!',
        rating: 5,
        emoji: '🍗',
        time: 'Il y a 5 heures'
    },
    {
        id: '3',
        userName: 'Sophie M.',
        title: 'Côtelettes d\'agneau',
        content: 'Cuisson parfaite pour les côtelettes. La température était idéale.',
        rating: 4,
        emoji: '🐑',
        time: 'Hier'
    }
];

// Timer management - Load from localStorage or start empty
let activeTimers = JSON.parse(localStorage.getItem('activeTimers') || '[]');
let timerIntervals = {}; // Store interval IDs for each timer

// Save timers to localStorage
function saveTimers() {
    localStorage.setItem('activeTimers', JSON.stringify(activeTimers));
}

// Generate unique ID for timers
function generateTimerId() {
    return 'timer_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// Start a new timer after calculation
function startNewTimer(name, totalTimeMinutes, meatInfo) {
    const totalSeconds = Math.round(totalTimeMinutes * 60);
    const timer = {
        id: generateTimerId(),
        name: name,
        total: totalSeconds,
        remaining: totalSeconds,
        paused: false,
        meatInfo: meatInfo,
        startedAt: Date.now()
    };

    activeTimers.push(timer);
    saveTimers();
    startTimerInterval(timer.id);
    loadTimers();

    // Show notification
    if (Notification.permission === 'granted') {
        new Notification('Minuteur démarré', {
            body: `${name}: ${formatTime(totalSeconds)}`,
            icon: '/favicon.ico'
        });
    }

    return timer.id;
}

// Start the countdown interval for a timer
function startTimerInterval(timerId) {
    if (timerIntervals[timerId]) {
        clearInterval(timerIntervals[timerId]);
    }

    timerIntervals[timerId] = setInterval(() => {
        const timer = activeTimers.find(t => t.id === timerId);
        if (!timer) {
            clearInterval(timerIntervals[timerId]);
            delete timerIntervals[timerId];
            return;
        }

        if (!timer.paused && timer.remaining > 0) {
            timer.remaining--;
            saveTimers();

            // Update display if on timer screen
            updateTimerDisplay(timerId);

            // Check if timer finished
            if (timer.remaining === 0) {
                onTimerComplete(timer);
            }
        }
    }, 1000);
}

// Called when timer reaches 0
function onTimerComplete(timer) {
    clearInterval(timerIntervals[timer.id]);
    delete timerIntervals[timer.id];

    // Play sound notification
    playTimerSound();

    // Show notification
    if (Notification.permission === 'granted') {
        new Notification('Cuisson terminée !', {
            body: `${timer.name} est prêt !`,
            icon: '/favicon.ico',
            requireInteraction: true
        });
    }

    // Update display
    loadTimers();
}

// Play notification sound
function playTimerSound() {
    try {
        // Create a simple beep sound using Web Audio API
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        gainNode.gain.value = 0.3;

        oscillator.start();
        setTimeout(() => {
            oscillator.stop();
            audioContext.close();
        }, 500);
    } catch (e) {
        console.log('Audio not available');
    }
}

// Pause a timer
function pauseTimer(timerId) {
    const timer = activeTimers.find(t => t.id === timerId);
    if (timer) {
        timer.paused = true;
        saveTimers();
        loadTimers();
    }
}

// Resume a paused timer
function resumeTimer(timerId) {
    const timer = activeTimers.find(t => t.id === timerId);
    if (timer) {
        timer.paused = false;
        saveTimers();
        loadTimers();
    }
}

// Stop and remove a timer
function stopTimer(timerId) {
    const timerIndex = activeTimers.findIndex(t => t.id === timerId);
    if (timerIndex !== -1) {
        clearInterval(timerIntervals[timerId]);
        delete timerIntervals[timerId];
        activeTimers.splice(timerIndex, 1);
        saveTimers();
        loadTimers();
    }
}

// Update the display of a single timer (called every second)
function updateTimerDisplay(timerId) {
    const timerCard = document.querySelector(`[data-timer-id="${timerId}"]`);
    if (!timerCard) return;

    const timer = activeTimers.find(t => t.id === timerId);
    if (!timer) return;

    const progress = (timer.remaining / timer.total) * 100;
    const progressColor = progress > 50 ? '#8B4513' : progress > 20 ? '#E07B39' : '#C62828';

    // Update time display
    const timeValue = timerCard.querySelector('.timer-time .value');
    if (timeValue) {
        timeValue.textContent = formatTime(timer.remaining);
    }

    // Update progress circle
    const progressCircle = timerCard.querySelector('circle:nth-child(2)');
    if (progressCircle) {
        progressCircle.setAttribute('stroke', progressColor);
        progressCircle.setAttribute('stroke-dashoffset', 2 * Math.PI * 80 * (1 - progress / 100));
    }

    // Update remaining time in info box
    const remainingBox = timerCard.querySelector('.remaining-time');
    if (remainingBox) {
        remainingBox.textContent = formatTime(timer.remaining);
    }
}

// Initialize all timer intervals on page load
function initializeTimerIntervals() {
    activeTimers.forEach(timer => {
        if (!timer.paused && timer.remaining > 0) {
            startTimerInterval(timer.id);
        }
    });
}

// Request notification permission
function requestNotificationPermission() {
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }
}

// Initialize
async function init() {
    try {
        const response = await fetch('/api/meats');
        const data = await response.json();
        meatsData = data.meats || sampleMeats;
    } catch (error) {
        meatsData = sampleMeats;
    }

    loadHome();
    loadExplorer();
    loadTimers();
    loadCommunity();
    populateCalculator();

    // Initialize timer intervals for any existing timers
    initializeTimerIntervals();

    // Request notification permission
    requestNotificationPermission();
}

// Screen navigation
function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    // Show selected screen
    document.getElementById(screenId).classList.add('active');

    // Update nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    event.currentTarget.classList.add('active');

    // Scroll to top
    window.scrollTo(0, 0);
}

// HOME SCREEN
function loadHome() {
    // Popular meats
    const popularMeatsHTML = meatsData.slice(0, 6).map(meat => `
        <div class="meat-card" onclick="showScreen('calculator'); selectMeatInCalculator('${meat._id}')">
            <div class="emoji">${meat.emoji || '🥩'}</div>
            <div class="name">${meat.name}</div>
            <div class="category">${meat.category}</div>
        </div>
    `).join('');
    document.getElementById('popularMeats').innerHTML = popularMeatsHTML;

    // Tip of the day
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById('tipOfDay').textContent = randomTip;
}

// EXPLORER SCREEN
function loadExplorer() {
    // Filter chips
    const categories = ['Toutes', ...new Set(meatsData.map(m => m.category))];
    const chipsHTML = categories.map(cat => `
        <div class="filter-chip ${cat === 'Toutes' ? 'active' : ''}"
             onclick="filterByCategory('${cat}')">
            ${cat === 'Toutes' ? 'Toutes' : cat.charAt(0).toUpperCase() + cat.slice(1)}
        </div>
    `).join('');
    document.getElementById('filterChips').innerHTML = chipsHTML;

    // Meats list
    renderMeatsList();

    // Search
    document.getElementById('searchInput').addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        renderMeatsList(query);
    });
}

function filterByCategory(category) {
    currentCategory = category === 'Toutes' ? null : category;

    // Update chips
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.classList.remove('active');
    });
    event.currentTarget.classList.add('active');

    renderMeatsList();
}

function renderMeatsList(searchQuery = '') {
    let filteredMeats = meatsData;

    if (currentCategory) {
        filteredMeats = filteredMeats.filter(m => m.category === currentCategory);
    }

    if (searchQuery) {
        filteredMeats = filteredMeats.filter(m =>
            m.name.toLowerCase().includes(searchQuery)
        );
    }

    const meatsHTML = filteredMeats.map(meat => `
        <div class="card" style="cursor: pointer;" onclick="showScreen('calculator'); selectMeatInCalculator('${meat._id}')">
            <div style="display: flex; gap: 15px; align-items: center;">
                <div style="font-size: 3em;">${meat.emoji || '🥩'}</div>
                <div style="flex: 1;">
                    <h3 style="margin-bottom: 5px;">${meat.name}</h3>
                    <p style="color: #6D4C41; margin-bottom: 5px;">${meat.description}</p>
                    <p style="color: #8B4513; font-size: 0.9em; font-weight: 600;">${meat.category}</p>
                </div>
                <div style="font-size: 1.5em; color: #8D6E63;">›</div>
            </div>
        </div>
    `).join('');

    document.getElementById('meatsList').innerHTML = meatsHTML || '<div class="card"><p style="text-align: center; color: #6D4C41;">Aucune viande trouvée</p></div>';
}

// TIMER SCREEN
function loadTimers() {
    if (activeTimers.length === 0) {
        document.getElementById('timersList').innerHTML = `
            <div class="card" style="text-align: center; padding: 60px 20px;">
                <div style="font-size: 4em; margin-bottom: 20px;">⏱️</div>
                <h2 style="color: #8B4513; margin-bottom: 10px;">Aucun minuteur actif</h2>
                <p style="color: #6D4C41; margin-bottom: 20px;">Lancez un calcul de cuisson pour commencer</p>
                <button class="btn btn-primary" onclick="showScreen('calculator')">
                    🧮 Calculer une cuisson
                </button>
            </div>
        `;
        return;
    }

    const timersHTML = activeTimers.map(timer => {
        const progress = (timer.remaining / timer.total) * 100;
        const progressColor = timer.remaining === 0 ? '#4CAF50' :
            (progress > 50 ? '#8B4513' : progress > 20 ? '#E07B39' : '#C62828');
        const statusText = timer.remaining === 0 ? 'Terminé !' :
            (timer.paused ? 'En pause' : 'En cours');
        const statusColor = timer.remaining === 0 ? '#4CAF50' :
            (timer.paused ? '#E07B39' : '#8B4513');

        return `
            <div class="timer-card" data-timer-id="${timer.id}">
                <div class="timer-header">
                    <div>
                        <h3 style="margin-bottom: 5px;">${timer.name}</h3>
                        <p style="color: ${statusColor}; font-weight: 600;">${statusText}</p>
                    </div>
                    <div style="width: 12px; height: 12px; border-radius: 50%; background: ${progressColor}; ${timer.remaining === 0 ? '' : (!timer.paused ? 'animation: pulse 1s infinite;' : '')}"></div>
                </div>

                <div class="timer-progress">
                    <svg width="180" height="180" style="transform: rotate(-90deg);">
                        <circle cx="90" cy="90" r="80" fill="none" stroke="#F5EBE0" stroke-width="12"/>
                        <circle cx="90" cy="90" r="80" fill="none" stroke="${progressColor}"
                                stroke-width="12"
                                stroke-dasharray="${2 * Math.PI * 80}"
                                stroke-dashoffset="${2 * Math.PI * 80 * (1 - progress / 100)}"
                                stroke-linecap="round"/>
                    </svg>
                    <div class="timer-time">
                        <div class="value">${timer.remaining === 0 ? '✓' : formatTime(timer.remaining)}</div>
                        <div class="label">${timer.remaining === 0 ? 'Prêt !' : 'restant'}</div>
                    </div>
                </div>

                <div class="timer-controls">
                    ${timer.remaining === 0 ? `
                        <button class="btn btn-primary" onclick="stopTimer('${timer.id}')" style="flex: 1;">
                            ✓ Terminé - Retirer
                        </button>
                    ` : (timer.paused ? `
                        <button class="btn btn-primary" onclick="resumeTimer('${timer.id}')">▶️ Reprendre</button>
                        <button class="btn btn-secondary" onclick="stopTimer('${timer.id}')" style="color: #C62828; border-color: #C62828;">⏹️ Arrêter</button>
                    ` : `
                        <button class="btn btn-secondary" onclick="pauseTimer('${timer.id}')">⏸️ Pause</button>
                        <button class="btn btn-secondary" onclick="stopTimer('${timer.id}')" style="color: #C62828; border-color: #C62828;">⏹️ Arrêter</button>
                    `)}
                </div>

                <div style="display: flex; gap: 10px; margin-top: 15px;">
                    <div style="flex: 1; background: #F5EBE0; padding: 12px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 0.85em; color: #6D4C41;">Total</div>
                        <div style="font-weight: bold; color: #3E2723;">${formatTime(timer.total)}</div>
                    </div>
                    <div style="flex: 1; background: #F5EBE0; padding: 12px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 0.85em; color: #6D4C41;">Restant</div>
                        <div class="remaining-time" style="font-weight: bold; color: #3E2723;">${formatTime(timer.remaining)}</div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    document.getElementById('timersList').innerHTML = timersHTML;
}

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) return `${hours}h ${minutes.toString().padStart(2, '0')}m`;
    if (minutes > 0) return `${minutes}m ${secs.toString().padStart(2, '0')}s`;
    return `${secs}s`;
}

// COMMUNITY SCREEN
function loadCommunity() {
    const postsHTML = samplePosts.map(post => `
        <div class="post-card">
            <div class="post-header">
                <div class="avatar">${post.userName.charAt(0)}</div>
                <div style="flex: 1;">
                    <div class="post-info">
                        <div class="name">${post.userName}</div>
                        <div class="time">${post.time}</div>
                    </div>
                </div>
                <div style="font-size: 2em;">${post.emoji}</div>
            </div>

            <h3 style="margin-bottom: 10px;">${post.title}</h3>
            <p style="color: #6D4C41; margin-bottom: 15px;">${post.content}</p>

            <div class="stars" style="margin-bottom: 15px;">
                ${'⭐'.repeat(post.rating)}${'☆'.repeat(5 - post.rating)}
            </div>

            <div style="display: flex; gap: 15px; padding-top: 15px; border-top: 1px solid #F5EBE0;">
                <button class="btn btn-secondary" style="flex: 1; padding: 10px;">👍 J'aime</button>
                <button class="btn btn-secondary" style="flex: 1; padding: 10px;">💬 Commenter</button>
                <button class="btn btn-secondary" style="flex: 1; padding: 10px;">↗️ Partager</button>
            </div>
        </div>
    `).join('');

    document.getElementById('postsList').innerHTML = postsHTML;
}

// CALCULATOR
function populateCalculator() {
    const select = document.getElementById('calcMeatSelect');
    select.innerHTML = '<option value="">Sélectionnez une viande...</option>' +
        meatsData.map(meat =>
            `<option value="${meat._id}">${meat.name} (${meat.category})</option>`
        ).join('');

    select.addEventListener('change', onCalcMeatSelect);
}

function selectMeatInCalculator(meatId) {
    document.getElementById('calcMeatSelect').value = meatId;
    onCalcMeatSelect();
}

function onCalcMeatSelect() {
    const meatId = document.getElementById('calcMeatSelect').value;
    const cutSelect = document.getElementById('calcCutSelect');

    if (!meatId) {
        cutSelect.disabled = true;
        cutSelect.innerHTML = '<option value="">Sélectionnez d\'abord une viande...</option>';
        return;
    }

    const meat = meatsData.find(m => m._id === meatId);
    if (meat && meat.cuts && meat.cuts.length > 0) {
        cutSelect.disabled = false;
        cutSelect.innerHTML = '<option value="">Sélectionnez un morceau...</option>' +
            meat.cuts.map(cut =>
                `<option value="${cut.name}">${cut.name}</option>`
            ).join('');
    }
}

async function calculate() {
    const meatId = document.getElementById('calcMeatSelect').value;
    const cutName = document.getElementById('calcCutSelect').value;
    const weight = parseFloat(document.getElementById('calcWeight').value);
    const thickness = parseFloat(document.getElementById('calcThickness').value);
    const doneness = document.getElementById('calcDoneness').value;
    const method = document.getElementById('calcMethod').value;

    if (!meatId || !cutName || !weight || !doneness) {
        alert('Veuillez remplir tous les champs obligatoires');
        return;
    }

    const resultDiv = document.getElementById('calcResult');
    resultDiv.innerHTML = '<div style="text-align: center; padding: 20px; color: #8B4513;">Calcul en cours...</div>';

    try {
        const response = await fetch('/api/cooking/calculate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                meatId, cutName, weight, thickness,
                initialTemperature: 20,
                doneness, method
            })
        });

        const data = await response.json();

        if (data.calculation) {
            const calc = data.calculation;
            resultDiv.innerHTML = `
                <div class="card" style="background: linear-gradient(135deg, #F5EBE0 0%, #FAF6F1 100%); border-left: 4px solid #E07B39;">
                    <h3 style="color: #8B4513; margin-bottom: 15px;">✅ Résultat du Calcul</h3>

                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 20px;">
                        <div style="background: white; padding: 15px; border-radius: 12px; text-align: center;">
                            <div style="color: #6D4C41; font-size: 0.9em;">Temps de cuisson</div>
                            <div style="color: #3E2723; font-size: 1.8em; font-weight: bold;">${calc.cookingTime} min</div>
                        </div>
                        <div style="background: white; padding: 15px; border-radius: 12px; text-align: center;">
                            <div style="color: #6D4C41; font-size: 0.9em;">Température cœur</div>
                            <div style="color: #3E2723; font-size: 1.8em; font-weight: bold;">${calc.targetTemperature}°C</div>
                        </div>
                        <div style="background: white; padding: 15px; border-radius: 12px; text-align: center;">
                            <div style="color: #6D4C41; font-size: 0.9em;">Température sécurité</div>
                            <div style="color: #3E2723; font-size: 1.8em; font-weight: bold;">${calc.safetyTemperature}°C</div>
                        </div>
                        <div style="background: white; padding: 15px; border-radius: 12px; text-align: center;">
                            <div style="color: #6D4C41; font-size: 0.9em;">Temps de repos</div>
                            <div style="color: #3E2723; font-size: 1.8em; font-weight: bold;">${calc.restingTime} min</div>
                        </div>
                    </div>

                    ${calc.instructions ? `
                        <div style="background: white; padding: 20px; border-radius: 12px; margin-bottom: 15px;">
                            <h4 style="color: #8B4513; margin-bottom: 12px;">📋 Instructions</h4>
                            <ul style="list-style: none; padding: 0;">
                                ${calc.instructions.map(inst => `
                                    <li style="padding: 8px 0; padding-left: 25px; position: relative;">
                                        <span style="position: absolute; left: 0;">🔥</span>
                                        ${inst}
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    ` : ''}

                    ${calc.tips ? `
                        <div style="background: white; padding: 20px; border-radius: 12px;">
                            <h4 style="color: #8B4513; margin-bottom: 12px;">💡 Conseils</h4>
                            <ul style="list-style: none; padding: 0;">
                                ${calc.tips.map(tip => `
                                    <li style="padding: 8px 0; padding-left: 25px; position: relative;">
                                        <span style="position: absolute; left: 0;">💡</span>
                                        ${tip}
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    ` : ''}

                    <button class="btn btn-primary" style="width: 100%; margin-top: 20px; padding: 15px; font-size: 1.1em;"
                            onclick="startTimerFromCalculation(${calc.cookingTime}, '${cutName}')">
                        ⏱️ Démarrer le minuteur (${calc.cookingTime} min)
                    </button>
                </div>
            `;
        }
    } catch (error) {
        console.error('Error:', error);
        resultDiv.innerHTML = '<div style="background: #FFE5E5; color: #C62828; padding: 15px; border-radius: 12px;">Erreur lors du calcul</div>';
    }
}

// Start timer from calculation result
function startTimerFromCalculation(cookingTimeMinutes, cutName) {
    const meatSelect = document.getElementById('calcMeatSelect');
    const meat = meatsData.find(m => m._id === meatSelect.value);
    const meatInfo = {
        meatName: meat ? meat.name : 'Viande',
        cutName: cutName
    };

    const timerName = cutName + (meat ? ' (' + meat.name + ')' : '');
    startNewTimer(timerName, cookingTimeMinutes, meatInfo);

    // Show success message and switch to timer screen
    const resultDiv = document.getElementById('calcResult');
    resultDiv.innerHTML = `
        <div class="card" style="background: #E8F5E9; border-left: 4px solid #4CAF50; text-align: center;">
            <div style="font-size: 3em; margin-bottom: 10px;">✅</div>
            <h3 style="color: #2E7D32; margin-bottom: 10px;">Minuteur démarré !</h3>
            <p style="color: #4CAF50; margin-bottom: 20px;">${timerName} - ${cookingTimeMinutes} minutes</p>
            <button class="btn btn-primary" onclick="document.querySelector('[onclick*=\\'timer\\']').click()">
                ⏱️ Voir les minuteurs
            </button>
        </div>
    `;
}

// ============================================
// CUT DETAIL MODAL
// ============================================
let currentMeatForModal = null;
let currentCutForModal = null;

function openCutModal(meatId, cutName) {
    const meat = meatsData.find(m => m._id === meatId);
    if (!meat) return;

    let cut = null;

    // Chercher dans les cuts directement ou dans les subcategories
    if (meat.cuts) {
        cut = meat.cuts.find(c => c.name === cutName);
    } else if (meat.subcategories) {
        if (meat.subcategories.classique) {
            cut = meat.subcategories.classique.cuts.find(c => c.name === cutName);
        }
        if (!cut && meat.subcategories.boucher) {
            cut = meat.subcategories.boucher.cuts.find(c => c.name === cutName);
        }
    }

    if (!cut) return;

    currentMeatForModal = meat;
    currentCutForModal = cut;

    // Titre du modal
    document.getElementById('cutModalTitle').innerHTML = `
        <div style="font-size: 3em; margin-bottom: 10px;">${meat.emoji || '🥩'}</div>
        <h1 style="font-size: 1.8em; margin-bottom: 5px;">${cut.name}</h1>
        <p style="opacity: 0.9;">${meat.name} - ${cut.description || ''}</p>
    `;

    // Corps du modal
    let bodyHTML = '';

    // Description rapide (températures et cuissons existantes)
    if (cut.temperatures && cut.temperatures.length > 0) {
        bodyHTML += `
            <div class="section-card">
                <div class="section-title"><span class="icon">🌡️</span> Températures de cuisson</div>
                <div class="carac-grid">
                    ${cut.temperatures.map(t => `
                        <div class="carac-item">
                            <div class="icon">🎯</div>
                            <div class="label">${t.doneness}</div>
                            <div class="value">${t.coreTemperature}°C</div>
                            <div style="font-size: 0.8em; color: #6D4C41; margin-top: 4px;">${t.description || ''}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Anatomie et origine
    if (cut.anatomie) {
        bodyHTML += `
            <div class="section-card">
                <div class="section-title"><span class="icon">🦴</span> Anatomie et origine</div>
                <div class="anatomie-grid">
                    ${cut.anatomie.localisation ? `
                        <div class="anatomie-item">
                            <div class="label">Localisation</div>
                            <div class="value">${cut.anatomie.localisation}</div>
                        </div>
                    ` : ''}
                    ${cut.anatomie.origine ? `
                        <div class="anatomie-item">
                            <div class="label">Origine</div>
                            <div class="value">${cut.anatomie.origine}</div>
                        </div>
                    ` : ''}
                    ${cut.anatomie.muscles ? `
                        <div class="anatomie-item">
                            <div class="label">Muscles</div>
                            <div class="value">${cut.anatomie.muscles.join(', ')}</div>
                        </div>
                    ` : ''}
                    ${cut.anatomie.categorie ? `
                        <div class="anatomie-item">
                            <div class="label">Catégorie</div>
                            <div class="value">${cut.anatomie.categorie}</div>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }

    // Technique du chef
    if (cut.techniqueDuChef && cut.techniqueDuChef.length > 0) {
        bodyHTML += `
            <div class="section-card">
                <div class="section-title"><span class="icon">👨‍🍳</span> Technique du Chef</div>
                <ul class="technique-list">
                    ${cut.techniqueDuChef.map((tech, i) => `
                        <li data-num="${i + 1}">${tech}</li>
                    `).join('')}
                </ul>
            </div>
        `;
    }

    // Caractéristiques typiques
    if (cut.caracteristiques) {
        const caracIcons = {
            texture: '🤲',
            gout: '👅',
            gras: '💧',
            fibres: '〰️',
            couleur: '🎨',
            tenue: '📏'
        };
        const caracLabels = {
            texture: 'Texture',
            gout: 'Goût',
            gras: 'Gras',
            fibres: 'Fibres',
            couleur: 'Couleur',
            tenue: 'Tenue'
        };

        bodyHTML += `
            <div class="section-card">
                <div class="section-title"><span class="icon">✨</span> Caractéristiques</div>
                <div class="carac-grid">
                    ${Object.entries(cut.caracteristiques).map(([key, value]) => `
                        <div class="carac-item">
                            <div class="icon">${caracIcons[key] || '•'}</div>
                            <div class="label">${caracLabels[key] || key}</div>
                            <div class="value">${value}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Méthodes de cuisson
    if (cut.cookingMethods && cut.cookingMethods.length > 0) {
        const methodNames = {
            'four_traditionnel': '🔥 Four traditionnel',
            'four_chaleur_tournante': '🌀 Four chaleur tournante',
            'four_basse_temperature': '🔅 Four basse température',
            'poele': '🍳 Poêle',
            'grill': '🔥 Grill',
            'plancha': '🔲 Plancha',
            'barbecue_charbon': '🔥 Barbecue charbon',
            'barbecue_gaz': '🔥 Barbecue gaz',
            'barbecue_basse_temp': '🔥 BBQ basse temp.',
            'braisage': '🥘 Braisage',
            'cocotte': '🥘 Cocotte',
            'mijoteuse': '🥣 Mijoteuse',
            'sous_vide': '💧 Sous-vide',
            'rotissoire': '🔄 Rôtissoire',
            'fumoir_chaud': '💨 Fumoir chaud',
            'friture': '🫕 Friture',
            'wok': '🥡 Wok'
        };

        bodyHTML += `
            <div class="section-card">
                <div class="section-title"><span class="icon">🍳</span> Méthodes de cuisson</div>
                <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                    ${cut.cookingMethods.map(m => `
                        <div class="sauce-chip">
                            ${methodNames[m.method] || m.method}
                            <span style="font-size: 0.85em; opacity: 0.8;">${m.temperatureRange ? `${m.temperatureRange.recommended}°C` : ''}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Sauces recommandées - CLIQUABLES
    if (cut.sauces && cut.sauces.length > 0) {
        bodyHTML += `
            <div class="section-card">
                <div class="section-title"><span class="icon">🥣</span> Sauces recommandées</div>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                    ${cut.sauces.map(s => {
                        const sauceId = normalizeToId(s.nom);
                        return `
                            <div class="sauce-chip clickable" onclick="showRecipe('${sauceId}')" title="${s.description || ''}" style="cursor: pointer;">
                                🥄 ${s.nom}
                                <span style="font-size: 0.8em; opacity: 0.7;">(${s.type})</span>
                                <span style="font-size: 0.8em;">📖</span>
                            </div>
                        `;
                    }).join('')}
                </div>
                <p style="font-size: 0.85em; color: #6D4C41; margin-top: 10px;">Cliquez sur une sauce pour voir la recette</p>
            </div>
        `;
    }

    // Accompagnements recommandés
    if (cut.accompagnements && cut.accompagnements.length > 0) {
        bodyHTML += `
            <div class="section-card">
                <div class="section-title"><span class="icon">🥗</span> Accompagnements recommandés</div>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                    ${cut.accompagnements.map(a => `
                        <div class="accomp-chip ${a.recetteId ? 'clickable' : ''}"
                             ${a.recetteId ? `onclick="showRecipe('${a.recetteId}')"` : ''}>
                            ${a.type === 'féculent' ? '🥔' : a.type === 'légume' ? '🥬' : a.type === 'salade' ? '🥗' : a.type === 'fruit' ? '🍎' : '🍽️'}
                            ${a.nom}
                            ${a.recetteId ? '<span style="font-size: 0.8em;">📖</span>' : ''}
                        </div>
                    `).join('')}
                </div>
                ${cut.accompagnements.some(a => a.recetteId) ? '<p style="font-size: 0.85em; color: #6D4C41; margin-top: 10px;">Cliquez sur un accompagnement orange pour voir la recette</p>' : ''}
            </div>
        `;
    }

    // Erreurs à éviter
    if (cut.erreursAEviter && cut.erreursAEviter.length > 0) {
        bodyHTML += `
            <div class="section-card">
                <div class="section-title"><span class="icon">⚠️</span> Erreurs à éviter</div>
                ${cut.erreursAEviter.map(e => `
                    <div class="erreur-card">
                        <div class="erreur-titre">❌ ${e.erreur}</div>
                        <div class="consequence">→ ${e.consequence}</div>
                        <div class="solution">${e.solution}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Le saviez-vous
    if (cut.leSaviezVous) {
        bodyHTML += `
            <div class="section-card">
                <div class="saviez-vous">
                    <div class="icon">💡</div>
                    <div class="content">
                        <div class="title">Le saviez-vous ?</div>
                        <div class="text">${cut.leSaviezVous}</div>
                    </div>
                </div>
            </div>
        `;
    }

    // Bouton "Voir les recettes" avec tri par type
    const allRecipes = [];
    if (cut.sauces && cut.sauces.length > 0) {
        cut.sauces.forEach(s => {
            allRecipes.push({ nom: s.nom, type: 'sauce', id: normalizeToId(s.nom) });
        });
    }
    if (cut.accompagnements && cut.accompagnements.length > 0) {
        cut.accompagnements.forEach(a => {
            if (a.recetteId && a.recetteId !== 'N/A') {
                allRecipes.push({ nom: a.nom, type: 'accompagnement', id: a.recetteId });
            }
        });
    }

    if (allRecipes.length > 0) {
        // Trier par type puis par nom
        allRecipes.sort((a, b) => {
            if (a.type !== b.type) return a.type.localeCompare(b.type);
            return a.nom.localeCompare(b.nom);
        });

        bodyHTML += `
            <div class="section-card" style="margin-top: 20px;">
                <div class="section-title"><span class="icon">📖</span> Toutes les recettes (${allRecipes.length})</div>
                <div style="margin-bottom: 15px;">
                    <h4 style="color: #8B4513; margin-bottom: 8px;">🥗 Accompagnements</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 15px;">
                        ${allRecipes.filter(r => r.type === 'accompagnement').map(r => `
                            <button class="accomp-chip clickable" onclick="showRecipe('${r.id}')" style="cursor: pointer; border: none;">
                                ${r.nom} 📖
                            </button>
                        `).join('') || '<span style="color: #6D4C41; font-style: italic;">Aucun accompagnement avec recette</span>'}
                    </div>
                    <h4 style="color: #8B4513; margin-bottom: 8px;">🥣 Sauces</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                        ${allRecipes.filter(r => r.type === 'sauce').map(r => `
                            <button class="sauce-chip clickable" onclick="showRecipe('${r.id}')" style="cursor: pointer; border: none;">
                                ${r.nom} 📖
                            </button>
                        `).join('') || '<span style="color: #6D4C41; font-style: italic;">Aucune sauce avec recette</span>'}
                    </div>
                </div>
            </div>
        `;
    }

    // Bouton calculateur
    bodyHTML += `
        <button class="calc-button" onclick="closeCutModal(); showScreen('calculator'); selectMeatAndCut('${meatId}', '${cutName}');">
            🧮 Calculer le temps de cuisson
        </button>
    `;

    document.getElementById('cutModalBody').innerHTML = bodyHTML;
    document.getElementById('cutModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCutModal(event) {
    if (event && event.target !== event.currentTarget) return;
    document.getElementById('cutModal').classList.remove('active');
    document.body.style.overflow = '';
}

function selectMeatAndCut(meatId, cutName) {
    document.getElementById('calcMeatSelect').value = meatId;
    onCalcMeatSelect();
    setTimeout(() => {
        document.getElementById('calcCutSelect').value = cutName;
    }, 100);
}

// Afficher une recette dans un modal
async function showRecipe(recetteId) {
    // Créer le modal de recette s'il n'existe pas
    let recipeModal = document.getElementById('recipeModal');
    if (!recipeModal) {
        recipeModal = document.createElement('div');
        recipeModal.id = 'recipeModal';
        recipeModal.className = 'cut-modal';
        recipeModal.onclick = (e) => { if (e.target === recipeModal) closeRecipeModal(); };
        recipeModal.innerHTML = `
            <div class="cut-modal-content" onclick="event.stopPropagation()">
                <div class="cut-modal-header" id="recipeModalHeader">
                    <button class="cut-modal-close" onclick="closeRecipeModal()">&times;</button>
                    <div id="recipeModalTitle">Chargement...</div>
                </div>
                <div class="cut-modal-body" id="recipeModalBody">
                    <div style="text-align: center; padding: 40px;">
                        <div style="font-size: 3em;">⏳</div>
                        <p>Chargement de la recette...</p>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(recipeModal);
    }

    // Afficher le modal
    recipeModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    try {
        const response = await fetch(`/api/recettes/${encodeURIComponent(recetteId)}`);
        const data = await response.json();

        if (data.error) {
            document.getElementById('recipeModalTitle').innerHTML = `
                <div style="font-size: 3em; margin-bottom: 10px;">❌</div>
                <h1 style="font-size: 1.5em;">Recette non trouvée</h1>
            `;
            document.getElementById('recipeModalBody').innerHTML = `
                <div class="section-card" style="text-align: center;">
                    <p style="color: #6D4C41;">La recette "${recetteId}" n'est pas encore disponible.</p>
                    <button class="btn btn-secondary" onclick="closeRecipeModal()" style="margin-top: 20px;">Fermer</button>
                </div>
            `;
            return;
        }

        const recette = data.recette;
        const typeIcon = data.type === 'sauce' ? '🥣' : '🥗';
        const typeLabel = data.type === 'sauce' ? 'Sauce' : 'Accompagnement';

        // Header
        document.getElementById('recipeModalTitle').innerHTML = `
            <div style="font-size: 3em; margin-bottom: 10px;">${typeIcon}</div>
            <h1 style="font-size: 1.6em; margin-bottom: 5px;">${recette.nom}</h1>
            <p style="opacity: 0.9;">${typeLabel} • ${recette.categorie || ''}</p>
        `;

        // Body
        let bodyHTML = '';

        // Infos rapides
        bodyHTML += `
            <div class="section-card">
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; text-align: center;">
                    <div style="background: #F5EBE0; padding: 12px; border-radius: 10px;">
                        <div style="font-size: 1.5em;">⏱️</div>
                        <div style="font-size: 0.85em; color: #6D4C41;">Préparation</div>
                        <div style="font-weight: bold;">${recette.temps_preparation || 0} min</div>
                    </div>
                    <div style="background: #F5EBE0; padding: 12px; border-radius: 10px;">
                        <div style="font-size: 1.5em;">🔥</div>
                        <div style="font-size: 0.85em; color: #6D4C41;">Cuisson</div>
                        <div style="font-weight: bold;">${recette.temps_cuisson || 0} min</div>
                    </div>
                    <div style="background: #F5EBE0; padding: 12px; border-radius: 10px;">
                        <div style="font-size: 1.5em;">📊</div>
                        <div style="font-size: 0.85em; color: #6D4C41;">Difficulté</div>
                        <div style="font-weight: bold;">${recette.difficulte || '-'}</div>
                    </div>
                    <div style="background: #F5EBE0; padding: 12px; border-radius: 10px;">
                        <div style="font-size: 1.5em;">👥</div>
                        <div style="font-size: 0.85em; color: #6D4C41;">Portions</div>
                        <div style="font-weight: bold;">${recette.portions || '-'}</div>
                    </div>
                </div>
            </div>
        `;

        // Ingrédients
        if (recette.ingredients && recette.ingredients.length > 0) {
            bodyHTML += `
                <div class="section-card">
                    <div class="section-title"><span class="icon">🛒</span> Ingrédients</div>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;">
                        ${recette.ingredients.map(ing => `
                            <div style="display: flex; align-items: center; gap: 8px; padding: 8px; background: #F5EBE0; border-radius: 8px;">
                                <span style="font-weight: bold; color: #8B4513;">${ing.quantite || ''}</span>
                                <span>${ing.nom}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        // Étapes
        if (recette.etapes && recette.etapes.length > 0) {
            bodyHTML += `
                <div class="section-card">
                    <div class="section-title"><span class="icon">📝</span> Préparation</div>
                    <ol style="padding-left: 20px;">
                        ${recette.etapes.map(etape => `
                            <li style="padding: 10px 0; border-bottom: 1px solid #F5EBE0; line-height: 1.5;">${etape}</li>
                        `).join('')}
                    </ol>
                </div>
            `;
        }

        // Conseils
        if (recette.conseils) {
            bodyHTML += `
                <div class="section-card">
                    <div class="saviez-vous">
                        <div class="icon">💡</div>
                        <div class="content">
                            <div class="title">Conseils du chef</div>
                            <div class="text">${recette.conseils}</div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Variantes
        if (recette.variantes && recette.variantes.length > 0) {
            bodyHTML += `
                <div class="section-card">
                    <div class="section-title"><span class="icon">🔄</span> Variantes</div>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                        ${recette.variantes.map(v => `
                            <div class="sauce-chip">${v}</div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        // Bouton fermer
        bodyHTML += `
            <button class="btn btn-secondary" onclick="closeRecipeModal()" style="width: 100%; margin-top: 20px; padding: 15px;">
                ✓ Fermer la recette
            </button>
        `;

        document.getElementById('recipeModalBody').innerHTML = bodyHTML;

    } catch (error) {
        console.error('Erreur:', error);
        document.getElementById('recipeModalTitle').innerHTML = `
            <div style="font-size: 3em; margin-bottom: 10px;">❌</div>
            <h1 style="font-size: 1.5em;">Erreur</h1>
        `;
        document.getElementById('recipeModalBody').innerHTML = `
            <div class="section-card" style="text-align: center;">
                <p style="color: #C62828;">Impossible de charger la recette.</p>
                <button class="btn btn-secondary" onclick="closeRecipeModal()" style="margin-top: 20px;">Fermer</button>
            </div>
        `;
    }
}

function closeRecipeModal() {
    const modal = document.getElementById('recipeModal');
    if (modal) {
        modal.classList.remove('active');
        // Réactiver le scroll seulement si le cutModal n'est pas actif
        const cutModal = document.getElementById('cutModal');
        if (!cutModal || !cutModal.classList.contains('active')) {
            document.body.style.overflow = '';
        }
    }
}

// ============================================
// UPDATED EXPLORER - Show cuts per meat
// ============================================
function renderMeatsListEnhanced(searchQuery = '') {
    let filteredMeats = meatsData;

    if (currentCategory) {
        filteredMeats = filteredMeats.filter(m => m.category === currentCategory);
    }

    if (searchQuery) {
        filteredMeats = filteredMeats.filter(m => {
            // Search in meat name
            if (m.name.toLowerCase().includes(searchQuery)) return true;
            // Search in cuts
            const allCuts = getAllCuts(m);
            return allCuts.some(c => c.name.toLowerCase().includes(searchQuery));
        });
    }

    const meatsHTML = filteredMeats.map(meat => {
        const allCuts = getAllCuts(meat);
        const displayCuts = allCuts.slice(0, 6); // Show first 6 cuts
        const hasMore = allCuts.length > 6;

        return `
            <div class="card" style="margin-bottom: 20px;">
                <div style="display: flex; gap: 15px; align-items: flex-start; margin-bottom: 15px;">
                    <div style="font-size: 3em;">${meat.emoji || '🥩'}</div>
                    <div style="flex: 1;">
                        <h3 style="margin-bottom: 5px; color: #8B4513;">${meat.name}</h3>
                        <p style="color: #6D4C41; margin-bottom: 5px; font-size: 0.95em;">${meat.description || ''}</p>
                        <p style="color: #3E2723; font-size: 0.85em; font-weight: 600;">${allCuts.length} morceaux disponibles</p>
                    </div>
                </div>

                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                    ${displayCuts.map(cut => `
                        <div class="sauce-chip" onclick="openCutModal('${meat._id}', '${cut.name.replace(/'/g, "\\'")}')"
                             style="cursor: pointer;">
                            ${cut.name}
                            ${cut.anatomie ? '<span style="font-size: 0.7em; margin-left: 4px;">✨</span>' : ''}
                        </div>
                    `).join('')}
                    ${hasMore ? `
                        <div class="sauce-chip" style="background: #8B4513; color: white;"
                             onclick="expandMeat('${meat._id}')">
                            +${allCuts.length - 6} autres
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');

    document.getElementById('meatsList').innerHTML = meatsHTML || '<div class="card"><p style="text-align: center; color: #6D4C41;">Aucune viande trouvée</p></div>';
}

function getAllCuts(meat) {
    let cuts = [];
    if (meat.cuts) {
        cuts = meat.cuts;
    } else if (meat.subcategories) {
        if (meat.subcategories.classique && meat.subcategories.classique.cuts) {
            cuts = [...cuts, ...meat.subcategories.classique.cuts];
        }
        if (meat.subcategories.boucher && meat.subcategories.boucher.cuts) {
            cuts = [...cuts, ...meat.subcategories.boucher.cuts];
        }
    }
    return cuts;
}

function expandMeat(meatId) {
    const meat = meatsData.find(m => m._id === meatId);
    if (!meat) return;

    const allCuts = getAllCuts(meat);

    // Create a modal-like expanded view
    const modal = document.createElement('div');
    modal.className = 'cut-modal active';
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    modal.innerHTML = `
        <div class="cut-modal-content" onclick="event.stopPropagation()">
            <div class="cut-modal-header">
                <button class="cut-modal-close" onclick="this.closest('.cut-modal').remove()">&times;</button>
                <div>
                    <div style="font-size: 3em; margin-bottom: 10px;">${meat.emoji || '🥩'}</div>
                    <h1 style="font-size: 1.8em; margin-bottom: 5px;">${meat.name}</h1>
                    <p style="opacity: 0.9;">${allCuts.length} morceaux disponibles</p>
                </div>
            </div>
            <div class="cut-modal-body">
                <div class="section-card">
                    <div class="section-title"><span class="icon">🥩</span> Tous les morceaux</div>
                    <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                        ${allCuts.map(cut => `
                            <div class="sauce-chip" onclick="this.closest('.cut-modal').remove(); openCutModal('${meat._id}', '${cut.name.replace(/'/g, "\\'")}')"
                                 style="cursor: pointer; padding: 12px 18px;">
                                ${cut.name}
                                ${cut.anatomie ? '<span style="font-size: 0.7em; margin-left: 4px;">✨</span>' : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

// Override the original renderMeatsList with enhanced version
const originalRenderMeatsList = renderMeatsList;
renderMeatsList = function(searchQuery = '') {
    renderMeatsListEnhanced(searchQuery);
};

// Initialize on load
init();
