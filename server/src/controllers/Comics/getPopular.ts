import { Request, Response } from "express";
import { con } from "../../connection/mysqlconnection";

export default (req: Request, res: Response) => {
  con.query(`SELECT image_url, id_comic FROM comic WHERE likes > 300;`,
    function (err, result) {
      if (err) { throw err };
      if (result.length === 0) {
        return res.status(404).send(err);
      } else {
        res.status(200).send(result);
      }
    })
};


