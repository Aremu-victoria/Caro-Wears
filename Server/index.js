const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const port = process.env.PORT || 5300;
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const URI = process.env.uri || undefined;


mongoose
.connect(URI)
.then(() => {
    console.log("Database connected successfully");
})
.catch((err) => {
    console.log("Database connection error:", err);
});



let allCountry = [
    {
        name: 'USA',
        capital: 'Washington D.C.', 
        population: 331000000,
        area: 9833517,
        language: 'English',
        currency: 'USD',
        region: 'Americas',
        },
    {
        name: 'Canada',
        capital: 'Ottawa',
        population: 37742154,
        area: 9984670,
        language: 'English',
        currency: 'CAD',
        region: 'Americas',
        },
]
app.get('/test', (req, res) => {
    res.send(allCountry); 
});


app.post('/submit',(req,res) =>{
console.log(req.body);
if(req.body){
    res.status(201).json({message:'form submitted successfully'})
}else{
    res.status(401).json({message:'form not submitted'})
}
}
)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});