const { Employee, Role, Department } = require('../models');
var Promise = require('bluebird');

const resolvers = {
  Query: {
    employees: async (parent) => {
      // first create ibject
      const employees = await
        Employee.findAll()
          .populate('role_id')
          .populate('manager_id');
      const employeesArray = employees.map();

      console.log(employeesArray);
      return employeesArray;
    },
    roles: async (parent, args) => {

    },
    departments: async (parent, args) => {

    }
  },

  Mutation: {
    addEmployee: async (parent, { first_name, last_name }) => {
      try {
        // creates a new employee using the arguments provided, and populates the role_id and manager_id fields
        const employee = await
          Employee.create({ first_name, last_name });
        //.populate('role_id')
        //.populate('manager_id');
        console.log(employee);
        return employee;
      } catch (e) {
        throw new Error(e);
      }
    },

    addRole: async (parent, args) => {
      try {
        // creates a new role using the arguments provided, and populates the department_id field
        const role = await Role
          .create(args)
          .populate('department_id');

        return role;
      } catch (e) {
        throw new Error(e);
      }
    },

    addDepartment: async (parent, { name }) => {
      try {
        // creates a new department using the arguments provided
        const department = await Department.create({ name });
        return department;
      } catch (e) {
        throw new Error(e);
      }
    },

    removeEmployeeById: async (parent, args) => {
      try {
        // finds employee by args provided and deletes it
        await Employee.findByIdAndDelete(args);
        // returns the args, which should be the employee ID
        return (args);
      } catch (e) {
        throw new Error(e);
      }
    },

    removeRoleById: async (parent, args) => {
      try {
        // finds role by args provided and deletes it
        await Role.findByIdAndDelete(args);
        // returns the args, which should be the role ID
        return (args);
      } catch (e) {
        throw new Error(e);
      }
    },

    removeDepartmentById: async (parent, args) => {
      try {
        // finds department by args provided and deletes it
        await Department.findByIdAndDelete(args);
        // returns the args, which should be the department ID
        return (args);
      } catch (e) {
        throw new Error(e);
      }
    },
  }
}