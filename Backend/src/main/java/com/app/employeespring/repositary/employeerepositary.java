package com.app.employeespring.repositary;

import com.app.employeespring.entity.employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface employeerepositary extends JpaRepository<employee, Long> {



}
