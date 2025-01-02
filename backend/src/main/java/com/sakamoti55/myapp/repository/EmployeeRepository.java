package com.sakamoti55.myapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sakamoti55.myapp.entity.Employee;

import java.util.Optional;
import java.util.List;
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    @Query("SELECT e FROM Employee e WHERE e.employeeName = :employeeName")
    Optional<Employee> findByEmployeeName(String employeeName);
    // 追加: 会社IDで検索 (Employeeに紐づくCompanyのIDを比較)
    @Query("SELECT e FROM Employee e WHERE e.company.companyId = :companyId")
    List<Employee> findByCompanyId(Long companyId);
}
