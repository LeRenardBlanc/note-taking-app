import express, { json } from 'express';
import { connect } from 'mongoose';
import { config } from 'dotenv';
import noteRoutes from './routes/noteRoutes';
import abbrRoutes from './routes/abbrRoutes';

config();
const app = express();
app.use(json());

// Connexion à MongoDB
connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes API
app.use('/api/notes', noteRoutes);
app.use('/api/abbreviations', abbrRoutes);

// Port et démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
