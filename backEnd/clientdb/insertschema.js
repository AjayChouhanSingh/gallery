// Setup schema

var mongoose = require('mongoose');

var insertSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Export Contact model
var Insert = module.exports = mongoose.model('insert', insertSchema);
