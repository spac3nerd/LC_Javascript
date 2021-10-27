Select t1.name as Employee from Employee t1, Employee t2 where t2.id = t1.managerId and t1.salary > t2.salary;
