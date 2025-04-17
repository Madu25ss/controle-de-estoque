import express from "express";
import routes from "./routes"

const app = express();

app.use(routes);

const server = app.listen(5000, () => console.log('Servidor escutando a porta 5000'));