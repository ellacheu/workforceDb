const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'workforce_db',
  });

  const getAllDepartment = () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM department', (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  };

//wrong value count on row error

  const addDepartment = (id, name) => {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO department (name) VALUES (?)';
      const params = [id, name];

      connection.query(sql, params, (err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  };

  const getAllRole = () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM role', (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  };

  const addRole = (title, salary, department_id) => {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';
      const params = [title, salary, department_id];
      
    
      connection.query(sql, params, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };

  const getAllEmployee = () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM employee', (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  };

  const addEmployee = (first_name, last_name, role_id, manager_id) => {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
      const params = [first_name, last_name, role_id, manager_id];
    
      connection.query(sql, params, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };

  const updateEmployeeRole = (employee_id, role_id) => {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE employee SET role_id = ? WHERE employee_id = ?';
      const params = [employee_id, role_id];
    
      connection.query(sql, params, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };

  
  module.exports = { 
    getAllDepartment,
    addDepartment,
    getAllRole,
    addRole,
    getAllEmployee,
    addEmployee,
    updateEmployeeRole

 };