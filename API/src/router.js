//Dependências - Frameworks
const express = require("express");
const router = express.Router();

const item = require("./controllers/cliente");

//Rota de teste
const teste = (req, res) => {
    res.json("Back-end, API Papelaria respondendo!");
}

//Rotas de Saída - Clientes
router.get("/", teste);
router.post("/inventario", item.create);
router.get("/inventario", item.read);
router.put("/inventario/:id", item.update);
router.delete("/inventario/:id", item.del);

module.exports = router;