CREATE DATABASE raspy_db;

USE raspy_db;

CREATE TABLE IF NOT EXISTS `users` (
    `id` bigint(16) NOT NULL AUTO_INCREMENT,
    `username` varchar(32) NOT NULL,
    `password` varchar(32) NOT NULL,
--    `profile_picture` varchar(512) NOT NULL,
--    `bio` text,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=0;

CREATE TABLE IF NOT EXISTS `brackets` (
    `id` bigint(16) NOT NULL AUTO_INCREMENT,
    `name` varchar(128) NOT NULL,
--    `image` varchar(512) NOT NULL,
    `created_date` datetime NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=0;

CREATE TABLE IF NOT EXISTS `bracket_group` (
    `bracket_id` bigint(16) NOT NULL,
    `user_id` bigint(16) NOT NULL,
    `user_role` int(1) NOT NULL,
    `joined_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=0;

CREATE TABLE IF NOT EXISTS `messages` (
    `id` bigint(16) NOT NULL AUTO_INCREMENT,
    `user_id` bigint(16) NOT NULL,
    `username` varchar(32) NOT NULL,
    `timestamp` datetime NOT NULL,
    `content` longtext NOT NULL,
    `bracket_id` bigint(16) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=0;