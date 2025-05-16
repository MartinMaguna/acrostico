import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import verseRoutes from './routes/verses.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/verses', verseRoutes);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
})
.catch(error => console.error(error));




//Codigo Alternativo
// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import Verse from './models/Verse.js';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middlewares
// app.use(cors());
// app.use(express.json());

// // Conexión a MongoDB Atlas
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log("✅ Conectado a MongoDB Atlas"))
// .catch(err => console.error("❌ Error al conectar a MongoDB:", err));

// // Rutas de la API
// app.post('/api/verses', async (req, res) => {
//   try {
//     const newVerse = new Verse({ text: req.body.text });
//     await newVerse.save();
//     res.status(201).json(newVerse);
//   } catch (err) {
//     res.status(500).json({ message: 'Error al guardar el verso' });
//   }
// });

// app.get('/api/verses', async (req, res) => {
//   try {
//     const verses = await Verse.find().sort({ createdAt: -1 });
//     res.json(verses);
//   } catch (err) {
//     res.status(500).json({ message: 'Error al obtener los versos' });
//   }
// });

// // Servidor
// app.listen(PORT, () => {
//   console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
// });
