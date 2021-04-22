import express from "express";

import "./database";
import { routes } from "./routes";

const app = express();

/**
 * GET = Busca
 * Post = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação especifica
 * Exemplo:
 * app.get("/", (req, res) => {
 *   return res.json({
 *       message: "Bem vindo ao NLW!"
 *   });
 *   });
 * 
 *   app.post("/users", (req, res) => {
 *       return res.json({
 *           message: "Usuário salvo com sucesso!"
 *       });
 *   });
 *
 */
app.use(express.json());

app.use(routes);

app.listen(3333, () => console.log("Server is running"));