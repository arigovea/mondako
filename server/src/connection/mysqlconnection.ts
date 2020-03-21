import mysql from "mysql";
import { constants } from "../config/constants";
​
export const con = mysql.createConnection({
    host: constants.host,
    user: constants.user,
    password: constants.password,
    database: constants.database,
});