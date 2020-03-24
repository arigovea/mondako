import { Request, Response } from 'express';
import { con } from "./mysqlconnection"

export default (req: Request, res: Response) => {

  con.query("SELECT * FROM comic", function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) { throw err };

    res.status(200).send(result);
  });
};