const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  preferences: {
    temperatureUnit: {
      type: String,
      enum: ['celsius', 'fahrenheit'],
      default: 'celsius'
    },
    weightUnit: {
      type: String,
      enum: ['kg', 'lbs'],
      default: 'kg'
    },
    dimensionUnit: {
      type: String,
      enum: ['cm', 'inches'],
      default: 'cm'
    },
    defaultDoneness: {
      type: String,
      enum: ['bleu', 'saignant', 'à point', 'bien cuit'],
      default: 'à point'
    },
    enableNotifications: {
      type: Boolean,
      default: true
    },
    timerSound: {
      type: String,
      default: 'default'
    }
  },
  favoriteRecipes: [{
    meatId: mongoose.Schema.Types.ObjectId,
    cutName: String,
    cookingMethod: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Hash password avant de sauvegarder
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Méthode pour comparer les mots de passe
UserSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);
