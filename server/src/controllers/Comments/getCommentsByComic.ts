import { Request, Response, response } from "express";
import { con } from "../../connection/mysqlconnection";

export default (req: Request, res: Response) => {
    const comic = req.query.comic;

    con.query(`SELECT comments.comment, user.name, country.country_url FROM comments
    INNER JOIN user ON user.id_user = comments.id_user
    INNER JOIN country ON user.id_country = country.id_country
    WHERE comments.id_comic= ${comic} AND comments.showComment = 1;`,

        function (err, result) {
            if (err) { throw err };

            if (result.length === 0) {
                return res.status(404).send(err);
            }
            else {
                res.status(200).send(result);
            }

        });
};
