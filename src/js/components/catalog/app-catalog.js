var React = require('react');
var Link = require('react-router').Link;
var DropdownButton = require('react-bootstrap/lib/DropdownButton');
var MenuItem = require('react-bootstrap/lib/MenuItem');

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
                  <DropdownButton title="choose time">
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another action</MenuItem>
                    <MenuItem eventKey="3" active>Active Item</MenuItem>
                  </DropdownButton>
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