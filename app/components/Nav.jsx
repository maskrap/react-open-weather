var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Nav Component</h2>
          <IndexLink to='/' activeClassName="active">Get the Weather</IndexLink>
          <Link to='about' activeClassName="active">About</Link>
      </div>
    );
  }
});

module.exports = Nav;
