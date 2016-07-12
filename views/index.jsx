var React = require('react');
var Layout = require('./layout.jsx');

var Index = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },

  render: function() {
    return (
      <Layout title={this.props.title}>
        <h1>{this.props.title}</h1>
        <p>Welcome to {this.props.title}</p>
        <p>
          I can count to 10:
        </p>
        <div>{this.props.postItem}</div>
      </Layout>
    );
  }
});

module.exports = Index;