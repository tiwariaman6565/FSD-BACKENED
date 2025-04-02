
const express = require('express');
const fs = require('fs');

const app = express();
let users = [
];
app.use(express.json());

const readData = () =>{
    users = fs.readFileSync('./data.json','utf-8');
}

const writeData = () =>{
    fs.writeFile('./data.json',JSON.stringify(users,null,2));
}
readData();

app.get('/getdata',async (req,res) =>{    
    res.json(users);
})


app.post('/users',(req,res) =>{ 
    readData();
    const data = req.body;
    const newid = users.length>0 ? users[users.length-1].id+1:1;
    data.id = newid;
    users.push(data);
    writeData();
    res.status(200).json({message:'Data Received',data:data});
})

app.listen(9000,()=>{
    console.log("Server is running on port 9000");
})