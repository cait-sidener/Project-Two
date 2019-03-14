DROP DATABASE IF EXISTS class_db;
CREATE DATABASE class_db;
USE class_db;

CREATE TABLE class
(
	id int NOT NULL AUTO_INCREMENT,
    classCode varchar(255) NOT NULL,
    className varchar(255) NOT NULL,
	PRIMARY KEY (id)
);


INSERT INTO class(classCode, className) VALUES ("FIN 310", "Finance"), ("MKTG 310", "Marketing"), ("BE 301", "Managerial Economics"), ("FIN 415", "Corporate Finance"), ("BUS 305", "Business Writing"), ("IST 320", "Fundamentals of Software Development"), 
("MGMT 410", "Human Resources Management"), ("JOUR 101", "Media and Society"), ("ARCE 101", "Introduction to Architectural Engineering"), ("BIOL 240", "Fundamentals of Human Anatomy")