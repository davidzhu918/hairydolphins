var React = require('react');
var Link = require('react-router').Link;
var DateTimeField = require('react-bootstrap-datetimepicker');

var AppStore = require('../../stores/app-store.js');
var StoreWatchMixin = require('../../mixins/StoreWatchMixins')
var AppActions = require('../../actions/app-actions.js')

function requests() {
    return {requests: AppStore.getRequests()}
}

var Datetime = React.createClass({
  mixins: [StoreWatchMixin(requests)],
  handleCheckboxChange: function() {
    var myid = this.props.id;
    var newRequests = this.state.requests;
    newRequests.forEach(function(request, id) {
      if (id === myid) {
        request.all_day = !request.all_day;
      }
    })
    this.setState({'requests': newRequests});
  },
  handleDateChange: function(newDate) {
    var myid = this.props.id;
    var newRequests = this.state.requests;
    newRequests.forEach(function(request, id) {
      if (id === myid) {
        request.date = newDate;
      }
    })
    this.setState({'requests': newRequests});
  },
  handleStartTimeChange: function(newDate) {
    var myid = this.props.id;
    var newRequests = this.state.requests;
    newRequests.forEach(function(request, id) {
      if (id === myid) {
        request.start_time = newDate;
      }
    })
    this.setState({'requests': newRequests});
  },
  handleEndTimeChange: function(newDate) {
    var myid = this.props.id;
    var newRequests = this.state.requests;
    newRequests.forEach(function(request, id) {
      if (id === myid) {
        request.end_time = newDate;
      }
    })
    this.setState({'requests': newRequests});
  },
  handler: function() {
    AppActions.removeTime(this.props.id)
  },
  render: function() {
    var myid = this.props.id;
    var date, start_time, end_time, checked;
    this.state.requests.forEach(function(request, id) {
      if (id === myid) {
        date = request.date;
        start_time = request.start_time;
        end_time = request.end_time;
        checked = request.all_day;
      }
    })
    return (
      <tr>
        <td>
          <button type="button" className="btn btn-primary" onClick={this.handler}>x</button>
        </td>
        <td>
          <DateTimeField
              dateTime={date}
              inputFormat={'MM/DD/YY'}
              format={'YYYY-MM-DD'}
              mode={'date'}
              inputProps={{'disabled': checked}}
              onChange={this.handleDateChange}
          />
        </td>
        <td>
          <DateTimeField 
            dateTime={start_time}
            inputFormat={'hh:mm A'}
            format={'hh:mm A'}
            mode={'time'}
            inputProps={{'disabled': checked}}
            onChange={this.handleStartTimeChange}
          />
        </td>
        <td>
          <DateTimeField
            dateTime={end_time}
            inputFormat={'hh:mm A'}
            format={'hh:mm A'}
            mode={'time'}
            inputProps={{'disabled': checked}}
            onChange={this.handleEndTimeChange}
          />
        </td>
        <td><input type="checkbox" onChange={this.handleCheckboxChange}/></td>
        <td><p>entire day</p></td>
      </tr>
    );
  }
});

module.exports = Datetime