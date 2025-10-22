import express from "express";
import fs from "fs";
import bodyParser from "body-parser";
import cors from "cors";
import { fileURLToPath } from 'url';

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Use the existing users.json file in the frontend directory

const FILE_PATH = fileURLToPath(new URL('./users.json', import.meta.url));
// 🔹 SIGNUP ROUTE
app.post("/signup", (req, res) => {
  const { fullName, email, password, confirmPassword } = req.body;

  // 1. Validation
  if (!fullName || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: "All fields are required" });
  }
  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  // 2. Read existing users
  const users = JSON.parse(fs.readFileSync(FILE_PATH));

  // 3. Check if email already exists
  const userExists = users.find((user) => user.email === email);
  if (userExists) {
    return res.status(400).json({ message: "Email already registered" });
  }

  // 4. Store new user
  users.push({ fullName, email, password });
  fs.writeFileSync(FILE_PATH, JSON.stringify(users, null, 2));

  res.status(200).json({ message: "Signup successful" });
});

// 🔹 LOGIN ROUTE
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // 1. Validation
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" });
  }

  // 2. Read users
  const users = JSON.parse(fs.readFileSync(FILE_PATH));

  // 3. Find user
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  // ✅ Corrected line — use backticks properly
  res.status(200).json({ message:` Welcome ${user.fullName}! Login successful.` });
});

// Server start
app.listen(5000, '0.0.0.0', (err) => {
  if (err) {
    console.error('❌ Error starting server:', err);
    return;
  }
  console.log("✅ Server running on http://localhost:5000");
});