DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department VARCHAR(45) NOT NULL,
  price INT default 0,
  quantity INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO products(product_name, department, price, quantity)
VALUES ("Bracelet", "Accessories", 9.99, 500);
INSERT INTO products(product_name, department, price, quantity)
VALUES ("Athletic shoe", "Fashion", 89.99, 125);
INSERT INTO products(product_name, department, price, quantity)
VALUES ("Book", "Books", 12.99, 450);
INSERT INTO products(product_name, department, price, quantity)
VALUES ("Sun glasses", "Accessories", 39.99, 200);
INSERT INTO products(product_name, department, price, quantity)
VALUES ("Dog food", "Pets", 17.99, 800);
INSERT INTO products(product_name, department, price, quantity)
VALUES ("Watch", "Jewelry", 199.99, 10);



