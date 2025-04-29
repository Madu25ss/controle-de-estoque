import express from "express";
import routes from "./routes";
import "dotenv/config";
import { gerenciadorErros } from "./middlewares/gerenciadorErros";
import cors from "cors";

const port = process.env.PORT ?? 5000;

const app = express();

app.use(express.json());
express.urlencoded(); // { extended: true }
// app.use(() => configCors(port, false));

const whitelist = new Set([
  `http://localhost:${port}`,
  `http://localhost:5173`,
]);

const corsOptions = {
  origin: (origin, callback) => {
    if (origin === undefined || whitelist.has(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
  credentials: true,
};

app.options("/api", cors(corsOptions));
app.use(cors(corsOptions));
app.use(routes);

app.use(gerenciadorErros);

const server = app.listen(port, () =>
  console.log(`Servidor escutando a porta ${port}`)
);
