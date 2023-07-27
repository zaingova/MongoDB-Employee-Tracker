const { Schema, model } = require('mongoose');

const roleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true
  },
  department_id: {
    type: Schema.Types.ObjectId,
    ref: 'Department'
  }
});

const Role = model('Role', roleSchema);

module.exports = Role;