
// installation du package
// npm install jsonwebtoken


// imporatation du package
const jwt = require('jsonwebtoken');

// Clé secrète pour signer le token
const secretKey = 'your-256-bit-secret';

// Données à inclure dans le payload
const payload = {
    user_id: '1234567890',
    user_name: 'John Doe',
};

// Options pour le token
const options = {
  expiresIn: '1h' // Expire dans 1 heure
};

// Création du token
const token = jwt.sign(payload, secretKey, options);

console.log('Token:', token);




// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
