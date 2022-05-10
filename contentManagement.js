const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const util = require('util');
const { catchError, async } = require('rxjs');

let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'employeelist_DB'
});

connection.query = util.promisify(connection.query);

connection.connect(function (err){
    if (err) throw err;
    questions();
})

const questions = async () => {
    {
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
        'Update Employee Role'
        ]
        });
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
        };
    } //catch (err) {
        console.log(err);
        questions();
    //};
}

const viewEmployee = async () => {

}

const viewDepartment = async () => {

}

const viewRole = async () => {

}

const addEmployee = async () => {

}

const addDepartment = async () => {

}

const addRole = async () => {

}

const updateEmployee = async () => {

}