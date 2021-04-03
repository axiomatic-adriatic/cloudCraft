CREATE DATABASE IF NOT EXISTS cloudCraft;
USE cloudCraft;

CREATE TABLE `Users` (
	`user_id` INT NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL UNIQUE,
	PRIMARY KEY (`user_id`)
);
CREATE TABLE `Group` (
	`group_id` INT NOT NULL AUTO_INCREMENT,
	`group_name` varchar(255) NOT NULL,
	PRIMARY KEY (`group_id`)
);
CREATE TABLE `Users_Groups` (
	`user_group_id` INT NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL,
	`group_id` INT NOT NULL,
	PRIMARY KEY (`user_group_id`)
);
CREATE TABLE `Messages` (
	`message_id` INT NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL,
	`group_id` INT NOT NULL,
	`read` BOOLEAN NOT NULL DEFAULT false,
	`datetime` DATETIME NOT NULL,
	`message_text` TEXT NOT NULL,
	`disabled` BOOLEAN NOT NULL DEFAULT false,
	`completed` BOOLEAN NOT NULL,
	PRIMARY KEY (`message_id`)
);
CREATE TABLE `Tasks` (
	`task_id` INT NOT NULL AUTO_INCREMENT,
	`message_id` INT NOT NULL DEFAULT '0',
	`user_id` INT NOT NULL,
	`task_text` TEXT NOT NULL,
	`datetime` DATETIME NOT NULL,
	`completed` BOOLEAN NOT NULL,
	PRIMARY KEY (`task_id`)
);
ALTER TABLE `Users & Groups` ADD CONSTRAINT `Users & Groups_fk0` FOREIGN KEY (`user_id`) REFERENCES `Users Table`(`user_id`);
ALTER TABLE `Users & Groups` ADD CONSTRAINT `Users & Groups_fk1` FOREIGN KEY (`group_id`) REFERENCES `Group Table`(`group_id`);
ALTER TABLE `Messages` ADD CONSTRAINT `Messages_fk0` FOREIGN KEY (`user_id`) REFERENCES `Users Table`(`user_id`);
ALTER TABLE `Messages` ADD CONSTRAINT `Messages_fk1` FOREIGN KEY (`group_id`) REFERENCES `Group Table`(`group_id`);
ALTER TABLE `Tasks` ADD CONSTRAINT `Tasks_fk0` FOREIGN KEY (`message_id`) REFERENCES `Messages`(`message_id`);
ALTER TABLE `Tasks` ADD CONSTRAINT `Tasks_fk1` FOREIGN KEY (`user_id`) REFERENCES `Users Table`(`user_id`);