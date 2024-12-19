CREATE TABLE `bananatrack`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(45) NOT NULL,
  `user_second_name` VARCHAR(45) NULL,
  `user_username` VARCHAR(45) NOT NULL,
  `user_birthday` VARCHAR(45) NULL,
  `user_password` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`));