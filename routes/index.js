var express = require('express');
var router = express.Router();
require("node-jsx").install({extension: '.jsx', harmony: true});  //支持es6写法
var Index = require('../views/index.jsx');
var PostItem = require('../client/components/postItem/postItem.jsx');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
/* GET home page. */
router.get('/', function(req, res, next) {
	var html = ReactDOMServer.renderToStaticMarkup(React.createElement(Index, {title: 'HelloWorld'}));
	res.send(html);
  	// res.render('index', { title: 'Express', postItem: html });
});

module.exports = router;
