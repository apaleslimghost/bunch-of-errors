var createError = require('custom-error-generator');

module.exports = function(obj) {
	var out = {};
	for(var k in obj) if(obj.hasOwnProperty(k)) {
		out[k] = createError(k, {}, obj[k] instanceof Function ? obj[k] : null);
	}
	return out;
};
