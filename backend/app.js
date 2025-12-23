require("dotenv").config();
const express = require('express');
const morgan = require('morgan');
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();
const port = process.env.PORT || 3000;

// Connect to database
connectDB();

// Middlewares
app.use(morgan('dev'));

app.use(cors({
   origin: ['http://localhost:5173', 'http://localhost:3000'], // Both ports
  credentials: true,
  optionsSuccessStatus: 200
}));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/api/auth", authRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

module.exports = app;
