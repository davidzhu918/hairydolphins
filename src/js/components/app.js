var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link  = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;

var Home = require('./home/app-home');
var Template = require('./app-template');

var App = React.createClass({
	render: function() {
		return (
			<Router>
				<Route path="/" component={Template}>
					<IndexRoute component={Home} />
				</Route>
			</Router>
		)
	}
});

module.exports = App;