const express = require('express');
const api_helper = require('./api_helper');
const app = express();
const port = 3000;

app.get('/api/users', (req, res) => {
    api_helper.make_API_call('http://localhost:5000/api/users')
        .then(resp => res.json(resp))
        .catch(err => res.send(err));
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
})