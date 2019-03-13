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

INSERT INTO class(schoolOfStudy, classCode, className) VALUES ("Architecture & Design", "CE 767", "Introduction to Fracture Mechanics"), 
("Architecture & Design", "ARCE 641", "Power Systems Engineering"), ("Arts", "FMS 315", "Survey of Japanese Film"), 
("Arts", "SCUL 362", "Art and Ecology"), ("Business", "ACCT 543", "Intro to Auditing"), ("Business", "BSAN 330", "Project Management"),
("Education", "ELPS 302", "Educational Technology"), ("Education", "ELPS 250", "Education & Society"),
("Engineering", "AE 211", "Computing for Engineers"), ("Engineering", "EECS 443", "Digital Systems Design"),
("Journalism & Mass Communication", "JOUR 101", "Media and Society"), ("Journalism & Mass Communication", "JOUR 608", "Media Ethics"),
("Health Professions", "HEIM 325", "Pharmacology"), ("Health Professions", "HEIM 525", "Healthcare Database and Architecture"),
("Language, Literature & Culture", "GERM 112", "Introduction to German II"), ("Language, Literature & Culture", "SPAN 324", "Grammar and Composition"),
("Law", "LAW 809", "Contracts"), ("Law", "LAW 826", "Property"), ("Liberal Arts & Sciences", "CHEM 130", "General Chemistry I"),
("Medicine", "HP&M 810", "The Healthcare System"), ("Medicine", "HP&M 822", "Healthcare Economics"), ("Music", "MEMT 451", "Teaching Instrumental Music"),
("Music", "MTHC 115", "Theory II"), ("Nursing", "NURS 301", "Introduction to Professional Nursing"), ("Nursing", "NURS 303", "Communicating and Managing Healthcare Information"),
("Pharmacy", "CHEM 624", "Organic Chemistry"), ("Pharmacy", "CHEM 640", "Physical Chemistry"), ("Public Affairs & Administration", "UBPL 335", "Sustainability and Society"),
("Public Affairs & Administration", "UBPL 735", "Site Planning and Design"), ("Social Welfare", "SW 220", "Social Work, Social Welfare and US Society"),
("Social Welfare", "SW 530", "Human Behavior in the Social Environment");
