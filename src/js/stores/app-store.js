var AppConstants = require('../constants/app-constants');
var AppDispatcher = require('../dispatchers/app-dispatcher');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _timeRequests = [];

var time = {
  'date': '2016-01-01',
  'start_time': '08:00 AM',
  'end_time': '05:00 PM',
  'all_day': false
}

_timeRequests.push(time); 

function _removeTime(index) {
  _timeRequests.splice(index, 1);
}

function _addTime() {
  var time = {
    'date': '2016-01-01',
    'start_time': '08:00',
    'end_time': '05:00',
    'all_day': false
  }
  if (_timeRequests.length > 0) {
    var last_time = _timeRequests[_timeRequests.length - 1];
    time.date = last_time.date;
    time.start_time = last_time.start_time;
    time.end_time = last_time.end_time;
  }
  
  _timeRequests.push(time);
}

var AppStore = assign(EventEmitter.prototype, {
  emitChange: function(){
    this.emit(CHANGE_EVENT)
  },

  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback)
  },

  getRequests: function(){
    return _timeRequests
  },

  dispatcherIndex: AppDispatcher.register(function(payload){
    var action = payload.action; // this is our action from handleViewAction
    switch(action.actionType){
      case AppConstants.ADD_TIME:
        _addTime();
        break;

      case AppConstants.REMOVE_TIME:
        _removeTime(payload.action.index);
        break;
    }

    AppStore.emitChange();

    return true;
  })

})

module.exports = AppStore;

