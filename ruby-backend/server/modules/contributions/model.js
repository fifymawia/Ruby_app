
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ContributionSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: [5, 'Title must be atleast 5 characters'],
  },
  description: {
    type: String,
    required: true,
    minlength: [10, 'Title must be atleast 5 characters'],
  },
  eventDate: {
    type: Date,
  },
  group: {
    type: Schema.Types.ObjectId,
    ref: 'Group',
  },
}, { timestamps: true }
);
module.exports = (mongoose.model('Contribution', ContributionSchema));