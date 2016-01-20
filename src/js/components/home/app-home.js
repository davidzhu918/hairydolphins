var React = require('react');
var Link = require('react-router').Link;
var SearchBox = require('./app-searchbox.js');

var AppStore = require('../../stores/app-store.js');
var StoreWatchMixin = require('../../mixins/StoreWatchMixins')

var Home = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SearchBox />
        </div>
      </div>
    );
  }
});

module.exports = Home