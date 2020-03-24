-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: mondako
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comic`
--

DROP TABLE IF EXISTS `comic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comic` (
  `id_comic` int NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `description` varchar(280) NOT NULL,
  `id_user` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `image_url` varchar(2083) NOT NULL,
  `likes` int DEFAULT NULL,
  PRIMARY KEY (`id_comic`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `comic_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`),
  CONSTRAINT `comic_chk_1` CHECK ((`likes` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comic`
--

LOCK TABLES `comic` WRITE;
/*!40000 ALTER TABLE `comic` DISABLE KEYS */;
INSERT INTO `comic` VALUES (1,'El mundo necesita mujeres valientes','Es hora de salir al mundo y hacernos valer',2,'2020-03-17 05:26:32','https://cdn-www.konbini.com/mx/files/2017/05/suupergirl09.jpg',323),(2,'Problema 332 de un godín','Cada día de mi existencia',3,'2020-03-17 05:26:32','https://3.bp.blogspot.com/-LoIURHk0mPI/WHhgK9AhtVI/AAAAAAAABp8/CDaP-Im-yjAnz_oEplCOPdHyhWWmHQbUgCLcB/s1600/cotidiana2.jpg',318),(3,'A slice of Mr. Toast','Don\'t forget',4,'2020-03-17 05:26:32','https://ceebees.files.wordpress.com/2009/05/cincodemayo.jpg',315),(4,'Every morning','I don\'t like to do things.',5,'2020-03-17 05:26:32','https://m.media-amazon.com/images/S/aplus-media/sota/7ec52911-7d1b-4e64-9e18-4ee044673ce2.PNG',311),(5,'Happy Birthday to me','The hard life of cat owners',6,'2020-03-17 05:26:32','https://n.sinaimg.cn/sinacn20119/160/w880h880/20191204/462e-ikhvemx8333716.jpg',308),(6,'Pizzeta Pizza','Das ist meine Liebe zur Pizza',7,'2020-03-17 05:26:32','https://scontent-yyz1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/83640954_735201733676422_2341068340826505891_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=vaEnsf45BjUAX_QpIpx&oh=1192bb0c8ebecf56ac3abfba9bcd2c0a&oe=5F01E325',304),(7,'Tiempo en cuarentena','Y nos falta un mes',8,'2020-03-17 05:35:25','https://i.pinimg.com/originals/7b/68/1a/7b681adeb665a53267c49ddb7e0a36c6.jpg',135),(8,'Neoverso','El 2020 no se puede poner peor',9,'2020-03-17 05:35:25','https://1.bp.blogspot.com/-w9XZlS5y6_Q/WU30pSbxBkI/AAAAAAAACDY/sAQWY1xv6Kw8lmfFnhsi4LLFm-zpXowlwCLcBGAs/s1600/0019842066.jpg',147),(9,'Almer Definitivo','Probada de la próxima edición',10,'2020-03-17 05:35:25','https://geeky.com.ar/wp-content/uploads/2017/12/ALMER.png',89),(10,'El Eternauta','Para amantes del comic',11,'2020-03-17 05:35:25','https://thefaustorocksyeah.files.wordpress.com/2013/05/el-eternauta-oesterheld.jpg?w=584',78),(11,'Pesadilla Vudú','Ahora que lo pienso, esto es el coronavirus hecho realidad',10,'2020-03-17 05:35:25','https://s3images.coroflot.com/user_files/individual_files/475274_9F2cbqxx3GhxnsVYoBgnHkgZz.jpg',179),(12,'#NiUnaMenos','Enriqueta quiere ver a las mujeres libres y felices',13,'2020-03-17 05:35:25','https://magis.iteso.mx/sites/default/files/472-MAGIS-LINIERS4.jpeg',222),(13,'La vida de Alaska','Espero que les guste mi primer comic',1,'2020-03-17 06:36:06','https://aidengdmoore.files.wordpress.com/2018/09/a4-page1.jpg?w=1180',2),(14,'A todos mis lectores','Hay que hacer frente al CORONA VIRUS',2,'2020-03-17 06:44:25','https://revistafeel.com.mx/cms/wp-content/uploads/2018/01/suupergirl-vida-revista-feel.png',42),(15,'Para esa persona especial...','Donde quiera que te encuentres',2,'2020-03-17 06:44:25','https://revistafeel.com.mx/cms/wp-content/uploads/2017/12/suupergirl-salsa-tacos-revista-feel.png',69),(16,'Amor a la mexicana','Sólo hay una manera de saber si alguien te ama',2,'2020-03-17 06:44:25','https://pbs.twimg.com/media/EEXnwUMXsAI_oi1.png',187),(17,'La vida dura de un adulto','No sé en que momento llegué a este punto de mi vida',2,'2020-03-17 06:44:25','https://pics.conservativememes.com/uno-llega-a-la-edad-en-la-que-anora-mas-33355275.png',121),(18,'Pokémon es mi vida','Hasta mi madre sabe que nunca maduraré',2,'2020-03-17 07:00:21','https://pbs.twimg.com/media/D7GaWNaVUAANY-z.png',256),(19,'Nuestro cuerpo humano','De las peores experiencias en mi vida',9,'2020-03-17 07:00:21','https://scontent.fgdl3-1.fna.fbcdn.net/v/t1.0-9/89546142_1475424022644120_5388912345512673280_n.jpg?_nc_cat=101&_nc_sid=110474&_nc_ohc=cmmyG9fRP_cAX_eUjSs&_nc_ht=scontent.fgdl3-1.fna&oh=925bdff275e441b01f4e53b566fc762f&oe=5E927150',68),(20,'Más Tacos','Esta prueba de amor es real',2,'2020-03-17 07:00:21','https://revistafeel.com.mx/cms/wp-content/uploads/2017/12/suupergirl-tacos-revista-feel.png',274),(21,'Love in 2020','Trying new styles',6,'2020-03-17 07:00:21','https://i.pinimg.com/originals/a7/4d/8b/a74d8be60e6309869db84aad8c138c39.jpg',141),(22,'Duck Face','Today I felt inspired by my duck',7,'2020-03-17 07:00:21','https://scontent.fgdl3-1.fna.fbcdn.net/v/t1.0-9/89868436_1473530962833426_3154901521863278592_n.jpg?_nc_cat=107&_nc_sid=110474&_nc_ohc=CIPHfkEl-94AX-g5EOB&_nc_ht=scontent.fgdl3-1.fna&oh=801c37dc5978dab31825a6626ea3d766&oe=5E955F3D',32),(23,'Hobbies','What? It\'s my hobby',5,'2020-03-22 02:55:15','https://gocomics.typepad.com/.a/6a00d8341c5f3053ef01bb08c0b3ec970d-800wi',123),(24,'Protect yourself','It\'s everyone\'s responsibility to protect each other',6,'2020-03-22 02:55:15','https://scontent-yyz1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/82945954_166321768122887_8911476930617824563_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=-YRBVRvCVVEAX9YBgIe&oh=b6e85640f0f1a48f9fd15a19e2b41e8b&oe=5E8D481A',280),(25,'Meine Quarantänetage','Alle meine Tage war es so',7,'2020-03-22 02:55:15','https://art.ngfiles.com/images/21000/21153_comic-ray_how-to-draw-a-comic.png?f1246914552',66);
/*!40000 ALTER TABLE `comic` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-24  1:38:25
