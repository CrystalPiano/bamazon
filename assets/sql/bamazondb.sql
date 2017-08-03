drop database bamazondb;

create database bamazondb;

USE bamazondb;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NULL,
    department_name VARCHAR(100) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT NULL,
    PRIMARY KEY (item_id)
    );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shake Weight", "fitness", 19.99, 999), ("Cool Water Bottle", "fitness", 9.99, 100),
("Reusable Rocket", "space", 12000000.00, 3), ("NASA Tee Shirt", "space", 14.99, 250),
("Dog Leash", "pets", 9.99, 75), ("Dog Food", "pets", 49.99, 50), ("Human Food", "food", 24.50, 100),
("Massive Square Watermelon", "food", 12.99, 8), ("Chunk Of Gold", "commodities", 799.99, 20),
("Chunk Of Coal", "commodities", 4.99, 595);