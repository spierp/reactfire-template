/** @jsx React.DOM */
var React = require('react');
var Header = require('./header/app-header.js');


var Sign_In = require('./authentication/app-signin.js');
var Sign_Up = require('./authentication/app-signup.js');

var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var App =
  React.createClass({
    render:function(){
      return  (
        <div className="container">
        <RouteHandler/>
        </div>
        )
    }
  });

module.exports = App;
