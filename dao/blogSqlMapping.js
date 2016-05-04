// dao/blogSqlMapping.js
// CRUD SQL语句
var blog = {
	insert:'insert into blog(url, title) values ?',
	update:'update blog set url=?, title=? where id=?',
	delete: 'delete from blog where id=?',
	queryById: 'select * from blog where id=?',
	queryAll: 'select * from blog'
};
 
module.exports = blog;