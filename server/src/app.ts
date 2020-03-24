import express, { Application } from 'express';
import bodyParser from "body-parser";
import cors from "cors";
import comicRoutes from "./routes/ComicRoutes";
import countryRoutes from "./routes/CountryRoutes";
import usersRoutes from "./routes/UserRoutes";
import commentsRoutes from "./routes/CommentRoutes";

const app: Application = express();

// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// comics routes
app.use('/comics', comicRoutes);

// country routes
app.use('/country', countryRoutes);

// users routes
app.use('/users', usersRoutes);

// comments routes
app.use('/comments', commentsRoutes);

export default app;