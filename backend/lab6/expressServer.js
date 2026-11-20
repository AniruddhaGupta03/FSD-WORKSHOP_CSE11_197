import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./db.js";
import Student from "./modals/student.js";

dotenv.config();
await connectDb();

const app = express();
const port = 3002;

app.use(cors());
app.use(express.json());

// Users data
const users = [
  {
    id: 1,
    name: "Aniruddha",
    email: "aniruddha@example.com"
  }
];

// Home route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Express server is running"
  });
});

// GET all users
app.get("/users", (req, res) => {
  res.status(200).json({
    message: "Data received",
    userData: users
  });
});

// GET user by ID
app.get("/user/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  res.status(200).json({
    message: "Data received",
    user: user
  });
});

// POST - Create user
app.post("/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: "Name and email are required"
    });
  }

  const newUser = {
    id: users.length + 1,
    name: name,
    email: email
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created successfully",
    user: newUser
  });
});

// PUT - Update user
app.put("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const { name, email } = req.body;

  const userIndex = users.findIndex((u) => u.id === id);

  if (userIndex === -1) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  if (!name || !email) {
    return res.status(400).json({
      message: "Name and email are required"
    });
  }

  users[userIndex] = {
    id: id,
    name: name,
    email: email
  };

  res.status(200).json({
    message: "User updated successfully",
    user: users[userIndex]
  });
});

// DELETE - Delete user
app.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const userIndex = users.findIndex((u) => u.id === id);

  if (userIndex === -1) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  users.splice(userIndex, 1);

  res.status(200).json({
    message: "User deleted successfully"
  });
});

app.post("/test-db", async (req, res) => {
  try {
    const student = await Student.create({
      name: "Aniruddha",
      email: "aniruddha@example.com",
      course: "Computer Science"
    });
    res.status(201).json({
      message: "Data inserted successfully",
      student: student
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating student",
      error: error.message
    });
  }
});
app.get("/test-db", async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json({
      message: "Data retrieved successfully",
      students: students
    });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving students",
      error: error.message
    });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
