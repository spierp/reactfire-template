/** @jsx React.DOM */
var React = require('react');

var App = require('./components/app');
var Sign_In = require('./components/authentication/app-signin.js');
var Sign_Up = require('./components/authentication/app-signup.js');
var Home = require('./components/app-home.js');

var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var routes = (
  <Route name="App" path="/" handler={App}>
    <Route name="sign_in" handler={Sign_In}/>
    <Route name="sign_up" handler={Sign_Up}/>
    <DefaultRoute handler={Home}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('main'));
});

