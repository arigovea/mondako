import { Request, Response, response } from "express";
import { con } from "../../connection/mysqlconnection";

export default (req: Request, res: Response) => {
    const comment = req.query.comment;

    con.query(`UPDATE comments SET deleted_at=CURRENT_TIMESTAMP, showComment=0 
              WHERE id_comment=${comment};`,

        function (err, result) {
            if (err) { throw err };

            if (result.length === 0) {
                return res.status(404).send(err);
            }
            else {
                res.status(200).send("Comment successfully deleted");
            }

        });
};
