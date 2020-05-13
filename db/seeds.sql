
USE project2_db;
INSERT INTO datanames (dataId, userResId, name, description, x_name, y_name)
	VALUES (1, 1, "US Cheese Consumption", "Per capita consumption of cheese (US)", "Year", "Pounds of Cheese")
;
INSERT INTO datavalues (dataId, x_value, y_value)
	VALUES
		(1, 2000, 29.8),
		(1, 2001, 30.1),
		(1, 2002, 30.5),
		(1, 2003, 30.6),
		(1, 2004, 31.3),
		(1, 2005, 31.7),
		(1, 2006, 32.6),
		(1, 2007, 33.1),
		(1, 2008, 32.7),
		(1, 2009, 32.8)
;
INSERT INTO datanames (dataId, userResId, name, description, x_name, y_name)
	VALUES (2, 1, "US Golf Course Revenue", "Total revenue generated by golf courses (US)", "Year", "Revenue")
;
INSERT INTO datavalues (dataId, x_value, y_value)
	VALUES
		(2, 2000, 16692),
		(2, 2001, 16862),
		(2, 2002, 17533),
		(2, 2003, 17291),
		(2, 2004, 18469),
		(2, 2005, 19356),
		(2, 2006, 20523),
		(2, 2007, 21195),
		(2, 2008, 21044),
		(2, 2009, 20326)
;
INSERT INTO userresults (userResId, data1, data2)
	VALUES (1, 1, 2)
;

INSERT INTO datanames (dataId, userResId, name, description, x_name, y_name)
	VALUES (3, 2, "US spending on science, space, and technology", "", "Year", "Millions of US Dollars")
;
INSERT INTO datavalues (dataId, x_value, y_value)
	VALUES
		(3, 1999, 18079),
		(3, 2000, 18594),
		(3, 2001, 19753),
		(3, 2002, 20734),
		(3, 2003, 20831),
		(3, 2004, 23029),
		(3, 2005, 23597),
		(3, 2006, 23584),
		(3, 2007, 25525),
		(3, 2008, 27731),
        (3, 2009, 29449)
;
INSERT INTO datanames (dataId, userResId, name, description, x_name, y_name)
	VALUES (4, 2, "Suicides by hanging, strangulation and suffucation", "", "Year", "Deaths (US)")
;
INSERT INTO datavalues (dataId, x_value, y_value)
	VALUES
		(4, 1999, 5427),
		(4, 2000, 5688),
		(4, 2001, 6198),
		(4, 2002, 6462),
		(4, 2003, 6635),
		(4, 2004, 7336),
		(4, 2005, 7248),
		(4, 2006, 7491),
		(4, 2007, 8161),
		(4, 2008, 8578),
        (4, 2009, 9000)
;
INSERT INTO userresults (userResId, data1, data2)
	VALUES (2, 3, 4)
;

INSERT INTO datanames (dataId, userResId, name, description, x_name, y_name)
	VALUES (5, 3, "Total revenue generated by arcades (US)", "", "Year", "Dollars in Millions")
;
INSERT INTO datavalues (dataId, x_value, y_value)
	VALUES
		(5, 2000, 1196),
		(5, 2001, 1176),
		(5, 2002, 1269),
		(5, 2003, 1240),
		(5, 2004, 1307),
		(5, 2005, 1435),
		(5, 2006, 1601),
		(5, 2007, 1654),
		(5, 2008, 1803),
        (5, 2009, 1734)
;
INSERT INTO datanames (dataId, userResId, name, description, x_name, y_name)
	VALUES (6, 3, "Computer science doctorates awarded (US)", "", "Year", "Degrees Awarded")
;
INSERT INTO datavalues (dataId, x_value, y_value)
	VALUES
		(6, 2000, 861),
		(6, 2001, 830),
		(6, 2002, 809),
		(6, 2003, 867),
		(6, 2004, 948),
		(6, 2005, 1129),
		(6, 2006, 1453),
		(6, 2007, 1656),
		(6, 2008, 1787),
        (6, 2009, 1611)
;
INSERT INTO userresults (userResId, data1, data2)
	VALUES (3, 5, 6)
;