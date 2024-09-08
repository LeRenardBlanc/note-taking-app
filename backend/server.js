import express, { json } from 'express';
import { config } from 'dotenv';

// Initialisation du serveur
config();
const app = express();
app.use(json());

// Port
const PORT = process.env.PORT || 5000;

// Route par défaut pour vérifier si l'API fonctionne
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
