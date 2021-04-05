DROP DATABASE IF EXISTS cloud_craft;
CREATE DATABASE IF NOT EXISTS cloud_craft;
USE cloud_craft;

CREATE TABLE `users` (
	`user_id` INT NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL UNIQUE,
	 PRIMARY KEY (`user_id`)
);

CREATE TABLE `channels` (
	`channel_id` INT NOT NULL AUTO_INCREMENT,
	`channel_name` varchar(255) NOT NULL,
	 PRIMARY KEY (`channel_id`)
);

CREATE TABLE `users_channels` (
	`user_channel_id` INT NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL,
	`channel_id` INT NOT NULL,
	PRIMARY KEY (`user_channel_id`),
	FOREIGN KEY (`user_id`)
	  REFERENCES `users`(`user_id`)
	  ON UPDATE CASCADE ON DELETE RESTRICT,
	FOREIGN KEY (`channel_id`)
	  REFERENCES `channels`(`channel_id`)
	  ON UPDATE CASCADE ON DELETE RESTRICT
);
CREATE TABLE `messages` (
	`message_id` INT NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL,
	`channel_id` INT NOT NULL,
	`read` BOOLEAN NOT NULL DEFAULT false,
	`datetime` DATETIME NOT NULL DEFAULT NOW(),
	`message_text` TEXT NOT NULL,
	`disabled` BOOLEAN NOT NULL DEFAULT false,
	`completed` BOOLEAN NOT NULL DEFAULT false,
	`is_delete` BOOLEAN NOT NULL DEFAULT false,
	PRIMARY KEY (`message_id`),
	FOREIGN KEY (`user_id`)
	  REFERENCES `users`(`user_id`)
	  ON UPDATE CASCADE ON DELETE RESTRICT,
	FOREIGN KEY (`channel_id`)
	  REFERENCES `channels`(`channel_id`)
	  ON UPDATE CASCADE ON DELETE RESTRICT
);


CREATE TABLE `tasks` (
	`task_id` INT NOT NULL AUTO_INCREMENT,
	`message_id` INT DEFAULT NULL,
	`user_id` INT NOT NULL,
	`task_text` TEXT NOT NULL,
	`datetime` DATETIME NOT NULL DEFAULT NOW(),
	`completed` BOOLEAN NOT NULL DEFAULT false,
	`is_delete` BOOLEAN NOT NULL DEFAULT false,
	PRIMARY KEY (`task_id`),
	FOREIGN KEY (`message_id`)
	  REFERENCES `messages`(`message_id`)
	  ON UPDATE CASCADE ON DELETE RESTRICT,
	FOREIGN KEY (`user_id`)
	  REFERENCES `users`(`user_id`)
	  ON UPDATE CASCADE ON DELETE RESTRICT
);



-- ALTER TABLE `users_groups` ADD CONSTRAINT `users_groups_fk0` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`);
-- ALTER TABLE `users_groups` ADD CONSTRAINT `users_groups_fk1` FOREIGN KEY (`group_id`) REFERENCES `group`(`group_id`);
-- ALTER TABLE `messages` ADD CONSTRAINT `messages_fk0` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`);
-- ALTER TABLE `messages` ADD CONSTRAINT `messages_fk1` FOREIGN KEY (`group_id`) REFERENCES `group`(`group_id`);
-- ALTER TABLE `tasks` ADD CONSTRAINT `tasks_fk0` FOREIGN KEY (`message_id`) REFERENCES `messages`(`message_id`);
-- ALTER TABLE `tasks` ADD CONSTRAINT `tasks_fk1` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`);


-- dummy data

-- users data

INSERT INTO `users` (`user_id`, `name`, `password`, `email`) VALUES (1, 'Robin', '578ce738ee12ac7e6f1f99a20d10e9577ee9b0af', 'christiana.zieme@example.org');
INSERT INTO `users` (`user_id`, `name`, `password`, `email`) VALUES (2, 'Avery', 'b8c8dcff0641f80b10c178dc6af00df6edf69534', 'weissnat.trevion@example.com');
INSERT INTO `users` (`user_id`, `name`, `password`, `email`) VALUES (3, 'Riley', '247f06f61d440af697f4dd63af4b4929d4c9f236', 'vesta.johnston@example.org');
INSERT INTO `users` (`user_id`, `name`, `password`, `email`) VALUES (4, 'Frankie', 'b35de95107a415a1917a44b8e8483ac08fa0e024', 'rohan.maryam@example.com');
INSERT INTO `users` (`user_id`, `name`, `password`, `email`) VALUES (5, 'Alex', '0e2869ce9b3bf82debc8a7156217bbea4a34c5f2', 'paul79@example.com');
INSERT INTO `users` (`user_id`, `name`, `password`, `email`) VALUES (6, 'River', '93d98807b5670837018c2e5d6ddc4c15c1b97ab0', 'kathryn.eichmann@example.org');
INSERT INTO `users` (`user_id`, `name`, `password`, `email`) VALUES (7, 'Aiden', 'ac9f570f2e9e6a28981d866f720a6a6dd09c269b', 'marta66@example.org');
INSERT INTO `users` (`user_id`, `name`, `password`, `email`) VALUES (8, 'Ocean', '7f3c83ffbd3da732bfc5b31e73419889ddb516b4', 'oaltenwerth@example.org');



-- group data
INSERT INTO `channels` (`channel_id`, `channel_name`) VALUES (1, 'Hack Reactor');
INSERT INTO `channels` (`channel_id`, `channel_name`) VALUES (2, 'Communications');
INSERT INTO `channels` (`channel_id`, `channel_name`) VALUES (3, 'Technical Support');
INSERT INTO `channels` (`channel_id`, `channel_name`) VALUES (4, 'Career Services');
INSERT INTO `channels` (`channel_id`, `channel_name`) VALUES (5, 'Announcements');
INSERT INTO `channels` (`channel_id`, `channel_name`) VALUES (6, 'Chatter');
INSERT INTO `channels` (`channel_id`, `channel_name`) VALUES (7, 'Study Group');


-- users_groups

INSERT INTO `users_channels` (`user_channel_id`, `user_id`, `channel_id`) VALUES (1, 7, 1);
INSERT INTO `users_channels` (`user_channel_id`, `user_id`, `channel_id`) VALUES (2, 2, 1);
INSERT INTO `users_channels` (`user_channel_id`, `user_id`, `channel_id`) VALUES (3, 3, 2);
INSERT INTO `users_channels` (`user_channel_id`, `user_id`, `channel_id`) VALUES (4, 1, 2);
INSERT INTO `users_channels` (`user_channel_id`, `user_id`, `channel_id`) VALUES (5, 4, 2);
INSERT INTO `users_channels` (`user_channel_id`, `user_id`, `channel_id`) VALUES (6, 5, 3);
INSERT INTO `users_channels` (`user_channel_id`, `user_id`, `channel_id`) VALUES (8, 7, 3);
INSERT INTO `users_channels` (`user_channel_id`, `user_id`, `channel_id`) VALUES (9, 6, 4);
INSERT INTO `users_channels` (`user_channel_id`, `user_id`, `channel_id`) VALUES (10, 4,4);
INSERT INTO `users_channels` (`user_channel_id`, `user_id`, `channel_id`) VALUES (11,2 ,5);
INSERT INTO `users_channels` (`user_channel_id`, `user_id`, `channel_id`) VALUES (12, 4,5);
INSERT INTO `users_channels` (`user_channel_id`, `user_id`, `channel_id`) VALUES (13, 8,5);
INSERT INTO `users_channels` (`user_channel_id`, `user_id`, `channel_id`) VALUES (14, 3,5);
INSERT INTO `users_channels` (`user_channel_id`, `user_id`, `channel_id`) VALUES (15, 6,6);


-- messages


INSERT INTO `messages` (`message_id`,`user_id`,`channel_id`,`read`,`datetime`,`message_text`,`disabled`,`completed`,`is_delete`) VALUES (1,7,1,1,"2020-05-08 20:05:40","nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante",1,0,0);
INSERT INTO `messages` (`message_id`,`user_id`,`channel_id`,`read`,`datetime`,`message_text`,`disabled`,`completed`,`is_delete`) VALUES (2,2,1,0,"2021-01-15 22:44:03","Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc",0,1,0);

INSERT INTO `messages` (`message_id`,`user_id`,`channel_id`,`read`,`datetime`,`message_text`,`disabled`,`completed`,`is_delete`) VALUES(3,7,1,1,"2021-10-16 15:14:41","semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae",0,1,0);
INSERT INTO `messages` (`message_id`,`user_id`,`channel_id`,`read`,`datetime`,`message_text`,`disabled`,`completed`,`is_delete`) VALUES(4,2,1,0,"2020-05-14 23:35:43","elementum sem, vitae aliquam eros turpis non enim. Mauris quis",1,0,0);
INSERT INTO `messages` (`message_id`,`user_id`,`channel_id`,`read`,`datetime`,`message_text`,`disabled`,`completed`,`is_delete`)VALUES(5,1,4,1,"2020-04-19 14:48:10","sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique",1,1,0);
INSERT INTO `messages` (`message_id`,`user_id`,`channel_id`,`read`,`datetime`,`message_text`,`disabled`,`completed`,`is_delete`)VALUES(6,2,5,0,"2020-11-04 09:24:51","Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a",0,0,0);
INSERT INTO `messages` (`message_id`,`user_id`,`channel_id`,`read`,`datetime`,`message_text`,`disabled`,`completed`,`is_delete`)VALUES(7,4,5,1,"2021-05-30 13:19:23","mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec,",1,0,0);
INSERT INTO `messages` (`message_id`,`user_id`,`channel_id`,`read`,`datetime`,`message_text`,`disabled`,`completed`,`is_delete`)VALUES(8,8,5,0,"2021-09-18 19:55:25","Aliquam auctor, velit eget laoreet posuere, enim nisl elementum purus,",0,1,0);
INSERT INTO `messages` (`message_id`,`user_id`,`channel_id`,`read`,`datetime`,`message_text`,`disabled`,`completed`,`is_delete`)VALUES(9,5,3,0,"2020-06-16 21:47:40","Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer",0,1,0);
INSERT INTO `messages` (`message_id`,`user_id`,`channel_id`,`read`,`datetime`,`message_text`,`disabled`,`completed`,`is_delete`)VALUES(10,7,3,0,"2020-11-18 05:15:04","eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula.",1,0,0);


-- tasks

INSERT INTO `tasks` (`task_id`,`user_id`,`message_id`,`datetime`,`task_text`,`completed`,`is_delete`) VALUES (1,7,7,"2022-01-05 18:40:10","nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo",0,0);
INSERT INTO `tasks` (`task_id`,`user_id`,`message_id`,`datetime`,`task_text`,`completed`,`is_delete`) VALUES(2,2,1,"2022-02-12 13:38:41","arcu et pede. Nunc sed orci lobortis augue scelerisque mollis.",0,0);
INSERT INTO `tasks` (`task_id`,`user_id`,`message_id`,`datetime`,`task_text`,`completed`,`is_delete`) VALUES(3,7,4,"2020-12-21 07:15:58","egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est",1,0);
INSERT INTO `tasks` (`task_id`,`user_id`,`message_id`,`datetime`,`task_text`,`completed`,`is_delete`) VALUES(4,2,7,"2021-12-24 15:06:17","Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi",0,0);
INSERT INTO `tasks` (`task_id`,`user_id`,`message_id`,`datetime`,`task_text`,`completed`,`is_delete`) VALUES(5,1,7,"2020-10-02 15:49:02","pede. Cum sociis natoque penatibus et magnis dis parturient montes,",1,0);
INSERT INTO `tasks` (`task_id`,`user_id`,`message_id`,`datetime`,`task_text`,`completed`,`is_delete`) VALUES(6,2,5,"2021-05-08 18:22:13","ipsum primis in faucibus orci luctus et ultrices posuere cubilia",1,0);
INSERT INTO `tasks` (`task_id`,`user_id`,`message_id`,`datetime`,`task_text`,`completed`,`is_delete`) VALUES(7,4,7,"2021-08-27 23:37:23","Donec tempor, est ac mattis semper, dui lectus rutrum urna,",0,0);
INSERT INTO `tasks` (`task_id`,`user_id`,`message_id`,`datetime`,`task_text`,`completed`,`is_delete`) VALUES(8,7,1,"2020-08-26 14:37:47","torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam",1,0);
INSERT INTO `tasks` (`task_id`,`user_id`,`message_id`,`datetime`,`task_text`,`completed`,`is_delete`) VALUES(9,8,3,"2022-03-06 05:59:25","convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt vehicula",0,0);
INSERT INTO `tasks` (`task_id`,`user_id`,`message_id`,`datetime`,`task_text`,`completed`,`is_delete`) VALUES(10,5,1,"2021-09-15 17:03:12","nisi nibh lacinia orci, consectetuer euismod est arcu ac orci.",0,0);
INSERT INTO `tasks` (`task_id`,`user_id`,`message_id`,`datetime`,`task_text`,`completed`,`is_delete`) VALUES (11,1,9,"2021-08-29 07:43:34","mollis dui, in sodales elit erat vitae risus. Duis a",0,0);
INSERT INTO `tasks` (`task_id`,`user_id`,`message_id`,`datetime`,`task_text`,`completed`,`is_delete`) VALUES(12,2,1,"2022-02-14 02:33:20","ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu",1,0);
INSERT INTO `tasks` (`task_id`,`user_id`,`message_id`,`datetime`,`task_text`,`completed`,`is_delete`) VALUES(13,3,4,"2021-12-02 04:18:38","nisi sem semper erat, in consectetuer ipsum nunc id enim.",0,0);
INSERT INTO `tasks` (`task_id`,`user_id`,`message_id`,`datetime`,`task_text`,`completed`,`is_delete`) VALUES(14,6,2,"2020-12-06 14:06:17","dui, in sodales elit erat vitae risus. Duis a mi",1,0);
INSERT INTO `tasks` (`task_id`,`user_id`,`message_id`,`datetime`,`task_text`,`completed`,`is_delete`) VALUES(15,8,9,"2022-03-13 19:27:39","a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus",1,0);
INSERT INTO `tasks` (`task_id`,`user_id`,`message_id`,`datetime`,`task_text`,`completed`,`is_delete`) VALUES(16,4,6,"2021-05-10 11:04:58","porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris",0,0);
INSERT INTO `tasks` (`task_id`,`user_id`,`message_id`,`datetime`,`task_text`,`completed`,`is_delete`) VALUES(17,3,5,"2020-12-26 07:48:02","Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci.",1,0);
INSERT INTO `tasks` (`task_id`,`user_id`,`message_id`,`datetime`,`task_text`,`completed`,`is_delete`) VALUES(18,7,8,"2021-10-28 14:56:00","eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis",1,0);
INSERT INTO `tasks` (`task_id`,`user_id`,`message_id`,`datetime`,`task_text`,`completed`,`is_delete`) VALUES(19,2,5,"2020-04-13 15:30:20","enim mi tempor lorem, eget mollis lectus pede et risus.",0,0);
INSERT INTO `tasks` (`task_id`,`user_id`,`message_id`,`datetime`,`task_text`,`completed`,`is_delete`) VALUES(20,2,1,"2021-01-22 16:39:51","sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor",0,0);
INSERT INTO `tasks` (`task_id`,`user_id`,`message_id`,`datetime`,`task_text`,`completed`,`is_delete`) VALUES (21,1,1,"2022-04-01 22:27:03","leo elementum sem, vitae aliquam eros turpis non enim. Mauris",0,0);
INSERT INTO `tasks` (`task_id`,`user_id`,`message_id`,`datetime`,`task_text`,`completed`,`is_delete`) VALUES(22,2,5,"2021-02-26 19:46:53","odio a purus. Duis elementum, dui quis accumsan convallis, ante",0,0);
INSERT INTO `tasks` (`task_id`,`user_id`,`message_id`,`datetime`,`task_text`,`completed`,`is_delete`) VALUES(23,5,4,"2020-08-16 10:57:16","Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum",0,0);
INSERT INTO `tasks` (`task_id`,`user_id`,`message_id`,`datetime`,`task_text`,`completed`,`is_delete`) VALUES(24,7,7,"2020-07-31 17:38:46","ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula.",0,0);



