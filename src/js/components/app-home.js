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

	logOut: function () {
	    ref.unauth();
	    console.log("signed out?");
	    this.transitionTo('sign_in');
	  },

	render: function() {
		if (authData) {
			return (	
			<div>
				<h2>"You're signed in and at home"</h2>
	          <ul>
	            <li><Link to="App">Home</Link></li>
	            <li><Link to="sign_in">Sign In</Link></li>
	            <li><Link to="sign_up">Sign Up</Link></li>
	            <button onClick={this.logOut}>Log Out</button>         
	          </ul>  
			</div>
		);
		}
		else {
			return (	
			<div>
			{this.transitionTo('sign_up')}	
			</div>
		);
		}
	}
});

module.exports = Home;
