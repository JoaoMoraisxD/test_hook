const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.get('/', (req, res) => {

    const response = req.data['hub.challenge']
    res.json({ value: response});
});

app.listen(port, () => {
console.log(`API de destino rodando em httplocalhost:${port}`);
});