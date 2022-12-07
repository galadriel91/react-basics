const { combineReducers } = require('redux');
const numberReducer = require('./numberReducer')

module.exports = combineReducers({
    number:numberReducer
})