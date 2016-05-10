create table sites(
	id int primary key auto_increment,
	name varchar(20) NOT NULL,
	url varchar(50) NOT NULL,
	status boolean  default 0,
	crawl_time timestamp NOT NULL default CURRENT_TIMESTAMP
);