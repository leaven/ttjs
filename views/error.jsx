var React = require('react');
var Layout = require('./layout.jsx');

var Error = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },

  render: function() {
    return (
      <Layout title='404'>
        <h1>404</h1>
        <p>404 NOT FOUND</p>
        
      </Layout>
    );
  }
});

module.exports = Error;
