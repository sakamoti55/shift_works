package com.sakamoti55.myapp.api;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;

import com.sakamoti55.myapp.repository.CompanyRepository;
import com.sakamoti55.myapp.entity.Company;

@RestController
@RequestMapping("/api/company")
// オリジンは、プロトコル・ホスト・ポート番号のみ(passは要らない)
@CrossOrigin(origins = "http://localhost:5173")
public class CompanyController {
    
    @Autowired
    private CompanyRepository companyRepository;
    
    @PostMapping
    public ResponseEntity<Company> createCompany(@RequestBody Company company) {
        Company saved = companyRepository.save(company);
        return ResponseEntity.ok(saved);
    }

    @GetMapping
    public ResponseEntity<?> getAllCompany(){
        return ResponseEntity.ok(companyRepository.findAll());
    }

}
