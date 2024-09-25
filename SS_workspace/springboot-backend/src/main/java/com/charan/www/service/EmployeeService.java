package com.charan.www.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.charan.www.model.Employee;
import com.charan.www.repo.EmployeeRepository;

@Service
public class EmployeeService
{
	@Autowired
	EmployeeRepository employeeRepository;
	
	public List<Employee>getAllEmployees()
	{
		return employeeRepository.findAll();
	}	
	
	public Employee createEmployee(Employee employee)
	{
		return employeeRepository.save(employee);
	}
}
