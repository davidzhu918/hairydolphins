var React = require('react');
var Link = require('react-router').Link;

var AppStore = require('../../stores/app-store.js');
var StoreWatchMixin = require('../../mixins/StoreWatchMixins')
var CatalogItem = require('./app-catalogitem')

var Catalog = React.createClass({
  render: function() {
    return (
      <div id="wrapper">
        <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li className="sidebar-brand">
                    <a href="">
                        Start Bootstrap
                    </a>
                </li>
                <li>
                    <a href="">Dashboard</a>
                </li>
                <li>
                    <a href="">Shortcuts</a>
                </li>
                <li>
                    <a href="">Overview</a>
                </li>
                <li>
                    <a href="">Events</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Services</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
        </div>

        <div id="page-content-wrapper">
          <div className="container-fluid">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <CatalogItem />
                <CatalogItem />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Catalog