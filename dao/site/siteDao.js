// dao/blogDao.js
// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('../../conf/db.js');
var $sql = require('./siteSqlMapping');

// 使用连接池，提升性能
var pool  = mysql.createPool($conf.mysql);
// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret,err) {
	if(typeof ret === 'undefined') {
		res.json({
			code:'1',
			msg: '操作失败',
			errmsg: err
		});
	} else {
		res.json(ret);
	}
};
 

module.exports = {
	add: function (data) {
		pool.getConnection(function(err, connection) {
			// 建立连接，向表中插入值
			// 'INSERT INTO site(name, url, status) VALUES(?,?,?)',
			connection.query($sql.insert, data, function(err, result) {
				if(err) {
					throw err;
				}
				if(result) {
					result = {
						code: 200,
						msg:'增加成功',
						content: data
					};    
				}
 				
				// 以json形式，把操作结果返回给前台页面
				//jsonWrite(res, result,err);
 				console.log('success');
				// 释放连接 
				connection.release();
			});
		});
	},
	select: function (req, res, next) {
		pool.getConnection(function(err, connection) {
			connection.query($sql.queryAll, function (err, result) {
				if(result) {
					result = {
						code: 200,
						msg:'查询成功',
						content: result
					};    
				}
 
				// 以json形式，把操作结果返回给前台页面
				jsonWrite(res, result,err);
 
				// 释放连接 
				connection.release();
			})
		});
	},
	selectByUrl: function(url, callback) {
		pool.getConnection(function(err, connection) {
			
			connection.query($sql.queryByUrl, url, function (err, result) {
				if(err) throw err;
				callback(null, result)
				connection.release();
			})
		})
	} 
};