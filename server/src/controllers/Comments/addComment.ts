import { Request, Response, response } from "express";
import { con } from "../../connection/mysqlconnection";

export default (req: Request, res: Response) => {
    const comic = req.query.comic;
    const user = req.query.user;
    const comment = req.query.comment;

    con.query(`INSERT INTO comments (id_comic,id_user,comment,showComment)
    VALUES (${comic},${user},"${comment}",1);`,

        function (err, result) {
            if (err) { throw err };

            if (result.length === 0) {
                res.status(404).send(err);
            } 
            else {
                con.query(`SELECT comments.id_comment, comments.comment, user.name, user.user_img, country.country_url FROM comments
                INNER JOIN user ON user.id_user = comments.id_user
                INNER JOIN country ON user.id_country = country.id_country
                WHERE comments.id_comic= ${comic} AND comments.showComment = 1;`,
            
                    function (err, comments) {
                        if (err) { throw err }
                        else {
                            res.status(200).send(comments);
                        }
            
                    });
            }

        });
};
