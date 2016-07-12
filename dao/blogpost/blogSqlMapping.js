// dao/blogSqlMapping.js
// CRUD SQL语句
var blog = {
	insert:'insert into blogposts set ?',
	update:'update blogposts set url=?, title=? where id=?',
	queryByUrl: 'select * from blogposts where url=?',
	delete: 'delete from blogposts where id=?',
	queryById: 'select * from blogposts where id=?',
	queryAll: 'select * from blogposts'
};
 
module.exports = blog;