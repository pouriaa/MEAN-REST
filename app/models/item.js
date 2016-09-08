// grab the mongoose module
var mongoose = require('mongoose');
var Schema       = mongoose.Schema;

var ItemSchema = new Schema({
	name: String
})

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Item', ItemSchema);