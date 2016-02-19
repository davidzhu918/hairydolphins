import alt from '../alt';
import {assign} from 'underscore';

class SearchBoxActions {
  updateDate(date, id) {
  	return {date, id}
  }
  updateStartTime(time, id) {
  	return {time, id}
  }
  updateEndTime(time, id) {
  	return {time, id}
  }
  toggleAllDay(checked, id) {
  	return {checked, id}
  }
  removeEntry(id) {
  	return id
  }
  addEntry(event) {
  	return event
  }
}

export default alt.createActions(SearchBoxActions);