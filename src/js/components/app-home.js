/** @jsx React.DOM */
var React = require('react');
var Firebase = require('firebase');

var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var Navigation = require('react-router').Navigation;

var ref = new Firebase("https://reactfire-template.firebaseio.com");
var authData = ref.getAuth();

var Home = React.createClass({
	mixins: [Navigation],
	render: function() {
		if (authData) {
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
		else {
		this.transitionTo('sign_up');	
		}
	}
});

module.exports = Home;
