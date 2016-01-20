var AppConstants = require('../constants/app-constants');
var AppDispatcher = require('../dispatchers/app-dispatcher');

var AppActions = {
  addTime: function() {
    AppDispatcher.handleViewAction({
      //an action
      actionType: AppConstants.ADD_TIME,
    })
  },
  removeTime: function(index) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.REMOVE_TIME,
      index: index
    })
  },
}

module.exports = AppActions;