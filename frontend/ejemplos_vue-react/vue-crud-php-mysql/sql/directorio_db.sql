CREATE DATABASE directorio;

USE directorio;

CREATE TABLE personas(
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) UNIQUE,
  web VARCHAR(100) NOT NULL
);