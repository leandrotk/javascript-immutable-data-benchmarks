const { fromJS } = require('immutable');
const { array, obj } = require('./mocks');

exports.objectFromJS = () => fromJS(obj);;
exports.arrayFromJS = () => fromJS(array);;
