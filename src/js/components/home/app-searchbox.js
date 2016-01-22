var React = require('react');
var Link = require('react-router').Link;

var Datetime = require('./app-datetime.js');
var AppStore = require('../../stores/app-store.js');
var AppActions = require('../../actions/app-actions.js')
var StoreWatchMixin = require('../../mixins/StoreWatchMixins')

function requests() {
  return {requests: AppStore.getRequests()}
}

var SearchBox = React.createClass({
  mixins: [StoreWatchMixin(requests)],
  handler: function() {
    AppActions.addTime()
  },
  render: function() {
    var requests = this.state.requests.map(function(request, i){
      return (
        <Datetime key={i} request={request} id={i}/>
      );
    })
    return (
      <div className="searchbox">
        <div>
          <input type="text" className="form-control" placeholder="Where do you want to go?" />
          <span />
        </div>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Date</th>
              <th>Start time</th>
              <th>End time</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {requests}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="6" className="text-left">
                <button type="button" className="btn btn-secondary btn-md" onClick={this.handler}>Add Time and Date</button>
              </td>
            </tr>
          </tfoot>
        </table>
        <br />
        <br />
        <Link to={'/catalog'} className="btn btn-primary btn-md btn-block">Search</Link>
      </div>
    );
  }
});

module.exports = SearchBox