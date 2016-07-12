var cheerio = require('cheerio');
var blogDao = require('../dao/blogpost/blogDao.js');
var siteDao = require('../dao/site/siteDao.js');
var metaSort = require('../utils/metaSort.js');

module.exports = function(body, url) {
	var $ = cheerio.load(body);
		
	//提取信息
	$('.articlemenu').each(function(i, item) {
		var $blogPost = $(this).find('.blogTitle'),
			title = $blogPost.text(),
			url = $blogPost.attr('href');

		blogDao.selectByUrl(url, function(err, res) {
			if(!err && res.length == 0) {
				//分类别
				var sort = metaSort(title);
				var contents = {
					url: url,
					title: title,
					brief: $(this).find('.text').text().replace(/[\r\n\t]/g, '').replace(/<([a-zA-Z]+)>.*<\/[a-zA-Z]+>/g, ''),
					post_date: $(this).find('.blogPs').text().replace(/.*\b(\d+)年(\d+)月(\d+)日.*/,'$1-$2-$3'),
					site: 'alloyteam',
					tag: sort.tag.join(','),
					meta: sort.meta.join(',')
				}
				blogDao.add(contents);
			}else {
				console.log('already exist!');
			}
		}.bind(this));
	})
		
		// console.log(contents);
		
		// siteDao.add({
		// 	name: 'alloyteam', 
		// 	url: url,
		// 	status: 1
		// });
	
	// return contents;
}