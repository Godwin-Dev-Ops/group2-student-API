const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// STUDENTS DATA
let students = [
  {
    id: "001",
    firstName: "Daniel",
    lastName: "Owens",
    email: "daniel.owens@example.com",
    age: 22,
    gender: "Male",
    course: "Computer Science",
    enrollmentDate: "2023-09-04",
  },
  {
    id: "002",
    firstName: "Sophia",
    lastName: "Martins",
    email: "sophia.martins@example.com",
    age: 20,
    gender: "Female",
    course: "Information Technology",
    enrollmentDate: "2024-01-15",
  },
  {
    id: "003",
    firstName: "Michael",
    lastName: "Turner",
    email: "michael.turner@example.com",
    age: 23,
    gender: "Male",
    course: "Software Engineering",
    enrollmentDate: "2022-09-10",
  },
  {
    id: "004",
    firstName: "Aisha",
    lastName: "Khan",
    email: "aisha.khan@example.com",
    age: 21,
    gender: "Female",
    course: "Computer Engineering",
    enrollmentDate: "2023-02-20",
  },
  {
    id: "005",
    firstName: "Lucas",
    lastName: "Reed",
    email: "lucas.reed@example.com",
    age: 24,
    gender: "Male",
    course: "Information Systems",
    enrollmentDate: "2021-10-05",
  },
  {
    id: "006",
    firstName: "Emily",
    lastName: "Carter",
    email: "emily.carter@example.com",
    age: 19,
    gender: "Female",
    course: "Data Science",
    enrollmentDate: "2024-09-01",
  },
];

// ROOT TEST ROUTE
app.get("/", (req, res) => {
  res.send("Student API is running");
});

// 1️⃣ GET: All students
app.get("/api/students", (req, res) => {
  res.status(200).json(students);
});

// 2️⃣ POST: Add new student
app.post("/api/students", (req, res) => {
  const {
    firstName,
    lastName,
    email,
    age,
    gender,
    course,
    enrollmentDate,
  } = req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !age ||
    !gender ||
    !course ||
    !enrollmentDate
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newStudent = {
    id: String(students.length + 1).padStart(3, "0"),
    firstName,
    lastName,
    email,
    age,
    gender,
    course,
    enrollmentDate,
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});

// 3️⃣ PUT: Update student
app.put("/api/students/:id", (req, res) => {
  const { id } = req.params;
  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  students[index] = { ...students[index], ...req.body, id };
  res.status(200).json(students[index]);
});

// 4️⃣ DELETE: Remove student
app.delete("/api/students/:id", (req, res) => {
  const { id } = req.params;
  const initialLength = students.length;

  students = students.filter((s) => s.id !== id);

  if (students.length === initialLength) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.status(200).json({ message: `Student ${id} deleted successfully` });
});

// START SERVER
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
