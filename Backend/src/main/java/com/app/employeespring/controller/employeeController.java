package com.app.employeespring.controller;

import com.app.employeespring.entity.employee;
import com.app.employeespring.repositary.employeerepositary;
import com.app.employeespring.service.employeeservice;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.hibernate.action.internal.EntityActionVetoException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
public class employeeController {
    @Autowired
    private final employeeservice employeeservice;
    @PostMapping("/employee")
    public employee saveEmployees(@RequestBody employee employee)
    {

        return employeeservice.postemployee(employee);
    }

    @GetMapping("/employees")
    public List<employee> getAllEmployees()
    {
        return employeeservice.getAllEmployees();
    }

    @DeleteMapping("/employee/{id}")
    public ResponseEntity<?> deleteEmployees(@PathVariable Long id)
    {
        try{
            employeeservice.deleteEmployee(id);
            return new ResponseEntity<>("Employee deleted successfully", HttpStatus.OK);

        }
        catch(EntityNotFoundException e){
            return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
        }

    }
    @GetMapping("/employee/{id}")
    public ResponseEntity<?> getEmployeeById(@PathVariable Long id){
        employee employee = employeeservice.getEmployeeById(id);
        if(employee == null)
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(employee);


    }
    @PatchMapping("/employee/{id}")
    public ResponseEntity<?> updateEmployee(@PathVariable Long id, @RequestBody employee employee){
        employee updatedemployee = employeeservice.UpdateEmployee(id,employee);

        if(updatedemployee == null) return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        return ResponseEntity.ok(updatedemployee);



    }


}
