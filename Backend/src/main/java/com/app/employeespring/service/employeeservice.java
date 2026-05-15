package com.app.employeespring.service;

import com.app.employeespring.entity.employee;
import com.app.employeespring.repositary.employeerepositary;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor

public class employeeservice {

    private final employeerepositary employeerepositary;

    public employee postemployee(employee employee){
        return employeerepositary.save(employee);

    }

    public List<employee> getAllEmployees(){
            return employeerepositary.findAll();
    }


    public void deleteEmployee(Long id)
    {
        if(!employeerepositary.existsById(id)){
            throw new EntityNotFoundException("Employee with id " + id + " not found");
        }

        employeerepositary.deleteById(id);
    }

    public employee getEmployeeById(Long id){
        return employeerepositary.findById(id).orElse(null);
    }

    public employee UpdateEmployee(Long id,employee employee){
        Optional<employee> optionalemployee = employeerepositary.findById(id);
        if(optionalemployee.isPresent()){
            employee existingEmployee = optionalemployee.get();


            existingEmployee.setEmail(employee.getEmail());
            existingEmployee.setName(employee.getName());
            existingEmployee.setDepartment(employee.getDepartment());
            existingEmployee.setPhone(employee.getPhone());

            return employeerepositary.save(existingEmployee);
        }
        return null;


    }



}

