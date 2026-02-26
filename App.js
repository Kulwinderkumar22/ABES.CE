const express = require('express');
const app = express();

// Middleware (VERY IMPORTANT)
app.use(express.json());  //backend aur json ko connection filter krna

// Fake Database (Array)
let students = [
    {
        id: 1,
        name: "Deepak",
        class: "BTech"
    },
    {
        id: 2,
        name: "Rahul",
        class: "MTech"
    }
];

//////////////////////////////////////////////////////////
// READ ALL
app.get('/read', (req, res) => {
    try {
        res.status(200).json({
            message: "All students data",
            data: students
        });
    } catch (err) {
        res.status(500).json({
            message: "Error fetching data",
            error: err.message
        });
    }
});

//////////////////////////////////////////////////////////
// READ BY ID
app.get('/read/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const student = students.find(s => s.id === id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json({
            message: "Student found",
            data: student
        });

    } catch (err) {
        res.status(500).json({
            message: "Error fetching student",
            error: err.message
        });
    }
});

//////////////////////////////////////////////////////////
// ADD NEW STUDENT
app.post('/add', (req, res) => {
    try {
        const newStudent = {
            id: Date.now(),   // better unique id
            ...req.body
        };

        students.push(newStudent);

        res.status(201).json({
            message: "Student added successfully",
            data: newStudent
        });

    } catch (err) {
        res.status(500).json({
            message: "Error adding student",
            error: err.message
        });
    }
});

//////////////////////////////////////////////////////////
// UPDATE STUDENT
app.put('/update/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const index = students.findIndex(s => s.id === id);

        if (index === -1) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        students[index] = {
            ...students[index],
            ...req.body
        };

        res.status(200).json({
            message: "Student updated successfully",
            data: students[index]
        });

    } catch (err) {
        res.status(500).json({
            message: "Error updating student",
            error: err.message
        });
    }
});

//////////////////////////////////////////////////////////
// DELETE STUDENT
app.delete('/delete/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const studentExists = students.some(s => s.id === id);

        if (!studentExists) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        students = students.filter(s => s.id !== id);

        res.status(200).json({
            message: "Student deleted successfully"
        });

    } catch (err) {
        res.status(500).json({
            message: "Error deleting student",
            error: err.message
        });
    }
});

//////////////////////////////////////////////////////////

app.listen(3000, () => {
    console.log(`Server running`);
});