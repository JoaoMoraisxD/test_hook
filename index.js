const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 4000;

// Carregar o certificado SSL e a chave privada
const options = {
    cert: fs.readFileSync('/etc/ssl/certs/ca-certificates.crt'),
    key: fs.readFileSync('/etc/ssl/private/ssl-cert-snakeoil.key')
};

app.use(express.json());

app.post('/', (req, res) => {
    const response = req.body['hub.challenge'];
    res.json({ value: response });
});

https.createServer(options, app).listen(port, () => {
    console.log(`API de destino rodando em https://localhost:${port}`);
});
