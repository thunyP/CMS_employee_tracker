import inquirer from 'inquirer';
import {
    viewAllDepartments,
    addDepartment,
    deleteDepartment,
    viewAllRoles,
    addRole,
    deleteRole,
    viewAllEmployees,
    addEmployee,
    deleteEmployee,
    updateEmployeeRole,
    viewEmployeesByManager,
    viewemployeesByDepartment,
    viewTotalSalaries
} from './query';

const mainMenu = async () => {
    let exit = false;
    while (!exit) {
        const { choices } =await inquirer.prompt({
            name:'choices',
            type: 'list',
            message: 'What do you want to do?',
            choices: [
                'View all departments',
                'Add a department',
                'Delete a department',
                'View all roles',
                'Add a role',
                'Delete a role',
                'View all employees',
                'Add an employee',
                'Delete an employee',
                'Update an employee role',
                'View employees by manager',
                'View employees by department',
                'View total salaries',
                'Exit'
            ]   
        });
        
    switch (choices) {
        case 'view all departments': 
            const departments = await viewAllDepartments();
            console.table(departments);
            break;
        case 'ad'
    }

    mainMenu();