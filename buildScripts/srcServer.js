// ES6 style importing
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
var app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'))
});

// Hardcoded for simplicity
app.get('/projects', function (req, res) {
    res.json([{
            "name": "Compose",
            "description": "A framework for quickly creating Facebook Messenger chatbots."
        },
        {
            "name": "Bartbot",
            "description": "A chatbot that returns live BART schedules and more!"
        }
    ]);
});

// app.get('/projects', function (req, res) {
//     // Hardcode for simplicity
//     res.json();
// });

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});