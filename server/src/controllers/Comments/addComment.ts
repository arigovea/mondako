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
                return res.status(404).send(err);
            } 
            else {
                res.status(201).send("Comment successfully added");
            }

        });
};
