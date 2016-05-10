// dao/blogSqlMapping.js
// CRUD SQL语句
var blog = {
	insert:'insert into blogposts(url, title, brief, post_date, site, tag, meta) values ?',
	update:'update blogposts set url=?, title=? where id=?',
	delete: 'delete from blogposts where id=?',
	queryById: 'select * from blogposts where id=?',
	queryAll: 'select * from blogposts'
};
 
module.exports = blog;