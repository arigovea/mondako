import { Request, Response } from "express";
import { con } from "../../connection/mysqlconnection";

export default (req: Request, res: Response) => {
    let query = "SELECT country_url, country_name, continent FROM country";
    if (req.query.continent) {
        const continent = req.query.continent;
        query = `${query} WHERE continent = "${continent}";`;
    } else {
        query = `${query} ORDER BY continent;`;
    }
    con.query(query,
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

