import { Request, Response } from "express";
import { con } from "../../connection/mysqlconnection";

export default (req: Request, res: Response) => {
  const user = req.params.user;
  con.query(`SELECT liked.id_comic, comic.image_url, user.*, country.country_url FROM liked
  INNER JOIN user ON user.id_user = liked.id_user
  INNER JOIN comic ON liked.id_comic = comic.id_comic 
  INNER JOIN country ON user.id_country = country.id_country WHERE user.mondako_url = "/${user}";`,
    function (err, result) {
      if (err) { throw err };

      if (result.length === 0) {
        return res.status(404).send(err);
      }
      else {
        let user = [{
          name: result[0].name,
          description_user: result[0].description_user,
          email: result[0].email,
          facebook: result[0].facebook,
          instagram: result[0].instagram,
          user_img: result[0].user_img,
          mondako_url: result[0].mondako_url,
          country_url: result[0].country_url
        }];
        let comics = [];
        for (let i = 0; i < result.length; i++) {
          comics.push({
            "id_comic": result[i].id_comic,
            "image_url": result[i].image_url
          });
        }
        result = { user: user, comics: comics };
        res.status(200).send(result);
      };
    })
};
