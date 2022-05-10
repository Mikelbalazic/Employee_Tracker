INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Mikel', 'Balazic', 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Ned', 'Shneebly', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Fender', 'Bender', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Hi', 'Bye', 4, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Gee', 'Lesmoosh', 3, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Entry', 'Level', 5, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Full', 'Stack', 6, null);

INSERT INTO department (department_name)
VALUES ('Management');
INSERT INTO department (department_name)
VALUES ('Mining');
INSERT INTO department (department_name)
VALUES ('Farming');
INSERT INTO department (department_name)
VALUES ('Entertainment');
INSERT INTO department (department_name)
VALUES ('Event Planning');

INSERT INTO role (title, salary, department_id)
VALUES ('General Manager', 120000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ('Miner', 80000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ('Farmer', 90000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ('Singer', 40000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ('Event Planner', 75000, 5);
INSERT INTO role (title, salary, department_id)
VALUES ('CEO', 250000, null);