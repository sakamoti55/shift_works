// src/main/java/com/sakamoti55/myapp/api/ShiftDataController.java
package com.sakamoti55.myapp.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.sakamoti55.myapp.dto.ShiftDataDTO;
import com.sakamoti55.myapp.entity.Employee;
import com.sakamoti55.myapp.entity.ShiftData;
import com.sakamoti55.myapp.exception.ResourceNotFoundException;
import com.sakamoti55.myapp.repository.EmployeeRepository;
import com.sakamoti55.myapp.repository.ShiftDataRepository;

@RestController
@RequestMapping("/api/shiftdata")
@CrossOrigin(origins="*")
public class ShiftDataController {
    
    @Autowired
    private ShiftDataRepository shiftDataRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    @PostMapping
    public ResponseEntity<ShiftData> createShiftData(@RequestBody ShiftDataDTO shiftDataDTO) {
        // employeeIdが提供されているか確認
        if (shiftDataDTO.getEmployeeId() == null) {
            return ResponseEntity.badRequest().body(null);
        }

        // Employeeエンティティを取得
        Employee employee = employeeRepository.findById(shiftDataDTO.getEmployeeId())
            .orElseThrow(() -> new ResourceNotFoundException("Employee not found with id " + shiftDataDTO.getEmployeeId()));
        
        System.out.println("employee:" + employee);

        // ShiftDataエンティティを作成
        ShiftData shiftData = new ShiftData();
        shiftData.setDate(shiftDataDTO.getDate());
        shiftData.setStartTime(shiftDataDTO.getStartTime());
        shiftData.setEndTime(shiftDataDTO.getEndTime());
        shiftData.setEmployee(employee);

        // ShiftDataを保存
        ShiftData savedShiftData = shiftDataRepository.save(shiftData);
        return ResponseEntity.ok(savedShiftData);
    }

    @GetMapping
    public ResponseEntity<?> getAllShiftData(){
        return ResponseEntity.ok(shiftDataRepository.findAll());
    }
}
