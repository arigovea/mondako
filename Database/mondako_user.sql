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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `description_user` varchar(180) DEFAULT NULL,
  `id_country` int NOT NULL,
  `email` varchar(50) NOT NULL,
  `facebook` varchar(50) DEFAULT NULL,
  `instagram` varchar(50) DEFAULT NULL,
  `user_img` varchar(280) DEFAULT NULL,
  `mondako_url` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_user`),
  KEY `id_country` (`id_country`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_country`) REFERENCES `country` (`id_country`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Sarahi Govea','CEO Hola Lucy Store || Graphic Designer || Photography || Community Manager || UdeG CUAAD',20,'mx.holalucy@gmail.com','/holalucy.mx','/holalucy.mx','https://scontent.fgdl3-1.fna.fbcdn.net/v/t1.0-9/50853144_10216238072277954_7455647524561354752_n.jpg?_nc_cat=106&_nc_sid=7aed08&_nc_ohc=5Khufne75pUAX_8xJuM&_nc_ht=scontent.fgdl3-1.fna&oh=91850f59fa62c2c20cef4cefeea20483&oe=5E925582','/sarahigovea'),(2,'Vania Bachur','SHE-EO at Vania Bachur Inc. || Soy Kawaii y malvada || Dibujar me hace feliz',20,'hola@vaniabachur.com','/suupeergirl','/suupeergirl','https://avatars.sched.co/6/3f/8010988/avatar.jpg?0dd','/suupergirl'),(3,'Borja & Blackburn','Porque todos llevamos un godín en nuestro interior',20,'coticotidiana@perez.com','/CotidianaPerez','','https://bit.ly/2ISwuJs','/Borja&Blackburn'),(4,'Dan Goodsell','Mr.Toast || Crunchy || Taste it',11,'mr.toast@toasty.com','/mrtoast','/mrtoast','https://pbs.twimg.com/profile_images/2416722895/nh3jrk9z7io0epfp1sn5_400x400.jpeg','/mrtoast'),(5,'Sarah\'s Scribble','Designer || Weird || I have a cat',11,'sarah@scribble.com','/DoodleTimeSarah','/DoodleTimeSarah','https://www.auxmagazine.com/wp-content/uploads/2018/02/BRI-sarahscribbles2-_P%C3%A1gina_1.jpg','/DoodleTimeSarah'),(6,'bichi.mao','猫的真实生活',7,'mewmew@yahoo.com','','','https://swebtoon-phinf.pstatic.net/20191229_3/157758966800909SIz_JPEG/thumbnail.jpg','/bichimao'),(7,'Adoro','Ich bin Adoro || Ich mag Pizza',1,'adoro@pizza.com','','','https://bit.ly/33lxfUT','/adoro'),(8,'Maitena','Historietista argentina',3,'maitena@elcomicargentino.com','','','https://dla.cdncimeco.com/uploads/2017/10/image59dae2bb3d34a.jpg','/maitena'),(9,'Fierro','Entra al mundo del Comic',3,'fierro@hola.com','','','https://teacordas.altervista.org/wp-content/uploads/2017/12/fierro.png','/fierro'),(10,'Manuel Loza','Ilustrador Argentino',3,'loza@hotmail.com','','','https://pbs.twimg.com/media/DJN7TiYW0AAOHGM.jpg','/lozamanu'),(11,'Solano López','Tenia que llenar este campo',3,'solano@comic.arg','','','https://i.pinimg.com/originals/49/60/ea/4960ea2acf7336de2a41de39f5ade3cd.jpg','/solano'),(13,'Liniers','Sigue la vida de Enriqueta',3,'liniers@hotmail.com','','','https://pbs.twimg.com/profile_images/915247858345037825/2v7Ijw_T_400x400.jpg','/liniers');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-24  1:38:24
