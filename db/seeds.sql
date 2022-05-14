USE employeelist_DB;

INSERT INTO employee 
    (first_name, last_name, role_id, manager_id)
VALUES 
    ('Mikel', 'Balazic', 1, null),
    ('Ned', 'Shneebly', 2, 1),
    ('Fender', 'Bender', 2, 1),
    ('Hi', 'Bye', 4, 1),
    ('Gee', 'Lesmoosh', 3, 1),
    ('Entry', 'Level', 5, 2),
    ('Full', 'Stack', 6, null);

INSERT INTO department (department_name)
VALUES 
    ('Management'),
    ('Mining'),
    ('Farming'),
    ('Entertainment'),
    ('Event Planning');

INSERT INTO role (title, salary, department_id)
    ('General Manager', 120000, 1),
    ('Miner', 80000, 2),
    ('Farmer', 90000, 4),
    ('Singer', 40000, 3),
    ('Event Planner', 75000, 5),
    ('CEO', 250000, null);