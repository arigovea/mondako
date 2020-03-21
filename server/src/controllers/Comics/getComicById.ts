import { Request, Response } from "express";
import { con } from "../../connection/mysqlconnection";

export default (req: Request, res: Response) => {
    const id_comic = req.query.id_comic
    con.query(`SELECT comic.title, comic.description, comic.image_url, user.name, user.user_img, country.country_url FROM comic
    INNER JOIN user ON user.id_user = comic.id_user
    INNER JOIN country ON user.id_country = country.id_country
    WHERE comic.id_comic = ${id_comic};`,

        function (err, result) {
            if (err) { throw err };

            if (result.length === 0) {
                return res.status(404).send(err);
            } else {
                res.status(200).send(result);
            }

        });
};


