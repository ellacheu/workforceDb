INSERT INTO department (id, name) VALUES
(5, 'Sales'),
(6, 'Research'),
(7, 'Customer Service'),
(8, 'Engineering');

INSERT INTO role (id, title, salary, department_id) VALUES
(5, 'Sales Representative', 60000, 5),
(6, 'Research Scientist', 72000, 6),
(7, 'Customer Support Specialist', 55000, 7),
(8, 'Software Engineer', 90000, 8);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES
(6, 'Emily', 'Anderson', 5, 2),
(7, 'Daniel', 'Miller', 6, NULL),
(8, 'Olivia', 'Brown', 7, 6),
(9, 'William', 'Taylor', 8, NULL),
(10, 'Sophia', 'Moore', 8, 9);