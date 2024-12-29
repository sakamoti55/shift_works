package com.sakamoti55.myapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sakamoti55.myapp.entity.Employee;

import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    // employeeNameをキーにデータを取得
    // :employeeNameはプレースホルダー
    @Query("SELECT e FROM Employee e WHERE e.employeeName = :employeeName")
    Optional<Employee> findByEmployeeName(String employeeName);    
}
