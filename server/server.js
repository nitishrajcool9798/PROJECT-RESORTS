require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

const Contact = require('./models/Contact');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

// API Routes
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        const newContact = new Contact({ name, email, phone, message });
        await newContact.save();
        res.status(201).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

app.get('/', (req, res) => {
    res.send('API is running...');
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;
