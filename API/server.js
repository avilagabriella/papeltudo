//Dependências - Frameworks
const express = require("express");
const cors = require("cors");
const router = require("./src/router");

//Configurações de saída - FrontEnd
const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

//Teste e porta no console
app.listen(3000, () => {
    console.log("API respondendo na porta 3000");
});