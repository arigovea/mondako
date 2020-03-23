import { Request, Response } from "express";
import { con } from "../../connection/mysqlconnection";

export default (req: Request, res: Response) => {
    const id_comic = req.params.id;
    con.query(`SELECT comic.title, comic.description, comic.image_url, user.name, user.user_img, comic.id_comic, country.country_url 
    FROM comic INNER JOIN user ON user.id_user = comic.id_user
    INNER JOIN country ON user.id_country = country.id_country
    WHERE comic.id_comic = ${id_comic};`,

        function (err, result) {
            if (err) { throw err };
            if (result.length === 0) {
                return res.status(404).send(err);
            } else {
                con.query(`SELECT id_comic FROM liked;`,
                    function (err, liked) {
                        if (err) { throw err }
                        else {
                            for (let i = 0; i < liked.length; i++) {
                                if (liked[i].id_comic == result[0].id_comic) {
                                    liked = true;
                                } else {
                                    liked = false;
                                }
                            };
                            con.query(`SELECT id_comic FROM saved;`,
                                function (err, saved) {
                                    if (err) { throw err }
                                    else {
                                        for (let i = 0; i < saved.length; i++) {
                                            if (saved[i].id_comic == result[0].id_comic) {
                                                saved = true;
                                            } else {
                                                saved = false;
                                            }
                                        };
                                        con.query(`SELECT comments.id_comment, comments.comment, comments.showComment, user.name, user.user_img, country.country_url FROM comments
                                        INNER JOIN user ON user.id_user = comments.id_user
                                        INNER JOIN country ON user.id_country = country.id_country
                                        WHERE comments.id_comic = ${id_comic} AND comments.showComment = 1;`,
                                            function (err, comments) {
                                                if (err) { throw err }
                                                else {
                                                    result = {
                                                        info: result[0],
                                                        liked: liked,
                                                        saved: saved,
                                                        comments: comments
                                                    };
                                                    res.status(200).send(result);
                                                }
                                            });
                                    }
                                });
                        }
                    });
            };
        });
}


