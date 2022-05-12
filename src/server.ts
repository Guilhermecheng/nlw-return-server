import express from "express";
import cors from 'cors';
import { routes } from "./routes";

const app = express();

// GET = Buscar informações
// POST = cadastrar informações
// PUT = atualizar informações de uma entidade
// PATCH = Atualizar informação única de uma entidade
// DELETE = deletar uma informação

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log('HTTP server running!');
})