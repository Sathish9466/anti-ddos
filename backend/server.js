const express = require('express');
const rateLimiter = require('./middleware/rateLimiter');
const ipBlocker = require('./ipBlocker');
const cors = require("cors")

const app = express();
const PORT = 3000;
const corsOptions = {
    origin: 'https://anti-ddos-frontend.onrender.com', // Allow only your frontend
    methods: ['GET', 'POST', 'OPTIONS'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
};

app.use(cors(corsOptions));
app.use(rateLimiter);  // Apply rate limiter globally
app.use(ipBlocker);    // Apply IP blocking middleware globally

// Sample route
app.get('/', (req, res) => {
    res.send('Hello, this is a simple Anti-DDoS protected page!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
