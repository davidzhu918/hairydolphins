import alt from '../alt';
import SearchBoxActions from '../actions/SearchBoxActions';

class SearchBoxStore {
  constructor() {
    this.bindActions(SearchBoxActions);
    this.dates = [{
    	'date': '2016-01-01',
    	'startTime': '10:00 AM',
    	'endTime': '05:00 PM'
    }];
  }

  onUpdateDate(obj) {
  	var id = obj.id;
  	var dateVal = obj.date;
  	
  	var date = this.dates[id];
  	date['date'] = dateVal;
  	this.dates[id] = date;

  }

  onUpdateStartTime(obj) {
  	var id = obj.id;
  	var timeVal = obj.time;

  	var date = this.dates[id];
  	date['startTime'] = timeVal;
  	this.dates[id] = date;
  }

  onUpdateEndTime(obj) {
  	var id = obj.id;
  	var timeVal = obj.time;

  	var date = this.dates[id];
  	date['endTime'] = timeVal;
  	this.dates[id] = date;

  }

  onToggleAllDay(obj) {
  	if(obj.checked) {
  		var date = this.dates[obj.id];
  		date['startTime'] = '12:00 AM';
	  	date['endTime'] = '11:59 PM';
	  	this.dates[obj.id] = date;
  	}
  }

  onRemoveEntry(id) {
  	this.dates.splice(id, 1);
  }

  onAddEntry(event) {
 	var newDate = {
    	'date': '2016-01-01',
    	'startTime': '10:00 AM',
    	'endTime': '05:00 PM'
    }
    this.dates.push(newDate);
  }

}

export default alt.createStore(SearchBoxStore);