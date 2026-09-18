import express from "express";
import cors from "cors";

const app = express();
const port = 3002;

app.use(cors());
app.use(express.json());

const users = [
  {
    id: 1,
    name: "Aniket",
    email: "aniket@example.com",
  },
];

let nextId = users.length + 1;

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.status(200).json(users);
});

userRouter.get("/:id", (req, res) => {
  const user = users.find((item) => item.id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});

userRouter.post("/", (req, res) => {
  const { name, email } = req.body;

  if (!name?.trim() || !email?.trim()) {
    return res.status(400).json({ message: "Name and email are required" });
  }

  const newUser = {
    id: nextId++,
    name: name.trim(),
    email: email.trim(),
  };

  users.push(newUser);
  res.status(201).json({ message: "User created", user: newUser });
});

userRouter.put("/:id", (req, res) => {
  const { name, email } = req.body;
  const id = Number(req.params.id);
  const userIndex = users.findIndex((item) => item.id === id);

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  if (!name?.trim() || !email?.trim()) {
    return res.status(400).json({ message: "Name and email are required" });
  }

  users[userIndex] = {
    ...users[userIndex],
    name: name.trim(),
    email: email.trim(),
  };

  res.status(200).json({ message: "User updated", user: users[userIndex] });
});

userRouter.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const userIndex = users.findIndex((item) => item.id === id);

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(userIndex, 1);
  res.status(200).json({ message: "User deleted" });
});

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Express server is running" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});