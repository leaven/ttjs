var cheerio = require('cheerio');
var blogDao = require('../dao/blogpost/blogDao.js');
var siteDao = require('../dao/site/siteDao.js');
var metaSort = require('../utils/metaSort.js');

module.exports = function(body, url) {
	var $ = cheerio.load(body);
	
	$('.article').each(function(i, item) {
		var url = 'http://taobaofed.org'+$(this).find('.thumbnail').attr('href');
		blogDao.selectByUrl(url, function(err, res) {
			if(!err && res.length == 0) {
				var	title = $(this).find('.title').text();
				//分类别
				var sort = metaSort(title);
				
				var contents = {
					url: url,
					title: title,
					brief: $(this).find('.article-excerpt').text().replace(/[\r\n\t]/g, '').replace(/<([a-zA-Z]+)>.*<\/[a-zA-Z]+>/g, ''),
					post_date: $(this).find('.date time').text(),
					site: 'taobaofed',
					tag: sort.tag.join(','),
					meta: sort.meta.join(',')
				};
				blogDao.add(contents);
			}else {
				console.log('already exist!');
			}
		}.bind(this));
	})
			
			// (url, title, brief, post_date, site, tag, meta)
			// siteDao.add({
			// 	name: 'taobaofed', 
			// 	url: url,
			// 	status: 1
			// });
		// }
	// })
	// return contents;
}