DROP TABLE IF EXISTS `web_des`;

CREATE TABLE `web_des` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tag` varchar(40),
  `description` varchar(30) NOT NULL,
  `title` varchar(30),
  `image` varchar(1000),
  `bg_image` varchar(1000),
  `bg_music` varchar(1000),
  `qrcode` varchar(1000),
  `user_id` int(11),
  `view_count` int(11) NOT NULL DEFAULT '0',
  `host` varchar(20),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

