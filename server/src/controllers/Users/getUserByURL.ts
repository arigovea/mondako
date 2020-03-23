import { Request, Response } from "express";
import { con } from "../../connection/mysqlconnection";

export default (req: Request, res: Response) => {
    const user = req.params.user;
    con.query(`SELECT user.id_user, user.name, user.user_img, user.mondako_url, country.country_url FROM user
    INNER JOIN country ON user.id_country = country.id_country
    WHERE user.mondako_url="/${user}";`,

        function (err, result) {
            if (err) { throw err };

            if (result.length === 0) {
                return res.status(404).send(err);
            } else {
                res.status(200).send(result);
            }

        });
};
