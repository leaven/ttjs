var cheerio = require('cheerio');
var blogDao = require('../dao/blogDao.js');
var siteDao = require('../dao/site/siteDao.js');
var metaSort = require('../utils/metaSort.js');

module.exports = function(body, url) {
	var $ = cheerio.load(body);
	var contents = [];
	siteDao.selectByUrl(url, function(err, res) {
		if(!err && res.length == 0) {
			//提取信息
			$('.article').each(function(i, item) {
				var	title = $(this).find('.title').text();
				//分类别
				var sort = metaSort(title);

				//mysql批量插入
				contents.push([
					'http://taobaofed.org'+$(this).find('.thumbnail').attr('href'),
					title,
					$(this).find('.article-excerpt').text().replace(/[\r\n\t]/g, '').replace(/<([a-zA-Z]+)>.*<\/[a-zA-Z]+>/g, ''),
					$(this).find('.date time').text(),
					'taobaofed',
					sort.tag.join(','),
					sort.meta.join(',')
				]);
			})
			
			// console.log(contents);
			blogDao.add(contents);
			siteDao.add({
				name: 'taobaofed', 
				url: url,
				status: 1
			});
		}
	})
	// return contents;
}