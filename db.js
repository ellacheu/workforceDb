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
      const sql = 'INSERT INTO department (id, name) VALUES (?)';
      const params = [id, name];
  
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
 };