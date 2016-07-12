create table blogposts(
	id int primary key auto_increment,
	title varchar(50) NOT NULL,
	url varchar(200) NOT NULL,
	brief text  default NULL,
	post_date date default NULL,
	tag varchar(50) default NUll,
	meta varchar(50) default NULL,
	site varchar(20) default NULL,
	crawl_time DateTime NOT NULL default CURRENT_TIMESTAMP
);

create unique index url on blogposts (url);