const { Schema, model } = require('mongoose');

const employeeSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  role_id: {
    type: Schema.Types.ObjectId,
    ref: 'Role'
  },
  manager_id: {
    type: Schema.Types.ObjectId,
    ref: this
  }
});

const Employee = model('Employee', employeeSchema);

module.exports = Employee;