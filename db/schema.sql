### Schema

create database burgers_db;

use  burgers_db;

create table burger(
id int auto_increment not null,
burger_name varchar (64) not null ,
devoured boolean default false,
primary key (id)
);
