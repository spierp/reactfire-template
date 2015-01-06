/** @jsx React.DOM */
var React = require('react');

var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({

	render: function() {
		return (
			<div>
	          <ul>
	            <li><Link to="App">Home</Link></li>
	            <li><Link to="sign_in">Sign In</Link></li>
	            <li><Link to="sign_up">Sign Up</Link></li>
	          </ul>  
			</div>
		);
	}

});

module.exports = Home;