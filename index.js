const inquirer = require('inquirer');
const mysql = require('mysql2');
const db = require('./db');

const NavMenu = async () => {
    const { action } = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'Select an action:',
        choices: [
          'View departments',
          'Add new department',
          'View roles',
          'Add new role',
          'View employees',
          'Add new employee',
          'Update employee role',
          'Exit',
        ],
      },
    ]);

    switch(action) {
        case 'View departments':
        await viewDepartments();
    break;
        case 'Add new department':
        await addDepartment();
    break;
        case 'View roles':
        await viewRole();
    break;
        case 'Add new role':
        await addRole();
    break;
        case 'View employee':
        await viewEmployee();
    break;
        case 'Add new employee':
        await addEmployee();
    break;
        case 'Update employee role':
        await updateEmployeeRole();
    break;
        default: 
        console.log('Invalid input');
    break;    
        case 'Exit':
        console.log('Goodbye!');
    return;
    }
  
  };

const viewDepartments = async () => {
    try {
        const department = await db.getAllDepartment();
        console.log('Departments');
        console.table(department);
    } catch (error) {
        console.error('Unable to retrieve departments', error);
    }
};

const addDepartment = async () => {
    const department = await inquirer.prompt([
        {
            type: 'input',
            name: 'id',
            message: 'Enter department id'
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter department name',
        },
    ]);
    try {
        const newDepartment = await db.addDepartment(department.name);
        console.log('Department added', newDepartment);
    } catch (error) {
        console.error ('Unable to add department', error);
    }
};

const viewRole = async () => {
    try {
        const role = await db.getAllRole();
        console.log('Roles');
        console.table(role);
    } catch (error) {
        console.error('Unable to retrieve roles');
    }
};

const addRole = async () => {
    const role = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter new role',
        }
    ]);
    try {
        const newRole = await db.addRole(role.name);
        console.log('Role added', newRole);
    } catch (error) {
        console.error ('Unable to add new role', error);
    }
};

const viewEmployee = async () => {
    try {
        const role = await db.getAllEmployee();
        console.log('Employees');
        console.table(employee);
    } catch (error) {
        console.error('Unable to retrieve employees');
    }
};

const addEmployee = async () => {
    const { first_name } = await inquirer.prompt([
        {
          type: 'input',
          name: 'first_name',
          message: 'Enter the first name of the employee:',
        },
      ]);
      const { last_name } = await inquirer.prompt([
        {
          type: 'input',
          name: 'last_name',
          message: 'Enter the last name of the employee:',
        },
      ]);
      const { role_id } = await inquirer.prompt([
        {
          type: 'input',
          name: 'role_id',
          message: 'Enter the role ID of the employee:',
        },
      ]);
      const { manager_id } = await inquirer.prompt([
        {
          type: 'input',
          name: 'manager_id',
          message: 'Enter the manager ID of the employee:',
        },
      ]);
    try {
        const newEmployee = await db.addEmployee(first_name, last_name, role_id, manager_id);
        console.log('Employee added', newEmployee);
    } catch (error) {
        console.error ('Unable to add new employee', error);
    }
};

const updateEmployeeRole = async () => {
    const { employeeId } = await inquirer.prompt ([
      {
        type: 'input',
        name: 'employeeId',
        message: 'Enter employee Id'
      },
    ]);

    const { roleId } = await inquirer.prompt([
      {
        type: 'input',
        name: 'roleId',
        message: 'Enter new role Id',
      },
    ]);

    try {
      const updateEmployeeRole = await db.updateEmployeeRole(employeeId, roleId);
      console.log('Employee updated', updateEmployeeRole);
    } catch (error) {
      console.error ('Unable to update', error)
    }
  };


  NavMenu();