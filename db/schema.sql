
### Schema

-- PLEASE DON'T RUN THIS YET!!! JUST SAVING PROGRESS REMOTELY
DROP DATABASE IF EXISTS project2_db;
CREATE DATABASE project2_db;
USE project2_db;

-- holds all our data sets (optionally, or each data set with its own table)
CREATE TABLE data_names
(
	data_id INT NOT NULL,	-- manually set id to make inputting values easier
	`name` varchar(255) NOT NULL, -- should be a unique name for each data set but not enforced
    `description` varchar(255),
    x_name varchar(255),
    y_name varchar(255),
	PRIMARY KEY (data_id)
);

CREATE TABLE data_values
(
	data_id int NOT NULL, 	-- manually set id to make inputting values easier
	x_value INT NOT NULL, -- EXPECTING YEAR VALUES (ex: 2020)
	y_value DECIMAL(10,2) NOT NULL,
    
    FOREIGN KEY (data_id)
		REFERENCES data_names (data_id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT 
);

-- data set comparisons (data sets 1-2) and user ratings (running tally and totals to get percentage) all in one table
CREATE TABLE user_results
(
	id int NOT NULL AUTO_INCREMENT,
    data_set1 INT NOT NULL,
    data_set2 INT NOT NULL,
	correlation_votes INT DEFAULT 0, 
    causation_votes INT DEFAULT 0, 
    user_comment VARCHAR(255), -- optional
	PRIMARY KEY (id)
);


