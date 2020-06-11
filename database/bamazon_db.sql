-- deletes database if it alrady exists -- 
DROP DATABASE IF EXISTS bamazon_db;

-- Creates database -- 
 CREATE DATABASE bamazon_db;
 
 -- Selects this database to use --
 USE bamazon_db;
 
 -- Creates database table --
 CREATE TABLE products (
 item_id INT NOT NULL AUTO_INCREMENT,
 product_name VARCHAR(75) NULL,
 department_name VARCHAR(50) NULL,
 price FLOAT(10) NULL,
 stock_quantity INT(10) NULL,
 PRIMARY KEY (item_id)
 );
 
 -- inserts baseline data into tables --
 INSERT INTO products ( product_name, department_name, price, stock_quantity)
 VALUE ("Kitten Mittens", "Pets", 10.00, 5);
 INSERT INTO products ( product_name, department_name, price, stock_quantity)
 VALUE ("Coffee pods", "Food", 2.00, 10);
 INSERT INTO products ( product_name, department_name, price, stock_quantity)
 VALUE ("Bread", "food", 3.00, 13);
 INSERT INTO products ( product_name, department_name, price, stock_quantity)
 VALUE ("Dragon", "Pets", 1000.00, 3);
 INSERT INTO products ( product_name, department_name, price, stock_quantity)
 VALUE ("Stick of Truth", "magic", 50.00, 1);
 INSERT INTO products ( product_name, department_name, price, stock_quantity)
 VALUE ("Elder Wand", "magic", 10000.00, 1);
 INSERT INTO products ( product_name, department_name, price, stock_quantity)
 VALUE ("Dice", "toys", 1.00, 30);
 INSERT INTO products ( product_name, department_name, price, stock_quantity)
 VALUE ("Low Orbit Ion Cannon", "software", 29.99, 6);
 INSERT INTO products ( product_name, department_name, price, stock_quantity)
 VALUE ("Guizmo", "pets", 500, 1);
 INSERT INTO products ( product_name, department_name, price, stock_quantity)
 VALUE ("Pink Panther Diamond", "jewelry", 50000, 1);



 
 -- Displays table --
 SELECT * FROM products;



 
 
 
 
 
 
 
 
 
 