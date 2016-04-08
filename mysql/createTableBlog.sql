create table blog(
	id int primary key auto_increment,
	title varchar(20) NOT NULL unique,
	url varchar(50) NOT NULL,
	post_date date default NULL,
	crawl_time timestamp NOT NULL default CURRENT_TIMESTAMP
);