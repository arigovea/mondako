import { Request, Response } from "express";
import { con } from "../../connection/mysqlconnection";

export default (req: Request, res: Response) => {
    const username = req.query.username
    con.query(`SELECT user.name, user.description_user, user.email, user.facebook, 
    user.instagram, user.user_img, user.mondako_url, country.country_url FROM user
    INNER JOIN country ON user.id_country = country.id_country
    WHERE user.name = "${username}";`,

        function (err, result) {
            if (err) { throw err };

            if (result.length === 0) {
                return res.status(404).send(err);
            } else {
                res.status(200).send(result);
            }

        });
};
