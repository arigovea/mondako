import express, { Application } from 'express';
import entryPoint from './src/app';
import  { constants }  from './src/config/constants';
import { con } from "./src/connection/mysqlconnection";
import cors = require("cors");
const app: Application = express ();

// entry point
app.use(entryPoint);

app.use(cors());

// server up
app.listen(constants.port, () => {
    console.log(`Servidor iniciado en ${constants.port}`);
});

con.connect((err)=>{
    if (err) {throw err};
    console.log("Conectado exitosamente");
});