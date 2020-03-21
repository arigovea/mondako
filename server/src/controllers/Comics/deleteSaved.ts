import { Request, Response } from "express";
import { con } from "../../connection/mysqlconnection";

export default (req: Request, res: Response) => {
  const comic = req.query.comic;
  con.query(`DELETE FROM saved WHERE id_comic = ${comic}`,
    function (err, result) {
      if (err) { throw err };
      
      if (result.length === 0) {
        return res.status(404).send(err);
      } 
      else {
        res.status(200).send(`Comic ${comic} was deleted successfully from "Saved`);
      }
    })
};

