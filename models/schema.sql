-- DROP DATABASE IF EXISTS exampledb;
-- CREATE DATABASE exampledb;

-- DROP DATABASE IF EXISTS testdb;
-- CREATE DATABASE testdb;

### Schema
-- PLEASE DON'T RUN THIS!!! JUST SAVING PROGRESS REMOTELY.
-- ULTITELY TABLES SHOULD BE CREATED WITH SEQUELIZE.
DROP DATABASE IF EXISTS project2_db;
CREATE DATABASE project2_db;
USE project2_db;

-- holds all our data sets (optionally, or each data set with its own table)
CREATE TABLE data
(
	id int NOT NULL AUTO_INCREMENT,
	set_name varchar(255) NOT NULL, -- should be a unique name for each data set but not enforced
	x_values INT NOT NULL, -- expecting year
	y_values DECIMAL(10,2) NOT NULL,
	PRIMARY KEY (id)
);

-- data set comparisons (data sets 1-2) and user ratings (running tally and totals to get percentage) all in one table
CREATE TABLE comparisons
(
	id int NOT NULL AUTO_INCREMENT,
    data_set1 INT NOT NULL,
    data_set2 INT NOT NULL,
	correlation_votes INT DEFAULT 0, 
    causation_votes INT DEFAULT 0, 
    user_comment VARCHAR(255), -- optional
	PRIMARY KEY (id)
);


