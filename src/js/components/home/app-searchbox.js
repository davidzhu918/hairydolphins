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
            <div>
                <div>
                    <input type="text" className="form-control" placeholder="Where do you want to go?" />
                    <span />
                </div>
                {requests}
                <br />
                <button type="button" className="btn btn-primary btn-md btn-block" onClick={this.handler}>Add Time and Date</button>
            </div>
        );
    }
});

module.exports = SearchBox