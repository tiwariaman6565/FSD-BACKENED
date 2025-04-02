const express = require('express')

const app = express();
let users = [
    {id: 1, name: 'John', age: 25},
    {id: 2, name: 'Alice', age: 30},
    {id: 3, name: 'Bob', age: 28}
 
];
app.get('/api/users', (req, res) => {
    res.json(users);
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users', (req, res) => {
    res.send('Hello, World!');
});
app.post('/users',(req,res)=>{
    const data = req.body;
    res.status(200).json({message: 'Data received', data:data});
})
app.listen(9000, (req, res) => {
    console.log('Server is running on http://localhost:9000');
})