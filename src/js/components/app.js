/** @jsx React.DOM */
var React = require('react');
var Router = require('react-router-component');
var Template = require('./app-template.js');

var Locations = Router.Locations;
var Location = Router.Location;


var APP =
  React.createClass({
    render:function(){
      return (
        <Template>
        </Template>

        )
    }
  });
module.exports = APP;
