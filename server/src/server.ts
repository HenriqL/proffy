import express from 'express';

const app = express();

app.use(express.json());

app.post('/users', (request, response) => {
    console.log(request.body);
    const users = [
        {name : 'Henrique', age: 27}
    ];

    return response.json(users);
});

//Porta localhost:3333
app.listen(3333);