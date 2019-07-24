DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
use bamazon;
CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  productName VARCHAR(45) NULL,
  departmentName VARCHAR(45) NULL,
  price decimal(11,2) null,
  stockQuanity int null,
  PRIMARY KEY (id)
);

INSERT INTO products(productName, departmentName, price, stockQuanity)
values("M240B Machine Gun", "Weapons", 18000, 7);

INSERT INTO products(productName, departmentName, price, stockQuanity)
values("MK1L 40mm Grenade Launcher", "Weapons", 6000.00, 1);

INSERT INTO products(productName, departmentName, price, stockQuanity)
values("Seadoo Gti pro", "WaterCraft", 6500, 12);

INSERT INTO products(productName, departmentName, price, stockQuanity)
values("OuterLimits 50 SL", "WaterCraft", 469000, 2);

INSERT INTO products(productName, departmentName, price, stockQuanity)
values("Honda CRF450x", "Motorcycles", 9599.00, 16);

INSERT INTO products(productName, departmentName, price, stockQuanity)
values("Ducati Supersport 900", "Motorcycles", 10500.00, 3);

INSERT INTO products(productName, departmentName, price, stockQuanity)
values("Ferrari Enzo", "Supercars", 3000000.00, 1);

INSERT INTO products(productName, departmentName, price, stockQuanity)
values("Bugatti Veyron", "Supercars", 1900000.00, 1);

INSERT INTO products(productName, departmentName, price, stockQuanity)
values("Lamborghini Sesto Elemento", "Supercars", 2200000.00, 1);

INSERT INTO products(productName, departmentName, price, stockQuanity)
values("Giant Inflatable Unicorn", "Toys", 65.00, 500);

select * from products;






