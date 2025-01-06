const rateLimit = require('express-rate-limit');

// Create the rate limiter middleware
const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 50, // Allow a maximum of 100 requests per minute from the same IP
    message: "Too many requests, please try again later.",
});

module.exports = limiter;
