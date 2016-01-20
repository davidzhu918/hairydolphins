var React = require('react');
var Link = require('react-router').Link;

var AppStore = require('../../stores/app-store.js');
var StoreWatchMixin = require('../../mixins/StoreWatchMixins')
var AppActions = require('../../actions/app-actions.js')

function requests() {
    return {requests: AppStore.getRequests()}
}

var Datetime = React.createClass({
    mixins: [StoreWatchMixin(requests)],
    handleDateChange: function(event) {
        var myid = this.props.id;
        var newRequests = this.state.requests;
        newRequests.forEach(function(request, id) {
            if (id === myid) {
                request.date = event.target.value;
            }
        })
        this.setState({'requests': newRequests});
    },
    handleStartTimeChange: function(event) {
        var myid = this.props.id;
        var newRequests = this.state.requests;
        newRequests.forEach(function(request, id) {
            if (id === myid) {
                request.start_time = event.target.value;
            }
        })
        this.setState({'requests': newRequests});
    },
    handleEndTimeChange: function(event) {
        var myid = this.props.id;
        var newRequests = this.state.requests;
        newRequests.forEach(function(request, id) {
            if (id === myid) {
                request.end_time = event.target.value;
            }
        })
        this.setState({'requests': newRequests});
    },
    handler: function() {
        AppActions.removeTime(this.props.id)
    },
    render: function() {
        var myid = this.props.id;
        var date, start_time, end_time;
        this.state.requests.forEach(function(request, id) {
            if (id === myid) {
                date = request.date;
                start_time = request.start_time;
                end_time = request.end_time;
            }
        })
        return (
            <div>
                <br />
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" className='form-control' value={date} onChange={this.handleDateChange}/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" className='form-control' value={start_time} onChange={this.handleStartTimeChange}/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" className='form-control' value={end_time} onChange={this.handleEndTimeChange}/>
                    </div>
                    <div className="col-md-3">
                        <button type="button" className="btn btn-primary" onClick={this.handler}>x</button>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Datetime