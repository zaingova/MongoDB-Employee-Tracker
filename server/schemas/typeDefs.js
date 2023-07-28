const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Employee {
    _id: ID!
    first_name: String!
    last_name: String!
    role_id: ID
    manager_id: ID
  }

  type Department {
    name: String!
  }

  type Role {
    title: String!
    salary: Float!
    department_id: ID
  }

  type Query {
    employees: [Employee]
    roles: [Role]!
    departments: [Department]!
  }

  type Mutation {
    addEmployee(first_name: String!, last_name: String!, role_id: ID, manager_id: ID): Employee
    addRole(title: String!, salary: Float!, department_id: ID): Role
    addDepartment(name: String!): ID
    removeEmployeeById(_id: ID!): ID
    removeRoleById(_id: ID!): ID
    removeDepartmentById(_id: ID!): ID
  }
`;

module.exports = typeDefs;