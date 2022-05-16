const connection = require("../config/connection");

class DB {
    constructor(connection){
        this.connection = connection;
    }

    findAllEmployees(){
        return this.connection.promise().query(
            "SELECT * from employee"
        )
    }

    findAllDepartments(){
        return this.connection.promise().query(
            "SELECT * from department"
        )
    }

    findAllRoles(){
        return this.connection.promise().query(
            "SELECT * from role"
        )
    }

    addDepartment(department){
        console.log("answer from addDepartment on front end", department)
        return this.connection.promise().query(
            "INSERT INTO department SET ?", department
        )
    }

    addEmployee(employee){
        console.log("answer from addEmployee on front end", employee)
        return this.connection.promise().query(
            "INSERT INTO employee SET ?", employee
        )
    }

    addRole(role){
        console.log("answer from addRole on front end", role)
        return this.connection.promise().query(
            "INSERT INTO role SET ?", role
        )
    }

    updateEmployee({employee_id, role}){
        console.log("Employee update successful!", employee_id, role)
        return this.connection.promise().query(
            "UPDATE employee SET role_id = ? WHERE id = ?", [role, employee_id]
        )
    }
}

module.exports = new DB(connection)