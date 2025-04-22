import express from "express";
import routes from "./routes"
import 'dotenv/config'
import { gerenciadorErros } from "./middlewares/gerenciadorErros";

const port = process.env.PORT ?? 5000

const app = express();

app.use(express.json());
express.urlencoded(); // { extended: true }

// app.use(gerenciadorErros);

app.use(routes);

const server = app.listen(port, () => console.log(`Servidor escutando a porta ${port}`));