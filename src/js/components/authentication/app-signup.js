/** @jsx React.DOM */
var React = require('react');

var Router = require('react-router');
var Link = Router.Link;


var SignUp = React.createClass({
	render: function() {
		return (
			<div>
			<h2>Sign Up</h2>
	          <ul>
	            <li><Link to="App">Home</Link></li>
	            <li><Link to="sign_in">Sign In</Link></li>
	            <li><Link to="sign_up">Sign Up</Link></li>
	          </ul> 
	        </div> 	
		);
	}

});

module.exports = SignUp;