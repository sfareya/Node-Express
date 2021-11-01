const express = require('express')

const app = express()



app.get('/students', (req, res) => {
    console.log('I GET it haha')
    res.send('<h1>hello world</h1>')
} )

app.post('/students', function (req, res) {
    var data = req.body;
    
    console.log("Name: ", data.name);
    console.log("Age: ", data.age);
    console.log("Gender: ", data.gender);
    res.send();
  });


const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
