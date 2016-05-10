/**
 * @des 关键词归类
 */
var tags = require('../conf/tag.js');

module.exports = function(title) {
	var meta = [],
		tag = [];

	//对title进行归类
	tags.forEach(function(v, k) {
		var reg = new RegExp(v.regs.join('|'),'gi');
		var titleMeta = title.match(reg);
		
		if(titleMeta && titleMeta.length) {
			meta = meta.concat(titleMeta);
			tag = tag.concat([v.tag]);
		}
	});
	return {
		meta: meta,
		tag: tag
	}
}