import postgres from "postgres";
import 'dotenv/config';

// const user = process.env.DB_USER;
// const pwd = encodeURIComponent(process.env.DB_PWD) // vira 'minha%40senha'
// const ip = process.env.DB_IP
// const sql = postgres(`postgres://${user}:${pwd}@${ip}:5432/estoque`);

const sql = postgres({
  host: process.env.DB_IP,
  port: 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PWD+'m',
  database: "estoque",
})

export default sql;