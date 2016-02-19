import React from 'react';
import {Link} from 'react-router';
import SearchBoxStore from '../stores/SearchBoxStore';
import SearchBoxActions from '../actions/SearchBoxActions';
import {first, without, findWhere} from 'underscore';
import DateTimeField from 'react-bootstrap-datetimepicker';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = SearchBoxStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    SearchBoxStore.listen(this.onChange);
  }

  componentWillUnmount() {
    SearchBoxStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleDateChange(ind, newDate) {
    SearchBoxActions.updateDate(newDate, ind);
  }

  handleStartTimeChange(ind, newTime) {
    SearchBoxActions.updateStartTime(newTime, ind);
  }

  handleEndTimeChange(ind, newTime) {
    SearchBoxActions.updateEndTime(newTime, ind);
  }

  handleAllDayCheck(ind, event) {
    var checked = event.target.checked;
    var id = ind;
    SearchBoxActions.toggleAllDay(checked, id);
  }

  render() {
    let dates = this.state.dates.map((date, ind) => {
      return (
        <div className='form-group' key={ind}>
          <div className='row'>
            <div className='col-sm-3'>
              <DateTimeField 
                dateTime={date.date}
                format='YYYY-MM-DD' 
                inputFormat='YYYY-MM-DD' 
                mode='date'
                onChange={this.handleDateChange.bind(this, ind)}
              />
            </div>

            <div className='col-sm-3'>
              <DateTimeField 
                dateTime={date.startTime}
                format='hh:mm A' 
                inputFormat='hh:mm A' 
                mode='time'
                onChange={this.handleStartTimeChange.bind(this, ind)}
              />
            </div>

            <div className='col-sm-3'>
              <DateTimeField 
                dateTime={date.endTime}
                format='hh:mm A' 
                inputFormat='hh:mm A'
                mode='time'
                onChange={this.handleEndTimeChange.bind(this, ind)}
              />
            </div>

            <div className='col-sm-2'>
              <input type='checkbox' ref='allday' onChange={this.handleAllDayCheck.bind(this, ind)}/>
              <label className='control-label' style={{marginLeft: '10px'}}>all day</label>
            </div>
            <div className='col-sm-1'>
              <button type="button" className="btn btn-secondary btn-sm" onClick={SearchBoxActions.removeEntry.bind(this, ind)}>
                <span className="glyphicon glyphicon-remove"></span>
              </button>
            </div>

          </div>
        </div>
      )
    });

    return (
      <div className='col-sm-8'>
        <div className='panel panel-default'>
          <div className='panel-heading'>Search Guides</div>
          <div className='panel-body'>
            <form>
              <div className='form-group'>
                <label className='control-label'>City</label>
                <input type='text' className='form-control' ref='cityField' autoFocus/>
                <span className='help-block'></span>
              </div>

              <div className='form-group'>
                <label className='control-label'>Date and Time</label>
                {dates}
              </div>
              
              <div className='form-group'>
                <input type='button' className='btn btn-secondary' value='Add Time' onClick={SearchBoxActions.addEntry}/>
              </div>

              <button type='submit' className='btn btn-primary btn-block'>Search</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBox;