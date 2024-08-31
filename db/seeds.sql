-- seeds add data into the table u make

Insert into Departments (Department_Name) 
    values
('admin1'),
('admin2'),
('admin3');
Insert into Roles (name, Title, Salary, Department_id)
    values
('admin12'),
('admin13'),
('admin14');
Insert into Employees (name, First_Name, Last_Name, roles_id, Manager_ID) 
    values 
('admin22'),
('admin23'),
('admin24'),
('admin25');