DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
use bamazon;
CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  productName VARCHAR(45) NULL,
  departmentName VARCHAR(45) NULL,
  price decimal(10,4) null,
  stockQuanity int null,
  PRIMARY KEY (id)
);


