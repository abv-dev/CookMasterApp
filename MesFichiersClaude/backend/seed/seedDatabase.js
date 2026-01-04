const mongoose = require('mongoose');
const Meat = require('../models/Meat');
const meatData = require('./meatData');
require('dotenv').config();

/**
 * Script pour remplir la base de données avec les données de viandes
 */

const seedDatabase = async () => {
  try {
    // Connexion à MongoDB
    console.log('📡 Connexion à MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/meat-cooking', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✓ Connecté à MongoDB');

    // Supprimer toutes les viandes existantes
    console.log('\n🗑️  Suppression des données existantes...');
    await Meat.deleteMany({});
    console.log('✓ Données existantes supprimées');

    // Insérer les nouvelles données
    console.log('\n📝 Insertion des nouvelles données...');
    const insertedMeats = await Meat.insertMany(meatData);
    console.log(`✓ ${insertedMeats.length} catégories de viandes insérées`);

    // Afficher un résumé
    console.log('\n📊 Résumé des données insérées:');
    for (const meat of insertedMeats) {
      console.log(`\n  ${meat.name} (${meat.category}):`);
      console.log(`    - ${meat.cuts.length} morceaux`);

      let totalMethods = 0;
      meat.cuts.forEach(cut => {
        totalMethods += cut.cookingMethods.length;
      });
      console.log(`    - ${totalMethods} méthodes de cuisson au total`);
    }

    console.log('\n✅ Base de données remplie avec succès!');

  } catch (error) {
    console.error('\n❌ Erreur lors du remplissage de la base de données:', error);
  } finally {
    // Fermer la connexion
    await mongoose.connection.close();
    console.log('\n🔌 Connexion fermée');
  }
};

// Exécuter le script
seedDatabase();
