package com.sakamoti55.myapp.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.sakamoti55.myapp.dto.EmployeeDTO;
import com.sakamoti55.myapp.entity.Company;
import com.sakamoti55.myapp.entity.Employee;
import com.sakamoti55.myapp.repository.CompanyRepository;
import com.sakamoti55.myapp.repository.EmployeeRepository;
import com.sakamoti55.myapp.exception.ResourceNotFoundException;

@RestController
@RequestMapping("/api/employee")
@CrossOrigin(origins="*")
public class EmployeeController {
    
    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private CompanyRepository companyRepository;

    @PostMapping
    public ResponseEntity<Employee> createEmployee(@RequestBody EmployeeDTO employeeDTO) {
        // companyIdが提供されているか確認
        if (employeeDTO.getCompanyId() == null) {
            return ResponseEntity.badRequest().body(null);
        }

        // Companyエンティティを取得
        Company company = companyRepository.findById(employeeDTO.getCompanyId())
            .orElseThrow(() -> new ResourceNotFoundException("Company not found with id " + employeeDTO.getCompanyId()));

        // Employeeエンティティを作成
        Employee employee = new Employee();
        employee.setEmployeeName(employeeDTO.getEmployeeName());
        employee.setCompany(company);

        // Employeeを保存
        Employee savedEmployee = employeeRepository.save(employee);
        return ResponseEntity.ok(savedEmployee);
    }

    @GetMapping("/{employeeName}")
    public ResponseEntity<?> getEmployeeByEmployeeName(@PathVariable String employeeName){
        return ResponseEntity.ok(employeeRepository.findByEmployeeName(employeeName));
    }

    @GetMapping
    public ResponseEntity<?> getAllEmployee(){
        return ResponseEntity.ok(employeeRepository.findAll());
    }
}
