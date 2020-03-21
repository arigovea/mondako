import { Request, Response } from "express";
import { con } from "../../connection/mysqlconnection";

export default (req: Request, res: Response) => {
  const country = req.query.country;
  con.query(`(SELECT * FROM user WHERE id_country IN 
    (SELECT id_country FROM country WHERE country_name = "${country}"));`,
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


