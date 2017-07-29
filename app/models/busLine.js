var mongoose = require('mongoose');

module.exports = function(){
	
	const busline = mongoose.Schema({
		busLine: {
			type: String,
			required: true,
			index: {
				unique: true
			}
		}
	}, { collection: 'busline'});

	return mongoose.model('BusLine', busline);
	
};