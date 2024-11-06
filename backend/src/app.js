const app = require('express')();
const cors = require('cors');

// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:5000');
//     res.header('Access-Control-Allow-Methods', '*');
//     res.header('Access-Control-Allow-Headers', 'Authorization, x-type-request');
//     res.header('Access-Control-Allow-Credentials', true);
//     next();
// });

app.use(cors({
    origin: 'http://localhost:5000',
    credentials: true,
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Authorization, x-type-request',
}));

app.get('/users', (req, res) => {
    res.cookie('name', 'Jhonne', {
        httpOnly: true,
        maxAge: 10000,
    });
    return res.status(200).json("users");
});

app.listen(3000);