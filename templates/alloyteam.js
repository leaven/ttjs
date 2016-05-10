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
		$('.articlemenu').each(function(i, item) {
			var $blogPost = $(this).find('.blogTitle'),
				title = $blogPost.text();
			
			//分类别
			var sort = metaSort(title);

			//mysql批量插入
			contents.push([
				$blogPost.attr('href'),
				$blogPost.text(),
				$(this).find('.text').text().replace(/[\r\n\t]/g, '').replace(/<([a-zA-Z]+)>.*<\/[a-zA-Z]+>/g, ''),
				$(this).find('.blogPs').text().replace(/.*\b(\d+)年(\d+)月(\d+)日.*/,'$1-$2-$3'),
				'alloyteam',
				sort.tag.join(','),
				sort.meta.join(',')
			]);
		})
		
		// console.log(contents);
		blogDao.add(contents);
		siteDao.add({
			name: 'alloyteam', 
			url: url,
			status: 1
		});
			}
		})
	
	// return contents;
}