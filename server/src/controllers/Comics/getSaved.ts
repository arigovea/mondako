import { Request, Response } from "express";
import { con } from "../../connection/mysqlconnection";

export default (req: Request, res: Response) => {
  const user = req.query.user;
  con.query(`SELECT image_url FROM comic WHERE id_comic IN 
    (SELECT id_comic FROM saved WHERE id_user = ${user});`,
    function (err, result) {
      if (err) { throw err };
      
      if (result.length === 0) {
        return res.status(404).send(err);
      } 
      else {
        res.status(200).send(result);
      }
    })
};
