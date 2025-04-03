const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 5300;
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


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



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});