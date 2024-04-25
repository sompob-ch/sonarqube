const express = require('express');
const addNumbers = require('./logic/add-number');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/add-number', (req, res) => {
    console.log(req.body);  // แสดงข้อมูลที่ส่งมาใน request body
    const { num1, num2 } = req.body;
    const result = addNumbers(num1, num2);
    const response = {
        num1, num2, result
    }
    res.status(200).send(response);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
