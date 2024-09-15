require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const tradeRoutes = require('./routes/tradeRoutes');
const cargoRoutes = require('./routes/cargoRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes

app.get('/', (req, res) =>{
    res.send('All Good With API');
});

app.get('/test', (req, res) => {
    res.json({ message: 'Test route is working!' });
  });

  
app.use('/api/trades', tradeRoutes);
app.use('/api/cargo', cargoRoutes);
app.use('/api/inventory', inventoryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));