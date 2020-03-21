import { Request, Response } from "express";
import { con } from "../../connection/mysqlconnection";

export default (req: Request, res: Response) => {
    const comic = req.query.comic;
    con.query(`SELECT id_comic FROM saved;`,
        function (err, result) {
            if (err) { throw err }
            else {
                for (let i = 0; i < result.length; i++) {
                    if (result[i].id_comic == comic) {
                        res.status(400).send(`The comic ${comic} is already added to "Saved"`);
                        return;
                    };
                };
                con.query(`INSERT INTO saved (id_user, id_comic) VALUES(1,${comic});`,
                    function (err, result) {
                        if (err) { throw err };
                        if (result.length === 0) {
                            res.status(404).send(err);
                        }
                        else {
                            res.status(200).send(`The comic ${comic} was added successfully to "Saved"`);
                        }
                    });
            };
        });
};
