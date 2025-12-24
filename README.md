# Student Management API

A simple RESTful Student Management API built with Node.js and Express.  
This API allows you to create, read, update, and delete (CRUD) student records using an in-memory data store.

## Features

- Express.js server
- Environment variables with dotenv
- CORS enabled
- JSON request body parsing
- Full CRUD operations for students
- Input validation and error handling
- Health check endpoint

## Technologies Used

- Node.js
- Express.js
- dotenv
- cors

## Project Setup

1. Clone the repository
   git clone <your-repo-url>
   cd <project-folder>

2. Install dependencies
   npm init -y
   npm install express
   npm i --save-dev nodemon
   npm install dotenv
   npm install cors

3. Create a .env file
   PORT=Use Any Port of Your Choice

4. Start the server
   node server.js
   Or (if using nodemon):
   nodemon index.js


## API Endpoints

## Get all students

GET /api/students

## Response

{
"count": 6,
"students": [ ... ]
}

## Get a student by ID

GET /api/students/:id e.g /api/students/001

## Success Response

{
"id": "001",
"firstName": "Daniel",
"lastName": "Owens",
"email": "daniel.owens@example.com",
"age": 22,
"gender": "Male",
"course": "Computer Science",
"enrollmentDate": "2023-09-04"
}

## Error Response

{
"message": "Student not found"
}

## Add a new student

POST /api/students

## Request Body

{
"firstName": "John",
"lastName": "Doe",
"email": "john.doe@example.com",
"age": 21,
"gender": "Male",
"course": "Cyber Security",
"enrollmentDate": "2024-05-10"
}

## Success Response

{
"id": "007",
"firstName": "John",
"lastName": "Doe",
"email": "john.doe@example.com",
"age": 21,
"gender": "Male",
"course": "Cyber Security",
"enrollmentDate": "2024-05-10"
}

## Update a student

PATCH /api/students/:id

## Request Body

{
"age": 25,
"course": "Artificial Intelligence"
}

## Success Response

{
"id": "003",
"firstName": "Michael",
"lastName": "Turner",
"email": "michael.turner@example.com",
"age": 25,
"gender": "Male",
"course": "Artificial Intelligence",
"enrollmentDate": "2022-09-10"
}

## Delete a student

DELETE /api/students/:id

## Response

{
"message": "Student 003 deleted successfully"
}

## Validation Rules

-All fields are required when creating a student
-Email must be valid
-Duplicate emails are not allowed
-Student ID must exist for update and delete operations

## Notes

-Data is stored in-memory (resets when the server restarts)
-Suitable for learning and testing REST APIs
-Can be extended with a database (MongoDB, PostgreSQL, etc.)

