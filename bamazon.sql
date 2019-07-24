create database bamazon;
create table products (
id INT not null auto_increment,
productName varchar(45) null,
departmentName varchar(45) null,
price decimal(10,4)  null,
stockQuanity int null,
primary key (id),
)


