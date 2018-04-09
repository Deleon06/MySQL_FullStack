create database burgers_db;

use burgers_db;

create table burgers (
    id int not null auto_increment,
    burger_name varchar(255),
    devoured int(111),
    t TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	d DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    primary key (id)
);