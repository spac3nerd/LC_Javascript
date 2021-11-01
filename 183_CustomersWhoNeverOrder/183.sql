select name as Customers from Customers left join orders on Customers.id = Orders.customerId where Orders.customerId is null;
