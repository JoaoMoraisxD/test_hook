const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 12345;

// Carregar o certificado SSL e a chave privada
const options = {
    cert: fs.readFileSync('/etc/letsencrypt/live/unicocontato.tech/fullchain.pem'),
    key: fs.readFileSync('/etc/letsencrypt/live/unicocontato.tech/privkey.pem')
};

app.use(express.json());

app.get('/webhook', (req, res) => {
    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];

    // Verifique o token e valide a solicitação

    res.status(200).send(challenge);
    console.log(req.query)

});

app.post('/', (req, res) => {
    const response = req.body['hub.challenge'];
    res.json({ value: response });
});

https.createServer(options, app).listen(port, () => {
    console.log(`API de destino rodando em https://localhost:${port}`);
});
