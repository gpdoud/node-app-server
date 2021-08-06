const express = require('express')();

express.use(express.router);

express.get('/api/users/:id', (req, res, next) => {
    res.json({
        id: req.params['id'],
        path: req.params[0]
    });
});

express.listen(3001);