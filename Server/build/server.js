"use strict";
const express = require('express');
const app = express();
const { json } = require('express');
app.get('/ads', (request, response) => {
    return response.json('acessou ads');
});
app.listen(3333);
