// CookMaster - Application principale avec toutes les fonctionnalités avancées
const API_URL = window.location.origin;

// Fonction pour normaliser un nom en ID (pour les recettes)
function normalizeToId(nom) {
    return nom.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '_')
        .replace(/^_|_$/g, '');
}

// Afficher un toast (notification non-intrusive)
function showToast(message, duration = 3000) {
    // Supprimer les toasts existants
    const existing = document.querySelector('.toast-notification');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `<span class="toast-icon">ℹ️</span> ${message}`;
    document.body.appendChild(toast);

    // Animation d'entrée
    setTimeout(() => toast.classList.add('show'), 10);

    // Auto-suppression
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// Afficher une recette (sauce ou accompagnement)
async function showRecipe(nom, type = 'sauce') {
    const id = normalizeToId(nom);
    try {
        const response = await fetch(`${API_URL}/api/recettes/${id}`);
        if (!response.ok) {
            // Afficher un message discret au lieu d'une alerte
            showToast(`Recette "${nom}" pas encore disponible`);
            return;
        }
        const data = await response.json();
        const recipe = data.recette || data.recipe;

        if (!recipe) {
            alert(`Recette "${nom}" non trouvée`);
            return;
        }

        // Formater les ingrédients (peuvent être des objets ou des strings)
        const formatIngredient = (ing) => {
            if (typeof ing === 'string') return ing;
            if (ing.quantite && ing.nom) return `${ing.quantite} ${ing.nom}`;
            if (ing.nom) return ing.nom;
            return String(ing);
        };

        // Créer la modal
        const modal = document.createElement('div');
        modal.className = 'recipe-modal-overlay';
        modal.onclick = (e) => { if (e.target === modal) modal.remove(); };

        modal.innerHTML = `
            <div class="recipe-modal">
                <button class="recipe-modal-close" onclick="this.closest('.recipe-modal-overlay').remove()">×</button>
                <div class="recipe-modal-header">
                    <h2>${recipe.nom}</h2>
                    <span class="recipe-category">${recipe.categorie || recipe.type || ''}</span>
                </div>
                <div class="recipe-modal-meta">
                    <span>⏱️ Prépa: ${recipe.temps_preparation || recipe.tempsPreparation || '-'}min</span>
                    <span>🔥 Cuisson: ${recipe.temps_cuisson || recipe.tempsCuisson || '-'}min</span>
                    <span>👥 ${recipe.portions || '-'} portions</span>
                    <span>📊 ${recipe.difficulte || '-'}</span>
                </div>
                <div class="recipe-modal-content">
                    <div class="recipe-section">
                        <h3>🧂 Ingrédients</h3>
                        <ul class="recipe-ingredients">
                            ${(recipe.ingredients || []).map(ing => `<li>${formatIngredient(ing)}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="recipe-section">
                        <h3>👨‍🍳 Préparation</h3>
                        <ol class="recipe-steps">
                            ${(recipe.etapes || []).map(step => `<li>${step}</li>`).join('')}
                        </ol>
                    </div>
                    ${recipe.conseils ? `
                        <div class="recipe-section">
                            <h3>💡 Conseils</h3>
                            <p>${recipe.conseils}</p>
                        </div>
                    ` : ''}
                    ${recipe.variantes && recipe.variantes.length > 0 ? `
                        <div class="recipe-section">
                            <h3>🔄 Variantes</h3>
                            <ul>${recipe.variantes.map(v => {
                                // Gérer les deux formats : string ou objet {nom, modification}
                                if (typeof v === 'string') return `<li>${v}</li>`;
                                if (v.nom && v.modification) return `<li><strong>${v.nom}:</strong> ${v.modification}</li>`;
                                if (v.nom) return `<li>${v.nom}</li>`;
                                return `<li>${String(v)}</li>`;
                            }).join('')}</ul>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;

        document.body.appendChild(modal);
    } catch (error) {
        console.error('Erreur:', error);
        alert('Erreur lors du chargement de la recette');
    }
}

let meatsData = [];
let currentMeatId = null;
let currentCut = null;
let currentCutIndex = null;
let calculatorMode = 'simple'; // 'simple' ou 'advanced'
let selectedMeat = null; // Viande sélectionnée dans le Cooking Helper
let selectedCutData = null; // Morceau sélectionné dans le Cooking Helper

// Navigation
function navigate(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

    const screen = document.getElementById(screenId);
    if (screen) {
        screen.classList.add('active');
    }

    const navBtns = document.querySelectorAll('.nav-btn');
    if (screenId === 'home') navBtns[0]?.classList.add('active');
    else if (screenId === 'explorer') navBtns[1]?.classList.add('active');
    else if (screenId === 'timer') navBtns[2]?.classList.add('active');
    else if (screenId === 'profile') navBtns[3]?.classList.add('active');

    if (screenId === 'home') loadHome();
    else if (screenId === 'explorer') loadExplorer();
    else if (screenId === 'timer') loadTimer();
    else if (screenId === 'profile') loadProfile();
}

// Chargement initial
window.addEventListener('DOMContentLoaded', async () => {
    await loadMeats();

    setTimeout(() => {
        document.getElementById('splash').style.display = 'none';
        document.getElementById('app').style.display = 'block';
        loadHome();
    }, 3000);
});

// Charger toutes les viandes
async function loadMeats() {
    try {
        const response = await fetch(`${API_URL}/api/meats`);
        const data = await response.json();
        meatsData = data.meats;
    } catch (error) {
        console.error('Erreur de chargement des viandes:', error);
        meatsData = [];
    }
}

// Écran d'accueil
function loadHome() {
    document.getElementById('meatCount').textContent = `${meatsData.length} viandes`;

    const tips = [
        'Laissez toujours reposer votre viande après cuisson pour redistribuer les jus.',
        'Sortez la viande du réfrigérateur 30 minutes avant la cuisson pour une température uniforme.',
        'Utilisez un thermomètre à viande pour une cuisson parfaite à chaque fois.',
        'Ne piquez jamais la viande pendant la cuisson, vous perdriez tous les jus.',
        'Pour une belle croûte, assurez-vous que la viande soit bien sèche avant de la saisir.',
        'La température continue de monter de 3-5°C pendant le repos (carry-over effect).',
        'Salez votre viande juste avant la cuisson pour éviter qu\'elle ne perde son eau.',
        'Pour une cuisson uniforme, retournez la viande une seule fois.',
        'Les marinades acides (vinaigre, citron) attendrissent mais ne doivent pas dépasser 4h.',
        'La cuisson basse température (sous-vide, four) préserve mieux les jus et la tendreté.',
        'Un bon repos = 1/5 du temps de cuisson (ex: 25min de cuisson = 5min de repos).',
        'Pour tester la cuisson sans thermomètre: touchez votre joue (saignant), menton (à point), front (bien cuit).',
        'Les viandes à grain court (filet) cuisent plus vite que les viandes à fibres longues (bavette).',
        'Le persillage (gras intramusculaire) fond à la cuisson et apporte le goût.',
        'Une poêle trop froide cuit la viande au lieu de la saisir - attendez qu\'elle fume légèrement.',
        'Le beurre brûle à 150°C - ajoutez-le en fin de cuisson pour arroser la viande.',
        'Les os conduisent la chaleur: la viande avec os cuit plus vite autour de l\'os.',
        'Coupez toujours perpendiculaire aux fibres pour une viande plus tendre.',
        'La cuisson lente (mijotage, braisage) transforme le collagène en gélatine fondante.',
        'Un rôti trop froid au centre rallonge considérablement le temps de cuisson.'
    ];

    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById('tipOfDay').textContent = randomTip;
}

// Définition des 6 grandes catégories principales
const mainCategories = {
    boeuf: {
        id: 'boeuf',
        name: 'Boeuf',
        icon: '🥩',
        description: 'La viande rouge par excellence, riche en fer et en protéines',
        details: 'Du filet tendre aux morceaux à braiser, le bœuf offre une grande variété de textures et saveurs.',
        type: 'single' // Une seule viande avec subcategories
    },
    veau: {
        id: 'veau',
        name: 'Veau',
        icon: '🍖',
        description: 'Viande délicate et tendre, idéale pour les préparations raffinées',
        details: 'Chair pâle et fondante, le veau se prête aux escalopes comme aux blanquettes.',
        type: 'single'
    },
    agneau: {
        id: 'agneau',
        name: 'Agneau',
        icon: '🐑',
        description: 'Saveur caractéristique et viande festive par excellence',
        details: 'Du gigot pascal aux côtelettes grillées, l\'agneau sublime les grandes occasions.',
        type: 'single'
    },
    porc: {
        id: 'porc',
        name: 'Porc',
        icon: '🥓',
        description: 'Viande polyvalente, du rôti dominical à la charcuterie',
        details: 'Économique et savoureux, le porc se décline en une multitude de préparations.',
        type: 'single'
    },
    volaille: {
        id: 'volaille',
        name: 'Volaille',
        icon: '🍗',
        description: 'Poulet, canard, dinde et autres volailles de basse-cour',
        details: 'Viandes blanches ou à chair foncée, de l\'élevage fermier aux races d\'exception.',
        type: 'group', // Regroupe plusieurs viandes
        subItems: ['Poulet', 'Canard', 'Dinde', 'Pintade', 'Oie', 'Caille', 'Chapon']
    },
    gibier: {
        id: 'gibier',
        name: 'Gibier',
        icon: '🦌',
        description: 'Viandes sauvages au goût prononcé et authentique',
        details: 'Du sanglier au faisan, le gibier offre des saveurs uniques de terroir.',
        type: 'group',
        subGroups: {
            gros: { name: 'Gros Gibier', icon: '🦌', desc: 'Cerf, sanglier, chevreuil...', animals: ['Cerf', 'Sanglier', 'Chevreuil', 'Biche', 'Daim', 'Marcassin'] },
            petit: { name: 'Petit Gibier', icon: '🐰', desc: 'Lapin, lièvre, faisan...', animals: ['Lapin de garenne', 'Lièvre', 'Faisan', 'Perdrix', 'Caille sauvage', 'Bécasse', 'Pigeon'] }
        }
    }
};

// Écran Explorer - Affiche les 6 grandes catégories
function loadExplorer() {
    // Masquer les filtres car on a une structure fixe
    const filterTabs = document.getElementById('filterTabs');
    filterTabs.innerHTML = '';

    displayMainCategories();

    // Recherche dans les morceaux
    const searchInput = document.getElementById('searchInput');
    searchInput.placeholder = 'Rechercher un morceau...';
    searchInput.oninput = (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query.length < 2) {
            displayMainCategories();
            return;
        }
        searchAllCuts(query);
    };
}

// Afficher les 6 grandes catégories
function displayMainCategories() {
    const meatsList = document.getElementById('meatsList');

    // Calculer le nombre de morceaux pour chaque catégorie
    const categoryCounts = {};

    // Boeuf, Veau, Agneau, Porc
    ['boeuf', 'veau', 'agneau', 'porc'].forEach(cat => {
        const meat = meatsData.find(m => m.category === cat);
        if (meat && meat.hasSubcategories) {
            categoryCounts[cat] = (meat.subcategories?.classique?.cutsCount || 0) + (meat.subcategories?.boucher?.cutsCount || 0);
        } else if (meat && meat.cuts) {
            categoryCounts[cat] = meat.cuts.length;
        } else {
            categoryCounts[cat] = 0;
        }
    });

    // Volaille - compter tous les morceaux des volailles
    const volailles = meatsData.filter(m => m.category === 'volaille');
    categoryCounts['volaille'] = volailles.reduce((acc, v) => acc + (v.cuts?.length || 0), 0);

    // Gibier - compter tous les morceaux (poil gros, poil petit, plume)
    const gibiers = meatsData.filter(m => m.category === 'gibier_poil_gros' || m.category === 'gibier_poil_petit' || m.category === 'gibier_plume');
    categoryCounts['gibier'] = gibiers.reduce((acc, g) => acc + (g.cuts?.length || 0), 0);

    meatsList.innerHTML = Object.values(mainCategories).map(cat => `
        <div class="main-category-box" onclick="showCategory('${cat.id}')">
            <div class="main-category-icon">${cat.icon}</div>
            <div class="main-category-content">
                <h3>${cat.name}</h3>
                <p class="main-category-desc">${cat.description}</p>
                <p class="main-category-details">${cat.details}</p>
            </div>
            <div class="main-category-footer">
                <span class="cut-badge">${categoryCounts[cat.id] || 0} morceaux</span>
                <span class="main-category-arrow">→</span>
            </div>
        </div>
    `).join('');
}

// Recherche globale dans tous les morceaux
async function searchAllCuts(query) {
    const meatsList = document.getElementById('meatsList');
    const results = [];

    for (const meat of meatsData) {
        if (meat.hasSubcategories) {
            // Charger les morceaux des sous-catégories
            try {
                const resClassique = await fetch(`${API_URL}/api/meats/${meat._id}/classique`);
                const dataClassique = await resClassique.json();
                dataClassique.subcategory.cuts.forEach((cut, idx) => {
                    if (cut.name.toLowerCase().includes(query) || (cut.nameEn && cut.nameEn.toLowerCase().includes(query))) {
                        results.push({ cut, meat, meatId: meat._id, idx, subcategory: 'classique' });
                    }
                });

                const resBoucher = await fetch(`${API_URL}/api/meats/${meat._id}/boucher`);
                const dataBoucher = await resBoucher.json();
                dataBoucher.subcategory.cuts.forEach((cut, idx) => {
                    if (cut.name.toLowerCase().includes(query) || (cut.nameEn && cut.nameEn.toLowerCase().includes(query))) {
                        results.push({ cut, meat, meatId: meat._id, idx, subcategory: 'boucher' });
                    }
                });
            } catch (e) { /* ignore */ }
        } else if (meat.cuts) {
            meat.cuts.forEach((cut, idx) => {
                if (cut.name.toLowerCase().includes(query) || (cut.nameEn && cut.nameEn.toLowerCase().includes(query))) {
                    results.push({ cut, meat, meatId: meat._id, idx, subcategory: null });
                }
            });
        }
    }

    if (results.length === 0) {
        meatsList.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">Aucun morceau trouvé</p>';
        return;
    }

    meatsList.innerHTML = `
        <div class="search-results-header">
            <h3>Résultats de recherche</h3>
            <p>${results.length} morceau(x) trouvé(s)</p>
        </div>
        <div class="meats-list">
            ${results.slice(0, 20).map(r => `
                <div class="meat-item" onclick="showCutDetailDirect('${r.meatId}', ${r.idx}, ${r.subcategory ? `'${r.subcategory}'` : 'null'})">
                    <div class="meat-info">
                        <h3>${r.cut.name}</h3>
                        <p>${r.cut.description}</p>
                        <span class="meat-category">${r.meat.name}</span>
                    </div>
                    <div class="arrow">→</div>
                </div>
            `).join('')}
        </div>
    `;
}

// Afficher une catégorie principale
function showCategory(categoryId) {
    const cat = mainCategories[categoryId];
    if (!cat) return;

    if (cat.type === 'single') {
        // Viande unique (boeuf, veau, agneau, porc) - trouver l'ID et afficher
        const meat = meatsData.find(m => m.category === categoryId);
        if (meat) {
            showMeatCuts(meat._id);
        }
    } else if (categoryId === 'volaille') {
        showVolailleCategory();
    } else if (categoryId === 'gibier') {
        showGibierCategory();
    }
}

// Afficher la catégorie Volaille (regroupement des volailles)
function showVolailleCategory() {
    document.getElementById('meatCutsName').textContent = 'Volaille';

    const volailles = meatsData.filter(m => m.category === 'volaille');
    const content = document.getElementById('meatCutsContent');

    content.innerHTML = `
        <div class="section">
            <h2>🍗 Volaille</h2>
            <p class="section-desc">Poulet, canard, dinde et autres volailles de basse-cour</p>
        </div>

        <div class="section encyclopedia-summary">
            <div class="encyclopedia-teaser">
                <div class="teaser-item">
                    <span class="teaser-icon">📜</span>
                    <div class="teaser-content">
                        <h4>À propos</h4>
                        <p>La volaille regroupe les oiseaux d'élevage domestique. Viande maigre et polyvalente, elle se décline du poulet fermier au canard gras, en passant par la dinde festive.</p>
                    </div>
                </div>
                <div class="teaser-item">
                    <span class="teaser-icon">💪</span>
                    <div class="teaser-content">
                        <h4>Nutrition</h4>
                        <p>Riche en protéines et pauvre en graisses (surtout le blanc), la volaille est idéale pour une alimentation équilibrée. Le canard apporte plus de fer.</p>
                    </div>
                </div>
            </div>
        </div>

        <h3 style="margin: 20px 0 15px; color: var(--text-primary);">Choisissez votre volaille</h3>
        <div class="groups-grid">
            ${volailles.map(v => `
                <div class="group-box" onclick="showMeatCuts('${v._id}')">
                    <div class="group-icon">${getVolailleIcon(v.name)}</div>
                    <h3>${v.name}</h3>
                    <p>${v.description.substring(0, 60)}...</p>
                    <div class="group-count">${v.cuts?.length || 0} morceaux</div>
                    <div class="group-arrow">→</div>
                </div>
            `).join('')}
        </div>

        <div class="section" style="margin-top: 20px;">
            <button class="btn-secondary" onclick="navigate('explorer')">
                ← Retour aux catégories
            </button>
        </div>
    `;

    navigationHistory.push('explorer');
    navigate('meatCuts');
}

function getVolailleIcon(name) {
    const icons = {
        'Poulet': '🐔', 'Canard': '🦆', 'Dinde': '🦃', 'Pintade': '🐦',
        'Oie': '🪿', 'Caille': '🐤', 'Chapon': '🐓', 'Pigeon': '🕊️'
    };
    return icons[name] || '🍗';
}

// Afficher la catégorie Gibier (poil/plume)
function showGibierCategory() {
    document.getElementById('meatCutsName').textContent = 'Gibier';

    // Filtrer tous les gibiers (poil gros, poil petit, plume)
    const gibierPoil = meatsData.filter(m => m.category === 'gibier_poil_gros' || m.category === 'gibier_poil_petit');
    const gibierPlume = meatsData.filter(m => m.category === 'gibier_plume');
    const content = document.getElementById('meatCutsContent');

    content.innerHTML = `
        <div class="section">
            <h2>🦌 Gibier</h2>
            <p class="section-desc">Viandes sauvages au goût prononcé et authentique</p>
        </div>

        <div class="section encyclopedia-summary">
            <div class="encyclopedia-teaser">
                <div class="teaser-item">
                    <span class="teaser-icon">📜</span>
                    <div class="teaser-content">
                        <h4>À propos</h4>
                        <p>Le gibier désigne les animaux sauvages chassés. Leur chair, plus ferme et goûteuse que les viandes d'élevage, nécessite souvent une marinade ou un faisandage.</p>
                    </div>
                </div>
                <div class="teaser-item">
                    <span class="teaser-icon">💪</span>
                    <div class="teaser-content">
                        <h4>Nutrition</h4>
                        <p>Viande très maigre et riche en protéines, le gibier est naturellement bio. Excellente source de fer et de zinc, pauvre en cholestérol.</p>
                    </div>
                </div>
            </div>
        </div>

        <h3 style="margin: 20px 0 15px; color: var(--text-primary);">Type de gibier</h3>
        <div class="subcategories-grid">
            <div class="subcategory-box subcategory-classique" onclick="showGibierType('poil')">
                <div class="subcategory-icon">🦌</div>
                <h3>Gibier à poil</h3>
                <p>Cerf, sanglier, chevreuil, lièvre...</p>
                <p class="subcategory-details">Viandes puissantes et sauvages. Marinades recommandées, cuissons lentes pour les gros gibiers.</p>
                <div class="subcategory-count">${gibierPoil.length} animaux</div>
                <div class="subcategory-arrow">→</div>
            </div>

            <div class="subcategory-box subcategory-boucher" onclick="showGibierType('plume')">
                <div class="subcategory-icon">🦆</div>
                <h3>Gibier à plume</h3>
                <p>Faisan, perdrix, canard, bécasse...</p>
                <p class="subcategory-details">Oiseaux sauvages aux chairs délicates. Faisandage traditionnel pour développer les arômes.</p>
                <div class="subcategory-count">${gibierPlume.length} animaux</div>
                <div class="subcategory-arrow">→</div>
            </div>
        </div>

        <div class="section" style="margin-top: 20px;">
            <button class="btn-secondary" onclick="navigate('explorer')">
                ← Retour aux catégories
            </button>
        </div>
    `;

    navigationHistory.push('explorer');
    navigate('meatCuts');
}

// Afficher un type de gibier (poil ou plume)
function showGibierType(type) {
    const isPoil = type === 'poil';
    document.getElementById('meatCutsName').textContent = isPoil ? 'Gibier à poil' : 'Gibier à plume';

    // Filtrer selon le type
    const filtered = isPoil
        ? meatsData.filter(m => m.category === 'gibier_poil_gros' || m.category === 'gibier_poil_petit')
        : meatsData.filter(m => m.category === 'gibier_plume');

    const content = document.getElementById('meatCutsContent');

    content.innerHTML = `
        <div class="section">
            <div class="group-header">
                <span class="group-header-icon">${isPoil ? '🦌' : '🦆'}</span>
                <div>
                    <h2>${isPoil ? 'Gibier à poil' : 'Gibier à plume'}</h2>
                    <p class="section-desc">${isPoil ? 'Cerf, sanglier, chevreuil, lièvre et autres mammifères sauvages' : 'Faisan, perdrix, canard sauvage, bécasse et autres oiseaux sauvages'}</p>
                </div>
            </div>
        </div>

        <div class="groups-grid">
            ${filtered.map(g => `
                <div class="group-box" onclick="showMeatCuts('${g._id}')">
                    <div class="group-icon">${getGibierIcon(g.name)}</div>
                    <h3>${g.name}</h3>
                    <p>${g.description ? g.description.substring(0, 50) + '...' : 'Gibier sauvage'}</p>
                    <div class="group-count">${g.cuts?.length || 0} morceaux</div>
                    <div class="group-arrow">→</div>
                </div>
            `).join('')}
        </div>

        <div class="section" style="margin-top: 20px;">
            <button class="btn-secondary" onclick="showGibierCategory()">
                ← Retour au gibier
            </button>
        </div>
    `;

    navigationHistory.push('meatCuts');
}

function getGibierIcon(name) {
    const icons = {
        // Gibier à poil - gros
        'Cerf': '🦌', 'Biche': '🦌', 'Chevreuil': '🦌', 'Daim': '🦌',
        'Sanglier': '🐗', 'Marcassin': '🐗',
        // Gibier à poil - petit
        'Lapin': '🐰', 'Lièvre': '🐇',
        // Gibier à plume
        'Faisan': '🪶', 'Perdrix': '🪶', 'Caille': '🐤',
        'Bécasse': '🪶', 'Pigeon': '🕊️', 'Canard sauvage': '🦆', 'Canard': '🦆'
    };
    for (const [key, icon] of Object.entries(icons)) {
        if (name.includes(key)) return icon;
    }
    return '🦌';
}

// Navigation history
let navigationHistory = [];

function navigateBack() {
    if (navigationHistory.length > 0) {
        const previous = navigationHistory.pop();
        navigate(previous);
    } else {
        navigate('explorer');
    }
}

// Définition des groupes anatomiques pour chaque viande avec descriptions détaillées
const cutGroups = {
    boeuf: {
        nobles: {
            name: "Morceaux nobles",
            icon: "👑",
            desc: "Les pièces d'exception pour les grandes occasions",
            details: "Issus du dos et de la cuisse, ces morceaux sont naturellement tendres et maigres. Cuisson rapide (grillé, poêlé) pour préserver leur texture délicate. Prix plus élevé justifié par leur qualité exceptionnelle.",
            cuts: ["Filet", "Entrecôte", "Côte de bœuf", "Faux-filet", "Rumsteck", "Tende de tranche", "Rond de tranche"]
        },
        grillades: {
            name: "Grillades & Poêlées",
            icon: "🔥",
            desc: "Cuisson rapide, saveurs intenses",
            details: "Morceaux à fibres longues, riches en goût grâce à leur persillage. Idéaux saignants ou à point, ils développent des arômes puissants à haute température. À ne pas trop cuire pour éviter qu'ils durcissent.",
            cuts: ["Bavette d'aloyau", "Bavette de flanchet", "Onglet", "Hampe", "Araignée", "Poire", "Merlan", "Aiguillette baronne", "Aiguillette de rumsteck", "Macreuse à bifteck", "Jumeau à bifteck"]
        },
        mijotes: {
            name: "Mijotés & Braisés",
            icon: "🍲",
            desc: "Cuisson lente, fondant garanti",
            details: "Morceaux gélatineux riches en collagène. La cuisson longue (2-4h) transforme le collagène en gélatine fondante. Parfaits pour les pot-au-feu, bourguignons et daubes. Meilleur rapport qualité-prix.",
            cuts: ["Paleron", "Macreuse à pot-au-feu", "Gîte", "Jarret", "Collier", "Jumeau à pot-au-feu", "Plat de côtes", "Gîte à la noix", "Rond de gîte", "Mouvant", "Tranche grasse", "Dessus de palette", "Surpris (boule de macreuse)"]
        },
        poitrine: {
            name: "Poitrine & Côtes",
            icon: "🥓",
            desc: "Morceaux savoureux et généreux",
            details: "Zone ventrale avec alternance de gras et de maigre. Idéale pour le barbecue texan (brisket) ou le pot-au-feu. Nécessite une cuisson lente pour fondre le gras et attendrir les fibres.",
            cuts: ["Brisket (poitrine)", "Plat de côtes", "Tendron", "Flanchet"]
        },
        autres: {
            name: "Spécialités & Abats",
            icon: "✨",
            desc: "Incontournables, préparations et abats",
            details: "La queue est idéale pour les fonds et sauces. L'os à moelle, grillé et tartiné sur du pain, est un classique bistrot. Les abats (foie, rognons, etc.) sont riches en fer et vitamines.",
            cuts: ["Viande hachée de bœuf", "Queue de bœuf", "Os à moelle", "Foie", "Langue", "Joue de bœuf", "Rognons", "Cœur", "Ris de bœuf", "Cervelle", "Tripes (gras-double, bonnet)", "Feuillet", "Caillette"]
        }
    },
    porc: {
        nobles: {
            name: "Morceaux nobles",
            icon: "👑",
            desc: "Les meilleures pièces",
            details: "Partie dorsale maigre et tendre. Le filet mignon est le plus délicat, la côte offre le meilleur équilibre gras/maigre. Cuisson rosée recommandée (63°C) pour conserver le moelleux.",
            cuts: ["Filet mignon", "Côte de porc", "Carré de porc", "Longe", "Rôti dans le filet"]
        },
        grillades: {
            name: "Grillades & Poêlées",
            icon: "🔥",
            desc: "Cuisson rapide",
            details: "Morceaux fins à cuisson express. L'escalope doit rester juteuse, le médaillon se saisit à feu vif. Attention à ne pas surcuire : le porc moderne peut se manger légèrement rosé.",
            cuts: ["Escalope", "Côtelette", "Médaillon", "Grillade", "Noix de jambon"]
        },
        mijotes: {
            name: "Mijotés & Braisés",
            icon: "🍲",
            desc: "Cuisson lente",
            details: "L'échine persillée devient fondante après braisage. Le jarret (jambonneau) donne de la gélatine aux plats. Parfaits pour les plats en sauce comme le sauté de porc aux pruneaux.",
            cuts: ["Échine", "Palette", "Jarret", "Joue", "Sauté de porc", "Rouelle"]
        },
        poitrine: {
            name: "Poitrine & Travers",
            icon: "🥓",
            desc: "Morceaux savoureux",
            details: "La poitrine fraîche se confine ou se grille lentement. Les travers (ribs) sont stars du barbecue américain. Le lard et la gorge servent aux charcuteries et lardons.",
            cuts: ["Poitrine", "Travers", "Lard", "Gorge", "Couenne"]
        },
        charcuterie: {
            name: "Charcuterie & Abats",
            icon: "🥩",
            desc: "Base des charcuteries et abats",
            details: "Le jambon se sale et sèche pendant des mois. L'épaule sert aux pâtés. Les abats (foie, pieds, oreilles) sont essentiels pour terrines, andouillette et fromage de tête.",
            cuts: ["Jambon", "Épaule", "Bardière", "Panne", "Foie", "Rognons", "Cœur", "Langue", "Pieds", "Oreilles", "Queue", "Museau", "Tête"]
        }
    },
    agneau: {
        nobles: {
            name: "Morceaux nobles",
            icon: "👑",
            desc: "Les meilleures pièces",
            details: "Le carré et la selle sont les morceaux de prestige. Les côtelettes se grillent en quelques minutes. Servir rosé (54-58°C) pour apprécier la finesse de la chair. L'agneau de lait est encore plus délicat.",
            cuts: ["Carré d'agneau", "Côtelettes", "Selle", "Filet", "Noisettes", "Baron"]
        },
        grillades: {
            name: "Grillades & Rôtis",
            icon: "🔥",
            desc: "Cuisson rapide à rosée",
            details: "Les côtes se saisissent 2-3 minutes par face. Les premières côtes sont les plus tendres, les secondes plus goûteuses. Accompagnez d'herbes de Provence et d'ail pour un résultat méridional.",
            cuts: ["Côtes", "Côtes premières", "Côtes secondes", "Côtes découvertes"]
        },
        mijotes: {
            name: "Gigot & Épaule",
            icon: "🍖",
            desc: "Les grands classiques",
            details: "Le gigot est le roi des tables pascales, rôti rosé avec des gousses d'ail piquées dans la chair. L'épaule plus grasse gagne à être braisée 7 heures pour devenir confite. La souris est le morceau le plus gélatineux.",
            cuts: ["Gigot entier", "Gigot raccourci", "Souris", "Épaule", "Épaule roulée"]
        },
        autres: {
            name: "Mijotés & Abats",
            icon: "🍲",
            desc: "Cuisson lente et abats",
            details: "Le navarin printanier aux petits légumes est un classique. Le collier et la poitrine donnent des ragoûts savoureux. Les ris d'agneau, plus petits que ceux de veau, sont un mets délicat.",
            cuts: ["Collier", "Poitrine", "Haut de côtes", "Sauté", "Navarin", "Rognons", "Foie", "Ris", "Langue", "Cervelle", "Pieds"]
        }
    },
    veau: {
        nobles: {
            name: "Morceaux nobles",
            icon: "👑",
            desc: "Pièces d'excellence",
            details: "La chair pâle du veau est synonyme de tendreté. La côte de veau épaisse se cuit doucement pour rester rosée. La noix et le quasi sont parfaits pour les rôtis. Viande délicate qui ne supporte pas la surcuisson.",
            cuts: ["Filet", "Côte de veau", "Carré", "Longe", "Noix", "Sous-noix", "Quasi", "Grenadin"]
        },
        escalopes: {
            name: "Escalopes & Poêlées",
            icon: "🍳",
            desc: "Cuisson rapide et délicate",
            details: "L'escalope panée (schnitzel) est un classique viennois. La piccata italienne se nappe de citron et câpres. Les paupiettes farcies se braisent doucement. Ne jamais aplatir trop fin sous peine de dessèchement.",
            cuts: ["Escalope", "Médaillon", "Piccata", "Paupiette", "Noix pâtissière"]
        },
        mijotes: {
            name: "Mijotés & Braisés",
            icon: "🍲",
            desc: "Cuisson lente",
            details: "L'osso buco milanais avec sa gremolata est légendaire. La blanquette à la crème est le plat réconfort par excellence. Le jarret entier braisé 3h devient fondant. Le tendron gélatineux enrichit les sauces.",
            cuts: ["Épaule", "Jarret", "Osso buco", "Tendron", "Flanchet", "Poitrine", "Collier", "Blanquette"]
        },
        rotis: {
            name: "Rôtis & Abats",
            icon: "🥘",
            desc: "Pièces à rôtir et abats fins",
            details: "Le rôti de veau bardé est un plat dominical. Le foie de veau rosé et fondant est le plus fin. Le ris de veau est un mets de haute gastronomie. La tête sauce gribiche est un classique bistrot.",
            cuts: ["Rôti de veau", "Carré", "Selle", "Cuisseau", "Fricandeau", "Foie de veau", "Ris de veau", "Rognons", "Cervelle", "Tête", "Langue", "Cœur", "Pieds", "Fraise"]
        }
    }
};

// Niveau 2: Afficher les sous-catégories d'une viande (boxes cliquables)
async function showMeatCuts(meatId) {
    try {
        const response = await fetch(`${API_URL}/api/meats/${meatId}`);
        const data = await response.json();
        const meat = data.meat;

        // Charger les données encyclopédiques pour afficher les infos générales
        const encyclopediaResponse = await fetch(`${API_URL}/api/encyclopedia/${meat.category}`);
        const encyclopediaData = await encyclopediaResponse.json();
        const encyclopedia = encyclopediaData.data;

        document.getElementById('meatCutsName').textContent = meat.name;

        const content = document.getElementById('meatCutsContent');

        // Section infos générales (histoire, nutrition)
        let generalInfoHtml = '';
        if (encyclopedia) {
            generalInfoHtml = `
                <div class="section encyclopedia-summary">
                    <div class="encyclopedia-teaser">
                        <div class="teaser-item">
                            <span class="teaser-icon">📜</span>
                            <div class="teaser-content">
                                <h4>Histoire</h4>
                                <p>${encyclopedia.histoire ? encyclopedia.histoire.substring(0, 150) + '...' : 'Non disponible'}</p>
                            </div>
                        </div>
                        <div class="teaser-item">
                            <span class="teaser-icon">💪</span>
                            <div class="teaser-content">
                                <h4>Nutrition</h4>
                                <p>${encyclopedia.nutrition ? encyclopedia.nutrition.substring(0, 150) + '...' : 'Non disponible'}</p>
                            </div>
                        </div>
                    </div>
                    <button class="btn-link" onclick="showMeatEncyclopedia('${meatId}')">
                        📖 Voir l'encyclopédie complète →
                    </button>
                </div>
            `;
        }

        // Viandes AVEC sous-catégories (boeuf, porc, agneau, veau)
        if (meat.hasSubcategories && meat.subcategories) {
            content.innerHTML = `
                <!-- En-tête -->
                <div class="section">
                    <h2>${meat.name}</h2>
                    <p class="section-desc">${meat.description}</p>
                    <span class="meat-category">${capitalizeFirst(meat.category)}</span>
                </div>

                ${generalInfoHtml}

                <!-- Boxes des sous-catégories -->
                <div class="subcategories-grid">
                    <div class="subcategory-box subcategory-classique" onclick="showSubcategoryCuts('${meatId}', 'classique')">
                        <div class="subcategory-icon">🥩</div>
                        <h3>${meat.subcategories.classique.name}</h3>
                        <p>${meat.subcategories.classique.description}</p>
                        <div class="subcategory-count">${meat.subcategories.classique.cutsCount} morceaux</div>
                        <div class="subcategory-arrow">→</div>
                    </div>

                    <div class="subcategory-box subcategory-boucher" onclick="showSubcategoryCuts('${meatId}', 'boucher')">
                        <div class="subcategory-icon">🔪</div>
                        <h3>${meat.subcategories.boucher.name}</h3>
                        <p>${meat.subcategories.boucher.description}</p>
                        <div class="subcategory-count">${meat.subcategories.boucher.cutsCount} morceaux</div>
                        <div class="subcategory-arrow">→</div>
                    </div>
                </div>
            `;
        } else {
            // Viandes SANS sous-catégories (volaille, gibier) - afficher directement les cuts
            content.innerHTML = `
                <!-- En-tête -->
                <div class="section">
                    <h2>${meat.name}</h2>
                    <p class="section-desc">${meat.description}</p>
                    <span class="meat-category">${capitalizeFirst(meat.category)}</span>
                </div>

                ${generalInfoHtml}

                <div class="meats-list">
                    ${meat.cuts.map((cut, idx) => `
                        <div class="meat-item" onclick="showCutDetailDirect('${meatId}', ${idx}, null)">
                            <div class="meat-info">
                                <h3>${cut.name} ${cut.nameEn ? '(' + cut.nameEn + ')' : ''}</h3>
                                <p>${cut.description}</p>
                            </div>
                            <div class="arrow">→</div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        navigationHistory.push('explorer');
        navigate('meatCuts');
    } catch (error) {
        console.error('Erreur:', error);
        alert('Erreur lors du chargement des morceaux');
    }
}

// Niveau 2b: Afficher les GROUPES de morceaux d'une sous-catégorie (6-7 boxes)
async function showSubcategoryCuts(meatId, subcategory) {
    try {
        const response = await fetch(`${API_URL}/api/meats/${meatId}/${subcategory}`);
        const data = await response.json();
        const category = data.meat.category;

        document.getElementById('meatCutsName').textContent = data.subcategory.name;

        const content = document.getElementById('meatCutsContent');

        // Récupérer les groupes pour cette viande
        const groups = cutGroups[category] || {};

        // Filtrer les morceaux par groupe
        const cuts = data.subcategory.cuts;
        const groupedCuts = {};
        const ungroupedCuts = [];

        cuts.forEach((cut, idx) => {
            let found = false;
            for (const [groupKey, groupData] of Object.entries(groups)) {
                if (groupData.cuts.some(g => cut.name.toLowerCase().includes(g.toLowerCase()) || g.toLowerCase().includes(cut.name.toLowerCase()))) {
                    if (!groupedCuts[groupKey]) {
                        groupedCuts[groupKey] = { ...groupData, items: [] };
                    }
                    groupedCuts[groupKey].items.push({ cut, idx });
                    found = true;
                    break;
                }
            }
            if (!found) {
                ungroupedCuts.push({ cut, idx });
            }
        });

        // Ajouter les non-groupés dans "Autres"
        if (ungroupedCuts.length > 0) {
            if (!groupedCuts['autres']) {
                groupedCuts['autres'] = { name: "Autres morceaux", icon: "📦", desc: "Morceaux divers", items: [] };
            }
            groupedCuts['autres'].items.push(...ungroupedCuts);
        }

        // Générer les boxes pour chaque groupe avec détails
        const groupBoxesHtml = Object.entries(groupedCuts)
            .filter(([key, group]) => group.items && group.items.length > 0)
            .map(([groupKey, group]) => `
                <div class="group-box-detailed" onclick="showGroupCuts('${meatId}', '${subcategory}', '${groupKey}')">
                    <div class="group-box-header">
                        <span class="group-icon">${group.icon}</span>
                        <div class="group-box-title">
                            <h3>${group.name}</h3>
                            <span class="group-count">${group.items.length} morceaux</span>
                        </div>
                        <span class="group-arrow">→</span>
                    </div>
                    <p class="group-desc">${group.desc}</p>
                    ${group.details ? `<p class="group-details">${group.details}</p>` : ''}
                </div>
            `).join('');

        content.innerHTML = `
            <!-- En-tête -->
            <div class="section ${subcategory === 'boucher' ? 'section-boucher' : ''}">
                <h2>${data.subcategory.name}</h2>
                <p class="section-desc">${data.subcategory.description}</p>
                <span class="meat-category">${data.meat.name}</span>
            </div>

            <!-- Boxes des groupes anatomiques -->
            <div class="groups-list">
                ${groupBoxesHtml}
            </div>

            <div class="section" style="margin-top: 20px;">
                <button class="btn-secondary" onclick="showMeatCuts('${meatId}')">
                    ← Retour aux catégories
                </button>
            </div>
        `;

        // Stocker pour la navigation
        currentSubcategory = subcategory;
        currentMeatCategory = category;
        currentGroupedCuts = groupedCuts;
        navigationHistory.push('meatCuts');
    } catch (error) {
        console.error('Erreur:', error);
        alert('Erreur lors du chargement des morceaux');
    }
}

// Variables pour stocker les données groupées
let currentMeatCategory = null;
let currentGroupedCuts = {};

// Niveau 3: Afficher les morceaux d'un groupe spécifique
async function showGroupCuts(meatId, subcategory, groupKey) {
    const group = currentGroupedCuts[groupKey];
    if (!group || !group.items) {
        alert('Groupe non trouvé');
        return;
    }

    document.getElementById('meatCutsName').textContent = group.name;

    const content = document.getElementById('meatCutsContent');
    content.innerHTML = `
        <!-- En-tête -->
        <div class="section">
            <div class="group-header">
                <span class="group-header-icon">${group.icon}</span>
                <div>
                    <h2>${group.name}</h2>
                    <p class="section-desc">${group.desc}</p>
                </div>
            </div>
        </div>

        <div class="meats-list">
            ${group.items.map(({ cut, idx }) => `
                <div class="meat-item" onclick="showCutDetailDirect('${meatId}', ${idx}, '${subcategory}')">
                    <div class="meat-info">
                        <h3>${cut.name} ${cut.nameEn ? '(' + cut.nameEn + ')' : ''}</h3>
                        <p>${cut.description}</p>
                        <div class="cut-meta">
                            <span class="cut-badge">${cut.cookingMethods?.length || 0} cuissons</span>
                            <span class="cut-badge">${cut.temperatures?.length || 0} niveaux</span>
                        </div>
                    </div>
                    <div class="arrow">→</div>
                </div>
            `).join('')}
        </div>

        <div class="section" style="margin-top: 20px;">
            <button class="btn-secondary" onclick="showSubcategoryCuts('${meatId}', '${subcategory}')">
                ← Retour aux groupes
            </button>
        </div>
    `;

    navigationHistory.push('meatCuts');
}

// Variable pour stocker la sous-catégorie courante
let currentSubcategory = null;

// Afficher l'encyclopédie d'une viande
async function showMeatEncyclopedia(meatId) {
    try {
        const response = await fetch(`${API_URL}/api/meats/${meatId}`);
        const data = await response.json();
        const meat = data.meat;

        const encyclopediaResponse = await fetch(`${API_URL}/api/encyclopedia/${meat.category}`);
        const encyclopediaData = await encyclopediaResponse.json();
        const encyclopedia = encyclopediaData.data;

        const content = document.getElementById('meatCutsContent');

        if (!encyclopedia) {
            content.innerHTML = `<div class="section"><p>Encyclopédie non disponible pour cette viande.</p></div>`;
            return;
        }

        content.innerHTML = `
            <!-- En-tête -->
            <div class="section">
                <h2>📖 Encyclopédie ${meat.name}</h2>
                <p class="section-desc">Tout savoir sur ${meat.name.toLowerCase()}</p>
            </div>

            <!-- Histoire -->
            <div class="section encyclopedia-section">
                <h3>📜 Histoire & Tradition</h3>
                <p style="color: var(--text-primary); line-height: 1.8;">${encyclopedia.histoire}</p>
            </div>

            <!-- Nutrition -->
            <div class="section encyclopedia-section">
                <h3>💪 Valeurs Nutritionnelles</h3>
                <p style="color: var(--text-primary); line-height: 1.8;">${encyclopedia.nutrition}</p>
            </div>

            <!-- Guide de sélection -->
            <div class="section encyclopedia-section">
                <h3>🎯 Guide de Sélection</h3>
                <div style="display: grid; gap: 15px;">
                    ${encyclopedia.selection.couleur ? `
                        <div style="padding: 15px; background: var(--bg-hover); border-radius: 10px; border-left: 4px solid var(--primary);">
                            <strong style="color: var(--primary);">Couleur:</strong>
                            <p style="color: var(--text-primary); margin-top: 5px;">${encyclopedia.selection.couleur}</p>
                        </div>
                    ` : ''}
                    ${encyclopedia.selection.texture ? `
                        <div style="padding: 15px; background: var(--bg-hover); border-radius: 10px; border-left: 4px solid var(--accent-blue);">
                            <strong style="color: var(--accent-blue);">Texture:</strong>
                            <p style="color: var(--text-primary); margin-top: 5px;">${encyclopedia.selection.texture}</p>
                        </div>
                    ` : ''}
                    ${encyclopedia.selection.maturite ? `
                        <div style="padding: 15px; background: var(--bg-hover); border-radius: 10px; border-left: 4px solid var(--accent);">
                            <strong style="color: var(--accent);">Maturation:</strong>
                            <p style="color: var(--text-primary); margin-top: 5px;">${encyclopedia.selection.maturite}</p>
                        </div>
                    ` : ''}
                    ${encyclopedia.selection.signes ? `
                        <div style="padding: 15px; background: var(--bg-hover); border-radius: 10px; border-left: 4px solid var(--accent-green);">
                            <strong style="color: var(--accent-green);">Labels:</strong>
                            <p style="color: var(--text-primary); margin-top: 5px;">${encyclopedia.selection.signes}</p>
                        </div>
                    ` : ''}
                </div>
            </div>

            <!-- Conservation -->
            <div class="section encyclopedia-section">
                <h3>🧊 Conservation</h3>
                <p style="color: var(--text-primary); line-height: 1.8;">${encyclopedia.conservation}</p>
            </div>

            <!-- Préparation -->
            <div class="section encyclopedia-section">
                <h3>🔪 Préparation</h3>
                <div style="display: grid; gap: 15px;">
                    ${encyclopedia.preparation.temperaturage ? `
                        <div style="padding: 15px; background: var(--bg-hover); border-radius: 10px;">
                            <strong style="color: var(--primary);">Tempérage:</strong>
                            <p style="color: var(--text-primary); margin-top: 5px;">${encyclopedia.preparation.temperaturage}</p>
                        </div>
                    ` : ''}
                    ${encyclopedia.preparation.assaisonnement ? `
                        <div style="padding: 15px; background: var(--bg-hover); border-radius: 10px;">
                            <strong style="color: var(--accent-blue);">Assaisonnement:</strong>
                            <p style="color: var(--text-primary); margin-top: 5px;">${encyclopedia.preparation.assaisonnement}</p>
                        </div>
                    ` : ''}
                    ${encyclopedia.preparation.sechage ? `
                        <div style="padding: 15px; background: var(--bg-hover); border-radius: 10px;">
                            <strong style="color: var(--accent);">Séchage:</strong>
                            <p style="color: var(--text-primary); margin-top: 5px;">${encyclopedia.preparation.sechage}</p>
                        </div>
                    ` : ''}
                </div>
            </div>

            <div class="section" style="margin-top: 20px;">
                <button class="btn-secondary" onclick="showMeatCuts('${meatId}')">
                    ← Retour aux catégories
                </button>
            </div>
        `;
    } catch (error) {
        console.error('Erreur:', error);
    }
}

// Fonction pour afficher les détails d'un morceau (avec ou sans sous-catégorie)
async function showCutDetailDirect(meatId, cutIndex, subcategory) {
    try {
        let meat, cut, category;

        if (subcategory) {
            // Charger depuis une sous-catégorie spécifique
            const response = await fetch(`${API_URL}/api/meats/${meatId}/${subcategory}`);
            const data = await response.json();
            meat = data.meat;
            cut = data.subcategory.cuts[cutIndex];
            category = meat.category;
        } else {
            // Charger depuis une viande sans sous-catégorie
            const response = await fetch(`${API_URL}/api/meats/${meatId}`);
            const data = await response.json();
            meat = data.meat;
            cut = meat.cuts[cutIndex];
            category = meat.category;
        }

        if (!cut) {
            alert('Morceau non trouvé');
            return;
        }

        // Charger les données encyclopédiques
        const encyclopediaResponse = await fetch(`${API_URL}/api/encyclopedia/${category}`);
        const encyclopediaData = await encyclopediaResponse.json();
        const encyclopedia = encyclopediaData.data;

        // Normaliser le nom du morceau pour la recherche
        const cutKey = cut.name.toLowerCase()
            .replace(/[àâä]/g, 'a')
            .replace(/[éèêë]/g, 'e')
            .replace(/[îï]/g, 'i')
            .replace(/[ôö]/g, 'o')
            .replace(/[ùûü]/g, 'u')
            .replace(/ç/g, 'c')
            .replace(/œ/g, 'oe')
            .replace(/'/g, '')
            .replace(/[()\/]/g, '_')
            .replace(/\s+/g, '_')
            .replace(/_+/g, '_')
            .replace(/^_|_$/g, '');
        const cutEncyclopedia = encyclopedia?.cuts?.[cutKey];

        currentMeatId = meatId;
        currentCut = cut.name;
        currentCutIndex = cutIndex;
        currentSubcategory = subcategory;

        document.getElementById('cutDetailName').textContent = cut.name;

        const content = document.getElementById('cutDetailContent');
        content.innerHTML = `
            <!-- En-tête avec infos générales -->
            <div class="section">
                <h2>${cut.name} ${cut.nameEn ? '(' + cut.nameEn + ')' : ''}</h2>
                <p class="section-desc">${cut.description}</p>
                <div class="cut-meta">
                    <span class="meat-category">${meat.name} - ${capitalizeFirst(category)}</span>
                </div>
            </div>

            ${(cutEncyclopedia || cut.anatomie) ? `
                <!-- Anatomie et Origine -->
                <div class="section encyclopedia-section">
                    <h3>📚 Anatomie & Origine</h3>
                    ${cutEncyclopedia?.anatomie ? `
                        <p style="color: var(--text-primary); line-height: 1.8;">${cutEncyclopedia.anatomie}</p>
                    ` : cut.anatomie ? `
                        <div class="specs-grid">
                            ${cut.anatomie.localisation ? `<div class="spec-item"><div class="spec-label">Localisation</div><div class="spec-value">${cut.anatomie.localisation}</div></div>` : ''}
                            ${cut.anatomie.origine ? `<div class="spec-item"><div class="spec-label">Origine</div><div class="spec-value">${cut.anatomie.origine}</div></div>` : ''}
                            ${cut.anatomie.muscles ? `<div class="spec-item"><div class="spec-label">Muscles</div><div class="spec-value">${cut.anatomie.muscles.join(', ')}</div></div>` : ''}
                            ${cut.anatomie.categorie ? `<div class="spec-item"><div class="spec-label">Catégorie</div><div class="spec-value">${cut.anatomie.categorie}</div></div>` : ''}
                        </div>
                    ` : ''}
                </div>

                <!-- Caractéristiques détaillées -->
                <div class="section encyclopedia-section">
                    <h3>⭐ Caractéristiques</h3>
                    <div class="specs-grid">
                        ${cutEncyclopedia?.caracteristiques ? `
                            <div class="spec-item"><div class="spec-label">Tendreté</div><div class="spec-value">${cutEncyclopedia.caracteristiques?.tendrete || '-'}</div></div>
                            <div class="spec-item"><div class="spec-label">Saveur</div><div class="spec-value">${cutEncyclopedia.caracteristiques?.saveur || '-'}</div></div>
                            <div class="spec-item"><div class="spec-label">Persillage</div><div class="spec-value">${cutEncyclopedia.caracteristiques?.persillage || '-'}</div></div>
                        ` : cut.caracteristiques ? `
                            ${cut.caracteristiques.texture ? `<div class="spec-item"><div class="spec-label">Texture</div><div class="spec-value">${cut.caracteristiques.texture}</div></div>` : ''}
                            ${cut.caracteristiques.gout ? `<div class="spec-item"><div class="spec-label">Goût</div><div class="spec-value">${cut.caracteristiques.gout}</div></div>` : ''}
                            ${cut.caracteristiques.gras ? `<div class="spec-item"><div class="spec-label">Gras</div><div class="spec-value">${cut.caracteristiques.gras}</div></div>` : ''}
                            ${cut.caracteristiques.fibres ? `<div class="spec-item"><div class="spec-label">Fibres</div><div class="spec-value">${cut.caracteristiques.fibres}</div></div>` : ''}
                            ${cut.caracteristiques.couleur ? `<div class="spec-item"><div class="spec-label">Couleur</div><div class="spec-value">${cut.caracteristiques.couleur}</div></div>` : ''}
                            ${cut.caracteristiques.tenue ? `<div class="spec-item"><div class="spec-label">Tenue</div><div class="spec-value">${cut.caracteristiques.tenue}</div></div>` : ''}
                        ` : `
                            <div class="spec-item"><div class="spec-label">Tendreté</div><div class="spec-value">-</div></div>
                            <div class="spec-item"><div class="spec-label">Saveur</div><div class="spec-value">-</div></div>
                            <div class="spec-item"><div class="spec-label">Persillage</div><div class="spec-value">-</div></div>
                        `}
                    </div>
                </div>

                ${(cutEncyclopedia?.techniquesChef || cut.techniqueDuChef) ? `
                <!-- Techniques du Chef -->
                <div class="section encyclopedia-section">
                    <h3>👨‍🍳 Techniques du Chef</h3>
                    <ul class="tips-list-detailed">
                        ${(cutEncyclopedia?.techniquesChef || cut.techniqueDuChef || []).map(technique => `
                            <li>${technique}</li>
                        `).join('')}
                    </ul>
                </div>
                ` : ''}
            ` : ''}

            <!-- Caractéristiques typiques -->
            ${cut.typicalWeight ? `
            <div class="section">
                <h3>📏 Caractéristiques typiques</h3>
                <div class="specs-grid">
                    <div class="spec-item">
                        <div class="spec-label">Poids</div>
                        <div class="spec-value">${cut.typicalWeight.min} - ${cut.typicalWeight.max} ${cut.typicalWeight.unit}</div>
                    </div>
                    ${cut.typicalDimensions ? `
                        <div class="spec-item">
                            <div class="spec-label">Dimensions</div>
                            <div class="spec-value">${cut.typicalDimensions.length}×${cut.typicalDimensions.width}×${cut.typicalDimensions.height} ${cut.typicalDimensions.unit}</div>
                        </div>
                    ` : ''}
                </div>
            </div>
            ` : ''}

            <!-- Températures de cuisson -->
            ${cut.temperatures && cut.temperatures.length > 0 ? `
            <div class="section">
                <h3>🌡️ Températures de cuisson</h3>
                <div class="temp-table">
                    ${cut.temperatures.map(temp => `
                        <div class="temp-row">
                            <div class="temp-label">${capitalizeFirst(temp.doneness)}</div>
                            <div class="temp-value">
                                ${temp.coreTemperature}°C
                            </div>
                            <div class="temp-desc">${temp.description || ''}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            ` : ''}

            <!-- Méthodes de cuisson -->
            ${cut.cookingMethods && cut.cookingMethods.length > 0 ? `
            <div class="section">
                <h3>🔥 Méthodes de cuisson</h3>
                <div class="methods-grid">
                    ${cut.cookingMethods.map(method => `
                        <div class="method-card">
                            <div class="method-icon">${getMethodIcon(method.method)}</div>
                            <div class="method-name">${getMethodName(method.method)}</div>
                            <div class="method-details">
                                <div>🌡️ ${method.temperatureRange?.recommended || method.temperatureRange?.min || '-'}°C</div>
                                <div>⏱️ ${method.baseTimePerKg || '-'}min/kg</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            ` : ''}

            ${(cutEncyclopedia?.sauces || cut.sauces) ? `
                <!-- Sauces recommandées -->
                <div class="section encyclopedia-section">
                    <h3>🍷 Sauces Recommandées</h3>
                    ${(cutEncyclopedia?.sauces || cut.sauces || []).map(sauce => `
                        <div class="recommendation-box sauce-clickable" style="margin-bottom: 15px; cursor: pointer;" onclick="showRecipe('${sauce.nom.replace(/'/g, "\\'")}', 'sauce')">
                            <h4 style="color: var(--dark); margin-bottom: 8px;">
                                ${sauce.nom} <span style="font-size: 0.85em; opacity: 0.8;">(${sauce.type})</span>
                                <span style="float: right; font-size: 0.8em;">📖 Voir recette</span>
                            </h4>
                            <p style="color: var(--text-secondary); margin-bottom: 8px;"><strong>Composition:</strong> ${sauce.description}</p>
                            ${sauce.accord ? `<p style="color: var(--text-muted);"><em>${sauce.accord}</em></p>` : ''}
                        </div>
                    `).join('')}
                </div>
            ` : ''}

            ${cut.accompagnements ? `
                <!-- Accompagnements -->
                <div class="section encyclopedia-section">
                    <h3>🥘 Accompagnements</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                        ${cut.accompagnements.map(acc => `
                            <div class="accomp-clickable" style="background: var(--bg-hover); padding: 10px 15px; border-radius: 8px; display: flex; align-items: center; gap: 8px; cursor: pointer;" onclick="showRecipe('${acc.nom.replace(/'/g, "\\'")}', 'accompagnement')">
                                <span>${acc.type === 'féculent' ? '🥔' : acc.type === 'légume' ? '🥬' : acc.type === 'salade' ? '🥗' : '🍽️'}</span>
                                <span style="color: var(--text-primary);">${acc.nom}</span>
                                <span style="font-size: 0.8em; opacity: 0.7;">📖</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

            ${(cutEncyclopedia?.erreursCourantes || cut.erreursAEviter) ? `
                <!-- Erreurs courantes -->
                <div class="section encyclopedia-section">
                    <h3>⚠️ Erreurs à Éviter</h3>
                    ${cutEncyclopedia?.erreursCourantes ? `
                        <ul class="tips-list-detailed">
                            ${cutEncyclopedia.erreursCourantes.map(erreur => `
                                <li style="border-left: 3px solid var(--primary);">${erreur}</li>
                            `).join('')}
                        </ul>
                    ` : cut.erreursAEviter ? `
                        ${cut.erreursAEviter.map(err => `
                            <div style="background: var(--bg-hover); padding: 15px; border-radius: 8px; margin-bottom: 10px; border-left: 3px solid var(--primary);">
                                <div style="font-weight: bold; color: var(--primary); margin-bottom: 5px;">❌ ${err.erreur}</div>
                                <div style="color: var(--text-secondary); margin-bottom: 5px;">→ ${err.consequence}</div>
                                <div style="color: var(--text-primary);">✓ ${err.solution}</div>
                            </div>
                        `).join('')}
                    ` : ''}
                </div>
            ` : ''}

            ${(cutEncyclopedia?.anecdotes || cut.leSaviezVous) ? `
                <!-- Anecdote -->
                <div class="section" style="background: linear-gradient(135deg, var(--accent), #f59e0b); color: var(--dark); padding: 20px; border-radius: 16px;">
                    <h3 style="color: var(--dark); margin-bottom: 12px;">📖 Le Saviez-vous ?</h3>
                    <p style="color: var(--dark); line-height: 1.8; font-style: italic;">${cutEncyclopedia?.anecdotes || cut.leSaviezVous}</p>
                </div>
            ` : ''}

            <!-- Bouton vers Cooking Helper -->
            <div class="section cta-section">
                <h3>Prêt à cuisiner ce morceau ?</h3>
                <p class="section-desc">Utilisez le Cooking Helper pour obtenir le temps de cuisson exact</p>
                <button class="btn-primary btn-large" onclick="goToCalculatorFromSubcategory('${meatId}', ${cutIndex}, '${subcategory || ''}')">
                    🍳 Lancer le Cooking Helper
                </button>
            </div>
        `;

        navigationHistory.push('meatCuts');
        navigate('cutDetail');
    } catch (error) {
        console.error('Erreur:', error);
        alert('Erreur lors du chargement des détails');
    }
}

// Aller au calculateur depuis une sous-catégorie
function goToCalculatorFromSubcategory(meatId, cutIndex, subcategory) {
    currentMeatId = meatId;
    currentCutIndex = cutIndex;
    currentSubcategory = subcategory || null;
    navigationHistory.push('cutDetail');
    loadCalculator();
    navigate('calculator');
}

// Niveau 3: Détails d'un morceau spécifique - VERSION ENCYCLOPÉDIQUE (ancienne version pour compatibilité)
async function showCutDetail(meatId, cutIndex) {
    try {
        const response = await fetch(`${API_URL}/api/meats/${meatId}`);
        const data = await response.json();
        const meat = data.meat;
        const cut = meat.cuts ? meat.cuts[cutIndex] : null;

        if (!cut) {
            alert('Morceau non trouvé');
            return;
        }

        // Charger les données encyclopédiques
        const encyclopediaResponse = await fetch(`${API_URL}/api/encyclopedia/${meat.category}`);
        const encyclopediaData = await encyclopediaResponse.json();
        const encyclopedia = encyclopediaData.data;

        // Charger les recettes pour ce morceau
        let recipesForCut = [];
        try {
            const recipesResponse = await fetch(`${API_URL}/api/recipes/${meat.category}/${cut.name}`);
            if (recipesResponse.ok) {
                const recipesData = await recipesResponse.json();
                recipesForCut = recipesData.recipes || [];
            }
        } catch (e) {
            console.log('Pas de recettes trouvées pour ce morceau');
        }

        // Normaliser le nom du morceau pour la recherche (tous les accents)
        const cutKey = cut.name.toLowerCase()
            .replace(/[àâä]/g, 'a')
            .replace(/[éèêë]/g, 'e')
            .replace(/[îï]/g, 'i')
            .replace(/[ôö]/g, 'o')
            .replace(/[ùûü]/g, 'u')
            .replace(/ç/g, 'c')
            .replace(/œ/g, 'oe')
            .replace(/'/g, '')
            .replace(/[()\/]/g, '_')  // Replace parentheses and slashes with underscores
            .replace(/\s+/g, '_')
            .replace(/_+/g, '_')  // Replace multiple underscores with one
            .replace(/^_|_$/g, '');  // Remove leading/trailing underscores
        const cutEncyclopedia = encyclopedia.cuts?.[cutKey];

        currentMeatId = meatId;
        currentCut = cut.name;

        document.getElementById('cutDetailName').textContent = cut.name;

        const content = document.getElementById('cutDetailContent');
        content.innerHTML = `
            <!-- En-tête avec infos générales -->
            <div class="section">
                <h2>${cut.name} ${cut.nameEn ? '(' + cut.nameEn + ')' : ''}</h2>
                <p class="section-desc">${cut.description}</p>
                <div class="cut-meta">
                    <span class="meat-category">${meat.name} - ${capitalizeFirst(meat.category)}</span>
                </div>
            </div>

            ${cutEncyclopedia ? `
                <!-- Anatomie et Origine -->
                <div class="section encyclopedia-section">
                    <h3>📚 Anatomie & Origine</h3>
                    <p style="color: var(--text-primary); line-height: 1.8;">${cutEncyclopedia.anatomie}</p>
                </div>

                <!-- Caractéristiques détaillées -->
                <div class="section encyclopedia-section">
                    <h3>⭐ Caractéristiques</h3>
                    <div class="specs-grid">
                        <div class="spec-item">
                            <div class="spec-label">Tendreté</div>
                            <div class="spec-value">${cutEncyclopedia.caracteristiques.tendrete}</div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-label">Saveur</div>
                            <div class="spec-value">${cutEncyclopedia.caracteristiques.saveur}</div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-label">Persillage</div>
                            <div class="spec-value">${cutEncyclopedia.caracteristiques.persillage}</div>
                        </div>
                    </div>
                </div>

                <!-- Techniques du Chef -->
                <div class="section encyclopedia-section">
                    <h3>👨‍🍳 Techniques du Chef</h3>
                    <ul class="tips-list-detailed">
                        ${cutEncyclopedia.techniquesChef.map(technique => `
                            <li>${technique}</li>
                        `).join('')}
                    </ul>
                </div>
            ` : ''}

            <!-- Caractéristiques typiques -->
            <div class="section">
                <h3>📏 Caractéristiques typiques</h3>
                <div class="specs-grid">
                    <div class="spec-item">
                        <div class="spec-label">Poids</div>
                        <div class="spec-value">${cut.typicalWeight.min} - ${cut.typicalWeight.max} ${cut.typicalWeight.unit}</div>
                    </div>
                    ${cut.typicalDimensions ? `
                        <div class="spec-item">
                            <div class="spec-label">Dimensions</div>
                            <div class="spec-value">${cut.typicalDimensions.length}×${cut.typicalDimensions.width}×${cut.typicalDimensions.height} ${cut.typicalDimensions.unit}</div>
                        </div>
                    ` : ''}
                </div>
            </div>

            <!-- Températures de cuisson -->
            <div class="section">
                <h3>🌡️ Températures de cuisson (${cut.temperatures.length} niveaux)</h3>
                <div class="temp-table">
                    ${cut.temperatures.map(temp => `
                        <div class="temp-row">
                            <div class="temp-label">${capitalizeFirst(temp.doneness)}</div>
                            <div class="temp-value">
                                ${temp.coreTemperature}°C
                                ${temp.safetyTemperature ? `<span style="font-size: 0.85em; color: var(--text-secondary);"> (Sécurité: ${temp.safetyTemperature}°C)</span>` : ''}
                            </div>
                            <div class="temp-desc">${temp.description}</div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Méthodes de cuisson -->
            <div class="section">
                <h3>🔥 Méthodes de cuisson (${cut.cookingMethods.length} disponibles)</h3>
                <div class="methods-grid">
                    ${cut.cookingMethods.map(method => `
                        <div class="method-card">
                            <div class="method-icon">${getMethodIcon(method.method)}</div>
                            <div class="method-name">${getMethodName(method.method)}</div>
                            <div class="method-details">
                                <div>🌡️ ${method.temperatureRange?.recommended || method.temperatureRange?.min || '-'}°C</div>
                                <div>⏱️ ${method.baseTimePerKg}min/kg</div>
                                ${method.baseTimePerCm ? `<div>📏 ${method.baseTimePerCm}min/cm</div>` : ''}
                                <div>🕐 Repos: ${method.restingTime}min</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            ${cutEncyclopedia && cutEncyclopedia.sauces ? `
                <!-- Sauces recommandées -->
                <div class="section encyclopedia-section">
                    <h3>🍷 Sauces Recommandées</h3>
                    ${cutEncyclopedia.sauces.map(sauce => `
                        <div class="recommendation-box" style="margin-bottom: 15px;">
                            <h4 style="color: white; margin-bottom: 8px;">
                                ${sauce.nom} <span style="font-size: 0.85em; opacity: 0.8;">(${sauce.type})</span>
                            </h4>
                            <p style="color: white; margin-bottom: 8px;"><strong>Composition:</strong> ${sauce.description}</p>
                            <p style="color: rgba(255,255,255,0.9);"><em>${sauce.accord}</em></p>
                        </div>
                    `).join('')}
                </div>

                <!-- Accompagnements -->
                <div class="section encyclopedia-section">
                    <h3>🥘 Accompagnements</h3>
                    ${cutEncyclopedia.accompagnements.map(category => `
                        <div style="margin-bottom: 20px;">
                            <h4 style="color: var(--primary); margin-bottom: 10px;">${category.type}</h4>
                            <ul style="list-style: none; padding-left: 0;">
                                ${category.suggestions.map(suggestion => `
                                    <li style="padding: 8px 0; border-bottom: 1px solid var(--surface-variant); color: var(--text-primary);">
                                        • ${suggestion}
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>

                <!-- Erreurs courantes -->
                <div class="section encyclopedia-section">
                    <h3>⚠️ Erreurs à Éviter</h3>
                    <ul class="tips-list-detailed">
                        ${cutEncyclopedia.erreursCourantes.map(erreur => `
                            <li style="border-left: 3px solid var(--secondary);">${erreur}</li>
                        `).join('')}
                    </ul>
                </div>

                <!-- Anecdote -->
                <div class="section" style="background: linear-gradient(135deg, var(--accent-gradient-start), var(--accent-gradient-end)); color: white; padding: 20px; border-radius: 16px;">
                    <h3 style="color: white; margin-bottom: 12px;">📖 Le Saviez-vous ?</h3>
                    <p style="color: white; line-height: 1.8; font-style: italic;">${cutEncyclopedia.anecdotes}</p>
                </div>
            ` : ''}

            <!-- Section Recettes -->
            ${recipesForCut.length > 0 ? `
                <div class="section">
                    <h3>📖 Recettes pour ${cut.name}</h3>
                    <p class="section-desc">${recipesForCut.length} recette${recipesForCut.length > 1 ? 's' : ''} disponible${recipesForCut.length > 1 ? 's' : ''}</p>
                    <div class="recipes-grid">
                        ${recipesForCut.map((recipe, idx) => `
                            <div class="recipe-card" onclick="showRecipeDetail('${meat.category}', '${cut.name}', ${idx})">
                                <div class="recipe-header">
                                    <span class="recipe-type ${recipe.type}">${recipe.type === 'classique' ? '⭐ Classique' : recipe.type === 'elaboree' ? '👨‍🍳 Élaborée' : '✨ Originale'}</span>
                                    <span class="recipe-difficulty ${recipe.difficulte}">${recipe.difficulte}</span>
                                </div>
                                <h4 class="recipe-title">${recipe.nom}</h4>
                                <p class="recipe-desc">${recipe.description}</p>
                                <div class="recipe-meta">
                                    <span>⏱️ ${recipe.tempsPreparation + recipe.tempsCuisson} min</span>
                                    <span>👥 ${recipe.portions} pers.</span>
                                </div>
                                <div class="recipe-arrow">Voir la recette →</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

            <!-- Bouton vers Cooking Helper -->
            <div class="section cta-section">
                <h3>Prêt à cuisiner ce morceau ?</h3>
                <p class="section-desc">Utilisez le Cooking Helper pour obtenir le temps de cuisson exact selon vos paramètres</p>
                <button class="btn-primary btn-large" onclick="goToCalculatorFromCut('${meatId}', ${cutIndex})">
                    🍳 Lancer le Cooking Helper pour ${cut.name}
                </button>
            </div>
        `;

        navigationHistory.push('meatCuts');
        navigate('cutDetail');
    } catch (error) {
        console.error('Erreur:', error);
        alert('Erreur lors du chargement des détails');
    }
}

function goToCalculatorFromCut(meatId, cutIndex) {
    currentMeatId = meatId;
    currentCutIndex = cutIndex;
    navigationHistory.push('cutDetail');
    loadCalculator();
    navigate('calculator');
}

function goToCalculator(meatId, cutName) {
    currentMeatId = meatId;
    currentCut = cutName;
    loadCalculator();
    navigate('calculator');
}

// Afficher le détail d'une recette
async function showRecipeDetail(category, cutName, recipeIndex) {
    try {
        const response = await fetch(`${API_URL}/api/recipes/${category}/${cutName}`);
        if (!response.ok) {
            alert('Recette non trouvée');
            return;
        }
        const data = await response.json();
        const recipe = data.recipes[recipeIndex];

        if (!recipe) {
            alert('Recette non trouvée');
            return;
        }

        document.getElementById('cutDetailName').textContent = recipe.nom;
        const content = document.getElementById('cutDetailContent');

        content.innerHTML = `
            <div class="section">
                <div class="recipe-detail-header">
                    <span class="recipe-type ${recipe.type}">${recipe.type === 'classique' ? '⭐ Recette Classique' : recipe.type === 'elaboree' ? '👨‍🍳 Recette Élaborée' : '✨ Recette Originale'}</span>
                </div>
                <h2>${recipe.nom}</h2>
                <p class="section-desc">${recipe.description}</p>

                <div class="recipe-info-grid">
                    <div class="recipe-info-item">
                        <span class="recipe-info-icon">⏱️</span>
                        <div>
                            <div class="recipe-info-label">Préparation</div>
                            <div class="recipe-info-value">${recipe.tempsPreparation} min</div>
                        </div>
                    </div>
                    <div class="recipe-info-item">
                        <span class="recipe-info-icon">🔥</span>
                        <div>
                            <div class="recipe-info-label">Cuisson</div>
                            <div class="recipe-info-value">${recipe.tempsCuisson} min</div>
                        </div>
                    </div>
                    <div class="recipe-info-item">
                        <span class="recipe-info-icon">👥</span>
                        <div>
                            <div class="recipe-info-label">Portions</div>
                            <div class="recipe-info-value">${recipe.portions} pers.</div>
                        </div>
                    </div>
                    <div class="recipe-info-item">
                        <span class="recipe-info-icon">📊</span>
                        <div>
                            <div class="recipe-info-label">Difficulté</div>
                            <div class="recipe-info-value">${recipe.difficulte}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section">
                <h3>🥘 Ingrédients</h3>
                <ul class="ingredients-list">
                    ${recipe.ingredients.map(ing => `
                        <li class="ingredient-item">
                            <span class="ingredient-qty">${ing.quantite}</span>
                            <span class="ingredient-name">${ing.ingredient}</span>
                            ${ing.note ? `<span class="ingredient-note">(${ing.note})</span>` : ''}
                        </li>
                    `).join('')}
                </ul>
            </div>

            <div class="section">
                <h3>👨‍🍳 Étapes de préparation</h3>
                <ol class="steps-list">
                    ${recipe.etapes.map((etape, idx) => `
                        <li class="step-item">
                            <span class="step-number">${idx + 1}</span>
                            <span class="step-text">${etape}</span>
                        </li>
                    `).join('')}
                </ol>
            </div>

            ${recipe.conseils && recipe.conseils.length > 0 ? `
                <div class="section tips-section">
                    <h3>💡 Conseils du chef</h3>
                    <ul class="tips-list">
                        ${recipe.conseils.map(conseil => `
                            <li class="tip-item">${conseil}</li>
                        `).join('')}
                    </ul>
                </div>
            ` : ''}

            <!-- Lancement Cooking Helper depuis la recette -->
            <div class="section cta-section">
                <h3>🍳 Lancer le Cooking Helper</h3>
                <p class="section-desc">Calculez précisément les temps de cuisson pour cette recette</p>
                <button class="btn-primary btn-large" onclick="launchCookingHelperFromRecipe('${category}', '${cutName}', '${recipe.cookingHelper?.method || ''}', '${recipe.cookingHelper?.doneness || ''}')">
                    🍳 Cooking Helper pour ${recipe.portions} personnes
                </button>
            </div>

            <div class="section">
                <button class="btn-secondary" onclick="navigateBack()">
                    ← Retour au morceau
                </button>
            </div>
        `;

        navigationHistory.push('cutDetail');
    } catch (error) {
        console.error('Erreur:', error);
        alert('Erreur lors du chargement de la recette');
    }
}

// Lancer le Cooking Helper depuis une recette avec paramètres préremplis
function launchCookingHelperFromRecipe(category, cutName, method, doneness) {
    currentCut = cutName;
    // On stocke les paramètres de la recette pour les préremplir
    window.recipeParams = { method, doneness };
    loadCalculator();
    navigate('calculator');
}

// Changer le mode du Cooking Helper
function setCalculatorMode(mode, buttonElement) {
    calculatorMode = mode;

    // Update toggle buttons
    document.querySelectorAll('.mode-toggle button').forEach(btn => {
        btn.classList.remove('active');
    });
    if (buttonElement) {
        buttonElement.classList.add('active');
    }

    // Show/hide advanced fields (sauf les champs contextuels qui sont gérés par updateContextualFields)
    const advancedFields = document.querySelectorAll('.advanced-field');
    advancedFields.forEach(field => {
        // Les champs contextuels sont gérés séparément par updateContextualFields()
        if (field.classList.contains('contextual-field')) {
            // En mode simple, masquer tous les champs contextuels
            if (mode === 'simple') {
                field.style.display = 'none';
            }
            // En mode avancé, updateContextualFields() s'en charge
            return;
        }
        field.style.display = mode === 'advanced' ? 'block' : 'none';
    });

    // Mettre à jour les champs contextuels si on est en mode avancé
    if (mode === 'advanced') {
        updateContextualFields();
    }

    // Show/hide advanced section
    const advancedSection = document.querySelector('.advanced-section');
    if (advancedSection) {
        advancedSection.style.display = mode === 'advanced' ? 'block' : 'none';
    }

    // Update mode hint
    const modeHint = document.getElementById('modeHint');
    if (modeHint) {
        modeHint.textContent = mode === 'advanced'
            ? 'Mode avancé : tous les paramètres techniques pour une précision maximale'
            : 'Mode simple : paramètres essentiels pour une cuisson réussie';
    }
}

// Fonction pour afficher/masquer les champs contextuels selon le morceau sélectionné
function updateContextualFields() {
    // Ne rien faire si on n'est pas en mode avancé
    if (calculatorMode !== 'advanced') return;

    const cutSelect = document.getElementById('cutSelect');
    const meatSelect = document.getElementById('meatSelect');
    const methodSelect = document.getElementById('method');

    if (!cutSelect || !meatSelect) return;

    const cutName = cutSelect.options[cutSelect.selectedIndex]?.text?.toLowerCase() || '';
    const meatName = meatSelect.options[meatSelect.selectedIndex]?.text?.toLowerCase() || '';
    const methodValue = methodSelect?.value?.toLowerCase() || '';

    // Mettre à jour le hint si aucun morceau n'est sélectionné
    const advancedHint = document.getElementById('advancedHint');
    if (!cutName || cutSelect.value === '') {
        if (advancedHint) {
            advancedHint.textContent = 'Sélectionnez un morceau pour voir les paramètres disponibles';
            advancedHint.style.display = 'block';
        }
        // Masquer tous les champs contextuels
        document.querySelectorAll('.contextual-field').forEach(field => {
            field.style.display = 'none';
        });
        return;
    }

    // Cacher le hint quand un morceau est sélectionné
    if (advancedHint) {
        advancedHint.style.display = 'none';
    }

    // Pour chaque champ contextuel, vérifier s'il doit être affiché
    document.querySelectorAll('.contextual-field').forEach(field => {
        const contexts = (field.getAttribute('data-contexts') || '').split(',').map(c => c.trim().toLowerCase());

        // Vérifier si le contexte correspond au nom du morceau, de la viande ou de la méthode
        const shouldShow = contexts.some(context => {
            // Correspondance exacte ou partielle avec le nom du morceau
            if (cutName.includes(context) || context.includes(cutName.split(' ')[0])) return true;
            // Correspondance avec la catégorie de viande
            if (meatName.includes(context)) return true;
            // Correspondance avec la méthode (pour searing par exemple)
            if (methodValue.includes(context) || context.includes('four') && methodValue.includes('four')) return true;
            return false;
        });

        field.style.display = shouldShow ? 'block' : 'none';
    });
}

// Cooking Helper avec mode Simple/Avancé
async function loadCalculator() {
    const form = document.getElementById('calcForm');

    form.innerHTML = `
        <div class="section">
            <h2>🍳 Cooking Helper</h2>
            <p class="section-desc">Votre assistant cuisson intelligent pour des résultats parfaits</p>
        </div>

        <div class="section">
            <h3>Mode de calcul</h3>
            <div class="mode-toggle">
                <button class="active" onclick="setCalculatorMode('simple', this)">🎯 Simple</button>
                <button onclick="setCalculatorMode('advanced', this)">⚙️ Avancé</button>
            </div>
            <p class="mode-hint" id="modeHint" style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 8px;">
                Mode simple : paramètres essentiels pour une cuisson réussie
            </p>
        </div>

        <div class="section">
            <div class="form-group">
                <label for="meatSelect">Type de viande *</label>
                <select id="meatSelect" required>
                    <option value="">-- Choisissez une viande --</option>
                    ${meatsData.map(m => `<option value="${m._id}">${m.name}</option>`).join('')}
                </select>
            </div>

            <div class="form-group">
                <label for="cutSelect">Morceau *</label>
                <select id="cutSelect" required disabled>
                    <option value="">-- Choisissez d'abord une viande --</option>
                </select>
            </div>

            <div class="form-group">
                <label for="weight">Poids (kg) *</label>
                <input type="number" id="weight" step="0.1" min="0.1" value="1.0" required>
                <small class="field-hint" id="weightHint"></small>
            </div>

            <div class="form-group advanced-field" style="display: none;">
                <label for="thickness">Épaisseur (cm)</label>
                <input type="number" id="thickness" step="0.5" min="1" value="5" required>
                <small class="field-hint" id="thicknessHint"></small>
            </div>

            <div class="form-group">
                <label for="doneness">Niveau de cuisson *</label>
                <select id="doneness" required disabled>
                    <option value="">-- Choisissez d'abord un morceau --</option>
                </select>
            </div>

            <div class="form-group">
                <label for="method">Méthode de cuisson *</label>
                <select id="method" required disabled>
                    <option value="">-- Choisissez d'abord un morceau --</option>
                </select>
            </div>

            <div class="form-group" id="temperatureSliderGroup" style="display: none;">
                <label for="cookingTemp">Température de cuisson: <span id="cookingTempValue">180</span>°C</label>
                <input type="range" id="cookingTemp" min="100" max="250" value="180" step="5"
                       style="width: 100%; height: 8px; border-radius: 5px; background: linear-gradient(to right, var(--primary) 0%, var(--secondary) 100%); outline: none; -webkit-appearance: none;">
                <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--text-secondary); margin-top: 5px;">
                    <span id="minTempLabel">100°C</span>
                    <span id="recommendedTempLabel" style="color: var(--primary); font-weight: 600;">Recommandé: 180°C</span>
                    <span id="maxTempLabel">250°C</span>
                </div>
            </div>

            <!-- Paramètres avancés - affichés dynamiquement selon le morceau -->
            <div class="advanced-section" id="advancedSection" style="display: none;">
                <h4 style="margin: 20px 0 15px; color: var(--text-primary); border-top: 1px solid var(--border); padding-top: 15px;">
                    ⚙️ Paramètres techniques
                </h4>
                <p id="advancedHint" style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 15px;">
                    Sélectionnez un morceau pour voir les paramètres disponibles
                </p>

                <!-- Température initiale - toujours visible en mode avancé -->
                <div class="form-group advanced-field" style="display: none;">
                    <label for="initialTemp">Température initiale de la viande</label>
                    <select id="initialTemp">
                        <option value="4">Sortie du réfrigérateur (4°C)</option>
                        <option value="12">Chambre froide (12°C)</option>
                        <option value="20" selected>Température ambiante (20°C)</option>
                    </select>
                    <small class="field-hint">Impacte le temps de cuisson de 10-20%</small>
                </div>

                <!-- Avec os - seulement pour morceaux avec os possible -->
                <div class="form-group advanced-field contextual-field" id="boneGroup" style="display: none;" data-contexts="cote,gigot,carre,souris,jarret,travers,cuisse,pilon,aile">
                    <label for="hasBone">Avec os ?</label>
                    <select id="hasBone">
                        <option value="false" selected>Non - Désossé</option>
                        <option value="true">Oui - Avec os (+10% temps)</option>
                    </select>
                    <small class="field-hint">L'os conduit moins la chaleur</small>
                </div>

                <!-- Bardage/Lardage - seulement pour viandes maigres -->
                <div class="form-group advanced-field contextual-field" id="bardingGroup" style="display: none;" data-contexts="filet,gibier,chevreuil,cerf,biche,sanglier,lievre,faisan,perdrix,becasse">
                    <label for="barding">Préparation matière grasse</label>
                    <select id="barding">
                        <option value="none" selected>Aucune</option>
                        <option value="barded">Bardé (lard enveloppant)</option>
                        <option value="larded">Lardé (lardons piqués)</option>
                        <option value="marinated">Mariné</option>
                    </select>
                    <small class="field-hint">Protège les viandes maigres du dessèchement</small>
                </div>

                <!-- Persillage - seulement pour boeuf et certains morceaux -->
                <div class="form-group advanced-field contextual-field" id="marblingGroup" style="display: none;" data-contexts="boeuf,entrecote,faux-filet,cote">
                    <label for="marbling">Qualité du persillage</label>
                    <select id="marbling">
                        <option value="lean">Maigre (peu de gras)</option>
                        <option value="moderate" selected>Modéré (standard)</option>
                        <option value="well">Bien persillé</option>
                        <option value="prime">Premium / Wagyu</option>
                    </select>
                    <small class="field-hint">Plus de gras = cuisson plus rapide</small>
                </div>

                <!-- Saisie préalable - pour les cuissons au four -->
                <div class="form-group advanced-field contextual-field" id="searingGroup" style="display: none;" data-contexts="four,roti,gigot,carre,filet,roti">
                    <label for="searing">Saisie préalable</label>
                    <select id="searing">
                        <option value="none" selected>Aucune</option>
                        <option value="light">Légère (1-2 min/côté)</option>
                        <option value="strong">Forte croûte (2-3 min/côté)</option>
                    </select>
                    <small class="field-hint">Réduit le temps de cuisson au four</small>
                </div>

                <!-- Temps de repos - toujours visible en avancé -->
                <div class="form-group advanced-field" style="display: none;">
                    <label for="restingTime">Temps de repos prévu</label>
                    <select id="restingTime">
                        <option value="0">Aucun repos</option>
                        <option value="5" selected>Court (5 min)</option>
                        <option value="10">Moyen (10 min)</option>
                        <option value="15">Long (15+ min)</option>
                    </select>
                    <small class="field-hint">La température monte de 2-5°C au repos</small>
                </div>

                <!-- Équipement - toujours visible en avancé -->
                <div class="form-group advanced-field" style="display: none;">
                    <label for="equipment">Équipement utilisé</label>
                    <select id="equipment">
                        <option value="standard" selected>Standard (inox, téflon)</option>
                        <option value="castiron">Fonte (meilleure rétention chaleur)</option>
                        <option value="copper">Cuivre (réactivité maximale)</option>
                        <option value="ceramic">Céramique / Pierre</option>
                    </select>
                    <small class="field-hint">Affecte l'inertie thermique</small>
                </div>

                <div class="form-group advanced-field" style="display: none;">
                    <label for="altitude">Altitude</label>
                    <select id="altitude">
                        <option value="0" selected>Niveau de la mer (0-500m)</option>
                        <option value="1000">Montagne (500-1500m)</option>
                        <option value="2000">Haute altitude (1500m+)</option>
                    </select>
                    <small class="field-hint">L'altitude affecte la pression et l'ébullition</small>
                </div>
            </div>

            <button type="submit" class="btn-primary" style="margin-top: 20px;">🍳 Calculer ma cuisson</button>
        </div>
    `;

    const meatSelect = document.getElementById('meatSelect');
    const cutSelect = document.getElementById('cutSelect');
    const donenessSelect = document.getElementById('doneness');
    const methodSelect = document.getElementById('method');
    const weightInput = document.getElementById('weight');
    const thicknessInput = document.getElementById('thickness');

    // Réinitialiser les variables globales
    selectedMeat = null;
    selectedCutData = null;

    if (currentMeatId) {
        meatSelect.value = currentMeatId;
        await updateCuts();
    }

    meatSelect.addEventListener('change', updateCuts);
    cutSelect.addEventListener('change', updateCutInfo);
    methodSelect.addEventListener('change', () => {
        updateTemperatureSlider();
        updateContextualFields(); // Mettre à jour les champs contextuels (ex: saisie pour four)
    });

    // Event listener pour le slider de température
    const cookingTempSlider = document.getElementById('cookingTemp');
    const cookingTempValue = document.getElementById('cookingTempValue');
    cookingTempSlider.addEventListener('input', function() {
        cookingTempValue.textContent = this.value;
    });

    async function updateCuts() {
        const meatId = meatSelect.value;
        if (!meatId) {
            cutSelect.disabled = true;
            cutSelect.innerHTML = '<option value="">-- Choisissez d\'abord une viande --</option>';
            return;
        }

        const response = await fetch(`${API_URL}/api/meats/${meatId}`);
        const data = await response.json();
        selectedMeat = data.meat;

        // Gérer les viandes avec sous-catégories (boeuf, porc, agneau, veau)
        if (selectedMeat.hasSubcategories) {
            // Charger les cuts des deux sous-catégories
            const [classiqueRes, boucherRes] = await Promise.all([
                fetch(`${API_URL}/api/meats/${meatId}/classique`),
                fetch(`${API_URL}/api/meats/${meatId}/boucher`)
            ]);
            const classiqueData = await classiqueRes.json();
            const boucherData = await boucherRes.json();

            // Combiner les cuts avec un indicateur de sous-catégorie et l'index original
            const classiqueCuts = (classiqueData.subcategory?.cuts || []).map((cut, idx) => ({
                ...cut,
                subcategory: 'classique',
                originalIndex: idx,
                displayName: cut.name
            }));
            const boucherCuts = (boucherData.subcategory?.cuts || []).map((cut, idx) => ({
                ...cut,
                subcategory: 'boucher',
                originalIndex: idx,
                displayName: `${cut.name} (boucher)`
            }));

            selectedMeat.cuts = [...classiqueCuts, ...boucherCuts];
        }

        cutSelect.disabled = false;
        cutSelect.innerHTML = `
            <option value="">-- Choisissez un morceau --</option>
            ${selectedMeat.cuts.map((cut, idx) => `<option value="${idx}">${cut.displayName || cut.name}</option>`).join('')}
        `;

        if (currentCutIndex !== null && currentMeatId === meatId) {
            cutSelect.value = currentCutIndex;
            updateCutInfo();
        } else if (currentCut && currentMeatId === meatId) {
            const cutIndex = selectedMeat.cuts.findIndex(c => c.name === currentCut);
            if (cutIndex >= 0) {
                cutSelect.value = cutIndex;
                updateCutInfo();
            }
        }
    }

    function updateTemperatureSlider() {
        const selectedMethodValue = methodSelect.value;
        const sliderGroup = document.getElementById('temperatureSliderGroup');

        if (!selectedCutData || !selectedMethodValue) {
            sliderGroup.style.display = 'none';
            return;
        }

        // Trouver la méthode de cuisson sélectionnée
        const cookingMethod = selectedCutData.cookingMethods.find(m => m.method === selectedMethodValue);

        if (!cookingMethod || !cookingMethod.temperatureRange) {
            sliderGroup.style.display = 'none';
            return;
        }

        // Afficher le slider et mettre à jour les valeurs
        sliderGroup.style.display = 'block';
        const tempRange = cookingMethod.temperatureRange;

        cookingTempSlider.min = tempRange.min;
        cookingTempSlider.max = tempRange.max;
        cookingTempSlider.value = tempRange.recommended;
        cookingTempValue.textContent = tempRange.recommended;

        // Mettre à jour les labels
        document.getElementById('minTempLabel').textContent = `${tempRange.min}°C`;
        document.getElementById('maxTempLabel').textContent = `${tempRange.max}°C`;
        document.getElementById('recommendedTempLabel').textContent = `Recommandé: ${tempRange.recommended}°C`;
    }

    function updateCutInfo() {
        const cutIndex = cutSelect.value;
        if (!selectedMeat || cutIndex === '') {
            donenessSelect.disabled = true;
            methodSelect.disabled = true;
            return;
        }

        selectedCutData = selectedMeat.cuts[parseInt(cutIndex)];

        document.getElementById('weightHint').textContent =
            `Poids typique: ${selectedCutData.typicalWeight.min}-${selectedCutData.typicalWeight.max} kg`;

        if (selectedCutData.typicalDimensions) {
            document.getElementById('thicknessHint').textContent =
                `Épaisseur typique: ~${selectedCutData.typicalDimensions.height} cm`;
        }

        donenessSelect.disabled = false;
        donenessSelect.innerHTML = selectedCutData.temperatures.map(temp =>
            `<option value="${temp.doneness}">${capitalizeFirst(temp.doneness)} (${temp.coreTemperature}°C)</option>`
        ).join('');

        methodSelect.disabled = false;
        methodSelect.innerHTML = selectedCutData.cookingMethods.map(m =>
            `<option value="${m.method}">${getMethodName(m.method)} (${m.temperatureRange.min}-${m.temperatureRange.max}°C)</option>`
        ).join('');

        // Mettre à jour le slider de température quand la méthode change
        updateTemperatureSlider();

        // Mettre à jour les champs contextuels selon le morceau sélectionné
        updateContextualFields();
    }

    form.onsubmit = async (e) => {
        e.preventDefault();
        await calculateCooking();
    };
}


async function calculateCooking() {
    const meatId = document.getElementById('meatSelect').value;
    const cutIndex = document.getElementById('cutSelect').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const thickness = calculatorMode === 'advanced' ? parseFloat(document.getElementById('thickness').value) : 5;
    const doneness = document.getElementById('doneness').value;
    const method = document.getElementById('method').value;
    const cookingTemperature = parseFloat(document.getElementById('cookingTemp').value);
    const initialTemp = calculatorMode === 'advanced' ? parseFloat(document.getElementById('initialTemp').value) : 20;
    const hasBoneEl = document.getElementById('hasBone');
    const hasBone = calculatorMode === 'advanced' && hasBoneEl ? hasBoneEl.value === 'true' : false;

    if (!meatId || cutIndex === '' || !selectedCutData) {
        alert('Veuillez sélectionner une viande et un morceau');
        return;
    }

    // Déterminer la sous-catégorie et l'index correct pour les viandes avec sous-catégories
    const subcategory = selectedCutData.subcategory || null;
    const actualCutIndex = selectedCutData.originalIndex !== undefined ? selectedCutData.originalIndex : parseInt(cutIndex);

    try {
        const response = await fetch(`${API_URL}/api/cooking/calculate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                meatId,
                subcategory,
                cutIndex: actualCutIndex,
                weight,
                thickness,
                doneness,
                method,
                cookingTemperature,
                initialTemp,
                hasBone
            })
        });

        const data = await response.json();

        if (data.error) {
            alert('Erreur: ' + data.error);
            return;
        }

        displayCalculationResult(data);
    } catch (error) {
        console.error('Erreur:', error);
        alert('Erreur lors du calcul');
    }
}

// Stocker les données de calcul pour les afficher sur les 2 écrans
let currentCalculationData = null;

function displayCalculationResult(data) {
    currentCalculationData = data;

    // Sauvegarder dans l'historique
    localStorage.setItem('cookingHistory', JSON.stringify([
        ...JSON.parse(localStorage.getItem('cookingHistory') || '[]').slice(-20), // Garder les 20 derniers
        {
            date: new Date().toISOString(),
            meat: data.meatName,
            cut: data.cutName,
            doneness: data.calculation.doneness,
            method: data.calculation.method,
            cookingTime: data.calculation.cookingTimeMinutes
        }
    ]));

    // Afficher le résumé
    showResultsSummary(data);
}

function showResultsSummary(data) {
    const result = data.calculation;
    const content = document.getElementById('resultsSummaryContent');

    const carryOverTemp = Math.round(result.targetTemperature + 3); // +3°C en moyenne

    content.innerHTML = `
        <div class="section result-hero">
            <div class="result-hero-icon">✅</div>
            <h2>Calcul Terminé !</h2>
            <p class="result-hero-subtitle">${data.meatName} - ${data.cutName}</p>
        </div>

        <div class="section result-main-card">
            <h3 style="text-align: center; margin-bottom: 20px;">Résultats Principaux</h3>
            <div class="result-main">
                <div class="result-item-highlight">
                    <div class="result-label">⏱️ Temps de cuisson</div>
                    <div class="result-value-large">${result.cookingTimeMinutes}</div>
                    <div class="result-unit">minutes</div>
                </div>

                <div class="result-item-highlight">
                    <div class="result-label">🌡️ Température cible</div>
                    <div class="result-value-large">${result.targetTemperature}</div>
                    <div class="result-unit">°C à cœur</div>
                </div>

                <div class="result-item-highlight">
                    <div class="result-label">🕐 Temps de repos</div>
                    <div class="result-value-large">${result.restingTimeMinutes}</div>
                    <div class="result-unit">minutes</div>
                </div>
            </div>
        </div>


        <div class="carryover-graph">
            <h3 style="margin-bottom: 15px;">📊 Évolution de la température (Carry-Over Effect)</h3>
            <div class="temp-chart">
                <div style="display: flex; justify-content: space-between; align-items: center; height: 100%; padding: 20px;">
                    <div style="text-align: center;">
                        <div class="temp-phase phase-cooking">
                            🔥 Cuisson<br>
                            ${result.cookingTimeMinutes} min<br>
                            → ${result.targetTemperature}°C
                        </div>
                    </div>
                    <div style="font-size: 2em; color: var(--text-secondary);">→</div>
                    <div style="text-align: center;">
                        <div class="temp-phase phase-resting">
                            🕐 Repos<br>
                            ${result.restingTimeMinutes} min<br>
                            +3°C → ${carryOverTemp}°C
                        </div>
                    </div>
                </div>
            </div>
            <p style="font-size: 0.9em; color: var(--text-secondary); margin-top: 12px;">
                💡 <strong>Effet carry-over :</strong> La température continue de monter de 3-5°C pendant le repos.
                Arrêtez la cuisson à ${result.targetTemperature}°C pour atteindre ${carryOverTemp}°C après repos.
            </p>
        </div>

        <div class="section">
            <h3>📊 Paramètres utilisés</h3>
            <div class="params-grid">
                <div class="param-item">
                    <span class="param-label">Cuisson:</span>
                    <span class="param-value">${capitalizeFirst(result.doneness)}</span>
                </div>
                <div class="param-item">
                    <span class="param-label">Méthode:</span>
                    <span class="param-value">${result.method}</span>
                </div>
                <div class="param-item">
                    <span class="param-label">Température four:</span>
                    <span class="param-value">${result.cookingTemperature}°C</span>
                </div>
            </div>
        </div>

        <div class="section cta-section">
            <button class="btn-primary btn-large" onclick="showResultsDetails()">
                📋 Voir les instructions détaillées
            </button>
        </div>

        <div class="section">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <button class="btn-primary" onclick="goToTimer(${result.cookingTimeMinutes})">
                    ⏱️ Lancer le minuteur
                </button>
                <button class="btn-primary" onclick="navigate('calculator')">
                    🔄 Nouveau calcul
                </button>
            </div>
        </div>
    `;

    navigate('resultsSummary');
}

function showResultsDetails() {
    if (!currentCalculationData) {
        alert('Aucun résultat disponible');
        return;
    }

    const data = currentCalculationData;
    const result = data.calculation;
    const cutData = data.cutData;
    const content = document.getElementById('resultsDetailsContent');

    const carryOverTemp = Math.round(result.targetTemperature + 3);

    content.innerHTML = `
        <div class="section">
            <h2>${data.meatName} - ${data.cutName}</h2>
            <p class="section-desc">Instructions complètes et détaillées pour une cuisson parfaite</p>
        </div>


        <div class="section result-section">
            <h3 style="color: white;">📊 Tous les paramètres</h3>
            <div class="details-grid">
                <div class="detail-row">
                    <span class="detail-label">⏱️ Temps de cuisson total:</span>
                    <span class="detail-value">${result.cookingTimeMinutes} minutes</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">🌡️ Température à cœur cible:</span>
                    <span class="detail-value">${result.targetTemperature}°C</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">📈 Après repos (carry-over):</span>
                    <span class="detail-value">${carryOverTemp}°C (+3°C)</span>
                </div>
                ${result.safetyTemperature ? `
                <div class="detail-row">
                    <span class="detail-label">✓ Température sécurité (EU):</span>
                    <span class="detail-value">${result.safetyTemperature}°C</span>
                </div>
                ` : ''}
                <div class="detail-row">
                    <span class="detail-label">🔥 Température de cuisson:</span>
                    <span class="detail-value">${result.cookingTemperature}°C</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">🕐 Temps de repos:</span>
                    <span class="detail-value">${result.restingTimeMinutes} minutes</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">📏 Niveau de cuisson:</span>
                    <span class="detail-value">${capitalizeFirst(result.doneness)}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">🍳 Méthode:</span>
                    <span class="detail-value">${result.method}</span>
                </div>
            </div>
        </div>

        <div class="section">
            <h3>📋 Instructions étape par étape</h3>
            <ol class="instructions-list-detailed">
                ${result.instructions.map((inst, idx) => `
                    <li class="instruction-item">
                        <span class="instruction-number">${idx + 1}</span>
                        <span class="instruction-text">${inst}</span>
                    </li>
                `).join('')}
            </ol>
        </div>

        ${cutData && cutData.recommendations ? `
            <div class="recommendation-box">
                <h3 style="color: white; margin-bottom: 10px;">💡 Recommandations du chef</h3>
                <p style="color: white;">${cutData.recommendations}</p>
            </div>
        ` : ''}

        <div class="section">
            <h3>⚠️ Points importants</h3>
            <ul class="tips-list-detailed">
                <li>Utilisez un thermomètre à viande pour une précision maximale</li>
                <li>Ne piquez jamais la viande pendant la cuisson pour conserver les jus</li>
                <li>Le temps de repos est crucial - la température continue de monter de 3-5°C (carry-over effect)</li>
                <li>Sortez la viande du réfrigérateur 30-45 minutes avant la cuisson pour un résultat optimal</li>
                <li>La température finale après repos sera d'environ ${carryOverTemp}°C</li>
            </ul>
        </div>

        <div class="section">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <button class="btn-primary" onclick="goToTimer(${result.cookingTimeMinutes})">
                    ⏱️ Lancer le minuteur
                </button>
                <button class="btn-primary" onclick="navigate('calculator')">
                    🔄 Nouveau calcul
                </button>
            </div>
        </div>
    `;

    navigate('resultsDetails');
}

// Minuteur
function loadTimer() {
    const content = document.getElementById('timerContent');

    content.innerHTML = `
        <div class="section">
            <h2>Minuteur de cuisson</h2>
            <p class="section-desc">Gérez vos temps de cuisson</p>
        </div>

        <div class="section">
            <div class="timer-display">
                <div id="timerMinutes" class="timer-value">00</div>
                <div class="timer-separator">:</div>
                <div id="timerSeconds" class="timer-value">00</div>
            </div>

            <div class="timer-controls">
                <button class="btn-primary" onclick="startTimer()">▶️ Démarrer</button>
                <button class="btn-primary" onclick="pauseTimer()">⏸️ Pause</button>
                <button class="btn-primary" onclick="resetTimer()">🔄 Réinitialiser</button>
            </div>

            <div class="form-group">
                <label for="timerInput">Définir le temps (minutes)</label>
                <input type="number" id="timerInput" min="1" value="10">
                <button class="btn-primary" onclick="setTimer()">Définir</button>
            </div>
        </div>
    `;
}

let timerInterval = null;
let timerSeconds = 0;
let timerRunning = false;

function goToTimer(minutes) {
    navigate('timer');
    setTimeout(() => {
        document.getElementById('timerInput').value = minutes;
        setTimer();
    }, 100);
}

function setTimer() {
    const minutes = parseInt(document.getElementById('timerInput').value);
    timerSeconds = minutes * 60;
    updateTimerDisplay();
}

function startTimer() {
    if (timerRunning) return;

    timerRunning = true;
    timerInterval = setInterval(() => {
        if (timerSeconds > 0) {
            timerSeconds--;
            updateTimerDisplay();
        } else {
            pauseTimer();
            alert('⏰ Temps écoulé! Vérifiez votre viande.');
        }
    }, 1000);
}

function pauseTimer() {
    timerRunning = false;
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function resetTimer() {
    pauseTimer();
    timerSeconds = 0;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;

    document.getElementById('timerMinutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('timerSeconds').textContent = String(seconds).padStart(2, '0');
}

// Profil
function loadProfile() {
    const cookingHistory = JSON.parse(localStorage.getItem('cookingHistory') || '[]');

    const content = document.getElementById('profileContent');
    content.innerHTML = `
        <div class="section">
            <h2>Mon Profil</h2>
            <p class="section-desc">Statistiques de cuisson</p>
        </div>

        <div class="section">
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-value">${cookingHistory.length}</div>
                    <div class="stat-label">Cuissons effectuées</div>
                </div>

                <div class="stat-card">
                    <div class="stat-value">${meatsData.length}</div>
                    <div class="stat-label">Viandes disponibles</div>
                </div>

                <div class="stat-card">
                    <div class="stat-value">${meatsData.reduce((sum, m) => sum + m.cuts.length, 0)}</div>
                    <div class="stat-label">Morceaux au catalogue</div>
                </div>
            </div>
        </div>

        ${cookingHistory.length > 0 ? `
            <div class="section">
                <h3>Historique récent</h3>
                <div style="max-height: 400px; overflow-y: auto;">
                    ${cookingHistory.slice(-10).reverse().map(entry => `
                        <div class="section" style="margin-bottom: 10px; padding: 15px;">
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <div>
                                    <strong>${entry.meat} - ${entry.cut}</strong><br>
                                    <small style="color: var(--text-secondary);">
                                        ${capitalizeFirst(entry.doneness)} • ${entry.method} • ${entry.cookingTime}min
                                    </small>
                                </div>
                                <small style="color: var(--text-muted);">
                                    ${new Date(entry.date).toLocaleDateString('fr-FR')}
                                </small>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : ''}

        <div class="section">
            <h3>Préférences</h3>
            <p style="color: var(--text-secondary);">Fonctionnalité de modification du profil à venir</p>
        </div>
    `;
}

// Utilitaires
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getMethodIcon(method) {
    const icons = {
        'poele': '🍳',
        'four': '🔥',
        'four_traditionnel': '🔥',
        'four_chaleur_tournante': '🌀',
        'grill': '🔥',
        'barbecue': '🍖',
        'barbecue_charbon': '🍖',
        'barbecue_gaz': '🍖',
        'sous_vide': '🌡️',
        'plancha': '🍳',
        'mijoteuse': '🍲',
        'braisage': '🍲',
        'rotissoire': '🔄'
    };
    return icons[method] || '🍳';
}

function getMethodName(method) {
    const names = {
        'poele': 'Poêle',
        'grill': 'Grill',
        'four_traditionnel': 'Four traditionnel',
        'four_chaleur_tournante': 'Four chaleur tournante',
        'sous_vide': 'Sous-vide',
        'barbecue_charbon': 'Barbecue charbon',
        'barbecue_gaz': 'Barbecue gaz',
        'plancha': 'Plancha',
        'mijoteuse': 'Mijoteuse',
        'braisage': 'Braisage',
        'rotissoire': 'Rôtissoire'
    };
    return names[method] || method.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}
