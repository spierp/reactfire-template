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

var SignUp = React.createClass({
		mixins: [Navigation],

		  handleForm: function(e) {
		    event.preventDefault();

		    userEmail = this.refs.email.getDOMNode().value,
		    userPassword = this.refs.password.getDOMNode().value,

			ref.createUser({
		      email: userEmail,
		      password: userPassword,
			}, function(error) {
			  if (error === null) {
				    console.log("User created successfully");
					ref.authWithPassword({
					  email: userEmail,
					  password: userPassword,
					}, function(error, authData) {
					  if (error) {
					    console.log("Login Failed!", error);
					  } else {
					    console.log("Authenticated successfully with payload:", authData);
					    {this.transitionTo('App')}	
					  }
					});
			  } else {
			    console.log("Error creating user:", error);
			    this.refs.userForm.getDOMNode().reset();
			  }
			});



		  },

	render: function() {
		if (authData) {
			return (
			<div>	
			{console.log("logged in, transition to home"),
			this.transitionTo('App')}	
			</div>
		);
		}
		else {
			return (	
			<div>
		      <form ref="userForm" id="createUserForm" className="container" onSubmit={this.handleForm}>

		        <div className="form-group">

		          <input ref="email" type="text" className="form-control" placeholder="Email" />
		          <input ref="password" type="password" className="form-control" placeholder="Password" />

		          <button type="submit" className="btn btn-primary btn-block">Add</button>
		        </div>

		      </form>
			</div>
		);
		}
	}
});

module.exports = SignUp;
