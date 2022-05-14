const mysql = require('mysql2');
const inquirer = require('inquirer');
const db = require("./db");

const questions = async () => {
    try {

        let answer = await inquirer.prompt({
            name: 'action',
            type: 'list',
            message: 'Please pick an action from the list below:',
            choices: [
                'View Employees',
                'View Departments',
                'View Roles',
                'Add Employees',
                'Add Departments',
                'Add Roles',
                'Update Employee Role',
                "Quit"
            ]
        })

        switch (answer.action) {
            case 'View Employees':
                viewEmployee();
                break;

            case 'View Departments':
                viewDepartment();
                break;

            case 'View Roles':
                viewRole();
                break;

            case 'Add Employees':
                addEmployee();
                break;

            case 'Add Departments':
                addDepartment();
                break;

            case 'Add Roles':
                addRole();
                break;

            case 'Update Employee Role':
                updateEmployee();
                break;
            default:
                quit();
                break;
        };

    } catch (err) {
        console.log(err)
    }
}

const viewEmployee = async () => {
    let [rows] = await db.findAllEmployees()
    let employees = rows;
    console.table(employees)
    questions()
}

const viewDepartment = async () => {
    let [rows] = await db.findAllDepartments()
    let departments = rows;
    console.table(departments)
    questions()
}

const viewRole = async () => {
    let [rows] = await db.findAllRoles()
    let roles = rows;
    console.table(roles)
    questions()
}

const addEmployee = async () => {

    await inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "What is the employee's first name?"
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the employee's last name?"
        }
    ])
        .then((answer) => {
            let firstName = answer.first_name;
            let lastName = answer.last_name

            db.findAllRoles()
                .then(([rows]) => {
                    let roles = rows;
                    const roleChoices = roles.map(({ id, title }) => ({
                        name: title,
                        value: id
                    }))

                    inquirer.prompt([
                        {
                            type: "list",
                            name: "role_id",
                            message: "What role is this employee going to be assigned to?",
                            choices: roleChoices
                        }
                    ])
                        .then((answer) => {
                            let roleId = answer.role_id
                            let managerId = null

                            let employee = {
                                first_name: firstName,
                                last_name: lastName,
                                role_id: roleId,
                                manager_id: managerId
                            }

                            db.addEmployee(employee)
                                .then(() => console.log(`Added ${employee.first_name} ${employee.last_name} to the database!`))
                                .then(() => questions());
                        })
                })
        })
}

const addDepartment = async () => {

    await inquirer.prompt([
        {
            type: "input",
            name: "department_name",
            message: "What is the name of the department you would like to add?"
        }
    ])
        .then((answer) => {
            console.log(answer)
            db.addDepartment(answer)
           
        }).then(() =>  questions())
}

const addRole = async () => {

    await inquirer.prompt([
        {
            type: "input",
            name: "role_name",
            message: "What would you like the name of the role to be?"
        },
        {
            type: "input",
            name: "salary",
            message: "What would you like the name of the role to be?"
        }
    ])
        .then((answer) => {
            db.findAllDepartments()
                .then(([rows]) => {
                    let departments = rows;
                    console.log(departments)
                    const depChoices = departments.map(({ id, department_name }) => ({
                        name: department_name,
                        value: id
                    }))

                    inquirer.prompt([
                        {
                            type: "checkbox",
                            name: "dep_id",
                            message: "What department is this role going to be assigned to?",
                            choices: depChoices
                        }
                    ])
                        .then((res) => {
                            console.log(res, 'dep_id', 'and first input answer', answer)

                            let role = {

                            }

                            db.addRole(role)
                                .then(() => console.log(`Added ${employee.first_name} ${employee.last_name} to the database!`))
                                .then(() => questions());
                        })
                })
        })
}
const updateEmployeePart2 = async () => {

    let [rows] = await db.findAllRoles()
    let roles = rows;
    const roleChoices = roles.map(({ id, title }) => ({
        value: id,
        name: title
    }))

    let rolesData = await inquirer.prompt([
        {
            type: "checkbox",
            name: "role",
            message: "Which role would you like this employee to be assigned to?",
            choices: roleChoices
        }
    ])
    return rolesData;
}

const updateEmployee = async () => {

    let [rows] = await db.findAllEmployees()
    let employee = rows;
    const employeeChoices = employee.map(({ id, first_name, last_name, role_id }) => ({
        name: `${first_name} ${last_name}`,
        value: id,
        role: role_id
    }))

    let { employee_id } = await inquirer.prompt([
        {
            type: "checkbox",
            name: "employee_id",
            message: "Which employee would you like to update?",
            choices: employeeChoices
        }
    ])

    let { role } = await updateEmployeePart2();

    await db.updateEmployee({ employee_id, role })
    questions()
}

    let quit = () => {
        console.log("~ GoodBye ~"); 
        process.exit(0);              
}

questions()