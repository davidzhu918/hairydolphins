var React = require('react');

var Header = React.createClass({
	render: function() {
		return (
			<nav className="navbar navbar-default">
			  <div className="container">
			  	<div className='row'>
					<div className='col-sm-6'><h1>hairydolphins</h1></div>
				</div>
			  </div>
			</nav>
		);
	}
});

module.exports = Header;