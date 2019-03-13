DROP DATABASE IF EXISTS class_db;
CREATE DATABASE class_db;
USE class_db;

CREATE TABLE class
(
	id int NOT NULL AUTO_INCREMENT,
	schoolOfStudy varchar(255) NOT NULL,
    classCode varchar(255) NOT NULL,
    className varchar(255) NOT NULL,
	PRIMARY KEY (id)
);