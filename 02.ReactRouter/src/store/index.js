const { composeWithDevTools } = require('redux-devtools-extension')
const { legacy_createStore } = require('redux');
const reducer = require('./reducers/index')
const enhancer = composeWithDevTools()

const store = legacy_createStore(reducer , enhancer)

module.exports = store
