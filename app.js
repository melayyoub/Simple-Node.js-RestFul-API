const http = require('http');
const express = require('express');
const app = express();
const error = require('http-errors');
const Joi = require('joi'); // Class of Joi 

const numbers =[
        {
        id: 1,
        name: 'one',
        },
        {
        id: 2,
        name: 'two',
        },
        {
        id: 3,
        name: 'three',
        }
];
// use json in body or all requests as middle
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Node Rest Express Example');
});

//  different path 
app.get('/api/numbers', (req, res) => {
    res.send(numbers);
});

//  /api/numbers/
app.get('/api/numbers/:id', (req, res) => {
    let num = numbers.find(c => c.id === parseInt(req.params.id));
    if (!num)
        // 404 status
        res.status(404).send('Not found');
    res.send(num);
});

// app.post();

app.post('/api/numbers', (req, res) => {
    //  400 bad request in case of empty or less than 3 name without external packages 
    // if (!req.body.name || req.body.name.length <= 3 ) {
    //     res.status(400).send('Name is required Min 4 Char');
    //     return;
    // }

    //  or use Joi package, first start with schema
    // const schema = {
    //     name: Joi.string().min(4).required()
    // }

    
    // validate using our validation function with Joi
    // const results = validateNumber(req.body);
    //  now send error results to screen
    // if (results.error ) {
    //     res.status(400).send(results.error.message);
    //     return;
    // }
    // instead lets use object distructure
    const { error } = validateNumber(req.body)
    if (error ) {
        res.status(400).send(error.details[0].message);
        return;
    }

    // our numbers schema to get from the input
    const number = {
        id: numbers.length + 1,
        name: req.body.name
    };
    numbers.push(number);
    res.send(number);
});

// app.put();
app.put('/api/numbers/:id', (req, res) =>{

    // look up the course
        const num = numbers.find(c => parseInt(req.params.id) === c.id);

     // if not exist return 404
        if(!num) res.status(404).send('Not found');
    // validate using our validation function with Joi
        const { error } = validateNumber(req.body)
        if (error ) {
            res.status(400).send(error.details[0].message);
            return;
        }

    // update Number

        num.name = req.body.name;
        
    // return the number after updating

        res.send(num);
});

// app.delete();
app.delete('/api/numbers/:id', (req, res) =>{

    // look up the course
        const num = numbers.find(c => parseInt(req.params.id) === c.id);

     // if not exist return 404
        if(!num) res.status(404).send('Not found');
    // validate using our validation function with Joi using the distructure
        const { error } = validateNumber(req.body)
        if (error ) {
            res.status(400).send(error.details[0].message);
            return;
        }

    // Delete Number
        const index = numbers.indexOf(num);
        numbers.slice(index, 1);
        
    // return the number after delete with successfull message
        res.send(index + ' number deleted successfully!');
});


//  validate using Joi
function validateNumber(num) {
     
    const schema = {
        name: Joi.string().min(4).required()
    }

    // inValide return 400 bad request
    return Joi.validate(num, schema);

}
// port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Working on port ${port}`));