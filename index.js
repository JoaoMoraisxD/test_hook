const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.post('/', (req, res) => {

    const response = req.body['hub.challenge']
    res.json({ value: response});
});

app.listen(port, () => {
console.log(`API de destino rodando em httplocalhost:${port}`);
});