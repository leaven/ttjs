create table blog(
	id int primary key auto_increment,
	title varchar(50) NOT NULL,
	url varchar(50) NOT NULL,
	post_date date default NULL,
	tag varchar(50) default NUll,
	site varchar(20) default NULL,
	crawl_time timestamp NOT NULL default CURRENT_TIMESTAMP
);