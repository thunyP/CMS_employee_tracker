-- views the departments
SELECT * FROM Departments;
-- views the roles
roles_id as 

SELECT
    Departments.name,
    Roles.name,
FROM
join Departments on Roles.Department = Department.id;

SELECT
Roles.name,
Employees.name,
FROM
join Roles on Employees.Roles = Roles.id;

