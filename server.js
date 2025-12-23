const students = [
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


// 4. PUT: Edit an existing student
app.put('/api/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        const error = new Error('Student not found');
        error.status = 404;
        throw error;
    }

    // Update the student data
    students[index] = { ...students[index], ...req.body, id }; // Ensure ID stays the same
    res.status(200).json(students[index]);
});

// 5. DELETE: Remove a student
app.delete('/api/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const initialLength = students.length;
    students = students.filter(s => s.id !== id);

    if (students.length === initialLength) {
        const error = new Error('Student not found');
        error.status = 404;
        throw error;
    }

    res.status(200).json({ message: `Student with ID ${id} deleted successfully.` });
});