let students = [
    { id: 1, name: "John" },
    { id: 2, name: "Alice" }
];

exports.getStudents = (req, res) => {
    res.json(students);
};

exports.addStudent = (req, res) => {

    const { name } = req.body;

    if (!name) {
        throw new Error("Student name is required");
    }

    const student = {
        id: students.length + 1,
        name
    };

    students.push(student);

    res.status(201).json(student);
};

exports.getError = (req, res) => {
    throw new Error("This is a test error");
};