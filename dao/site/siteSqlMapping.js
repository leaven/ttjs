// dao/site/siteSqlMapping.js
// CRUD SQL语句

var site = {
	insert:'insert into sites set ?',
	queryByUrl: 'select * from sites where url=?',
	queryBySite: 'select * from sites where name=?',
	queryAll: 'select * from sites'
};
 
module.exports = site;