const fs = require('fs');

const students = [
    {
        name: "John Doe",
        roll_no: "101",
        class: "10",
        section: "A"
    },
    {
        name: "Jane Smith",
        roll_no: "102",
        class: "10",
        section: "A"
    }
];

fs.writeFile('students.json', JSON.stringify(students, null, 2), (err) => {
    if (err) {
        console.error('Error writing to file', err);
    } else {
        console.log('students.json has been created successfully!');
    }
});
