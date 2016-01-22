var React = require('react');
var Link = require('react-router').Link;

var AppStore = require('../../stores/app-store.js');
var StoreWatchMixin = require('../../mixins/StoreWatchMixins')

var Catalog = React.createClass({
  render: function() {
    return (
      <tr>
        <td>
          <img src='/assets/product.png' alt="" />
        </td>
        <td>
          <h3>David Zhu</h3>
        </td>
      </tr>
    );
  }
});

module.exports = Catalog