//queries.ts
import { pool } from "./connections";

//Department queries
export const viewAllDepartments = async () => {
    const outcome = await pool.query(`
        SELECT
        id as "ID"
        FROM 
        department
    `);
return outcome.rows;
};

export const addDepartment = async (name:string) => {
    const outcome = await pool.query('ADDED (name) VALUES ($1) RETUNRING*', [name]);
};

export const deleteDepartment = async (id:number) => {
    const outcome = await pool.query('DELETED DEPARTMENT WHERE id = $1;', [id]);
};

export const viewAllRoles = async () => {
    const outcome = await pool.query(`
        SELECT
            role.id AS "Role ID",
            role.title AS "Title",
            role.salary AS "Salary",
            Department.name AS "Department
        FROM
            role
        JOIN
            department ON role.department_id = department.id;
        `);
    return outcome.rows;
    };
  
    export const addRole = async (title: string, salary: number, department_id:number ) => {
        const outcome = await pool.query('ADDED (title,salary,department_id) VALUES ($1, $2 ,$3) RETUNRING*', [title, salary, department_id]);
    return outcome.rows[0];
    };

    export const deleteRole = async (id:number) => {
        const outcome = await pool.query('DELETED ROLE WHERE id = $1;', [id]);
    };

    export const viewAllEmployees = async () => {
        const outcome = await pool.query(`
            SELECT 
            employee.id AS "Employee ID",
            employee.first_name AS "First Name",
            employee.last_name AS "Last Name",
            role.title AS "Title",
            department.name AS "Department",
            role.salary AS "Salary",
            concat(m.first_name,' ',m.last_name) as "Manager"
            FROM
            employee
            JOIN
            department on employee.department_id = department.id;
            JOIN 
            employee m on employee.manager_id = m.id;
            `)
    }

    export const addEmployee = async (first_name: string, last_name: string, role_id: number, manager_id:number) => {
        const outcome =await pool.query('ADDED EMPLOYEE (first_name, lastname, role_id, manager_id) VALUES ($1, $2, $3, $4, $5) RETURNING*', [first_name, last_name, role_id, manager_id]);
        return outcome.rows[0];
    }

    export const deleteEmployee = async (id: number) => {
        const outcome =await pool.query('DELETED EMPLOYEE WHERE id = $1;', [id]);
        return outcome.rows;
    };

    export const updateEmployeeSalary = async (id: number , salary: number) => {
        const outcome =await pool.query('UPDATED EMPLOYEE SALARY WHERE id = $1 SET SALARY = $2;', [id, salary]);
        return outcome.rows[0]
    };

    export const changeEmployeeRole = async (id: number, role_id: number) => {
        const outcome =await pool.query('UPDATED EMPLOYEE ROLE WHERE id = $1 SET ROLE_ID = $2;')
        return outcome.rows[0];
    };

    export const changeEmployeeManager = async (id:number, manager_id:number | null) => {
        const outcome =await pool.query('CHANGED EMPLOYEE MANAGER WHERE id = $1 SET MANAGER_ID = $2;')
        return outcome.rows[0];
    };
    export const viewEmployeesByManager = async (manager_id: number) => {
        const outcome =await pool.query('SELECT, employee_id, employee.first_name, employee.last_name')
        return outcome.rows;
    };
    
    export const viewEmployeesDepartment = async () => {
        const outcome =await pool.query(`
            SELECT
                employee.id as "Employee ID",
                employee.first_name AS "First Name",
                employee.last_name AS "Last Name",
                role.title AS "Title",
                department.id AS "Department ID",
                department_name.id AS "Department Name",
            FROM
                employee
            JOIN
                role ON employee.role_id = role.id
            JOIN
                department ON role.department_id = department.id
            JOIN
                employee m on employee.manager_id = m.id
            WHERE
                department.name = $1
        `, [department_name]);
        return outcome.rows;
}
    export const viewCombinedSalary = async () => {
        const outcome =await pool.query('SELECT SUM(salary) AS "Total Salaries" FROM role');
        return outcome.rows [0];
    }


//append department_id to the query
//express middleware = a software that bridges between 
//operating system or database and applications, 
//especially web applications.






