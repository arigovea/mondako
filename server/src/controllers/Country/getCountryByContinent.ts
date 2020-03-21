import { Request, Response } from "express";
import { con } from "../../connection/mysqlconnection";

export default (req: Request, res: Response) => {
    const continent = req.query.continent
    con.query(`SELECT country_url, country_name FROM country WHERE continent = "${continent}";`,
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

