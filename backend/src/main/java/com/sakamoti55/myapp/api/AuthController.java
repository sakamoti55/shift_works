package com.sakamoti55.myapp.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.sakamoti55.myapp.dto.LoginRequestDTO;
import com.sakamoti55.myapp.entity.Company;
import com.sakamoti55.myapp.exception.ResourceNotFoundException;
import com.sakamoti55.myapp.repository.CompanyRepository;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins="*")
public class AuthController {

    @Autowired
    private CompanyRepository companyRepository;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequestDTO request) {
        // companyId から Company エンティティを取得
        Company company = companyRepository.findById(request.getCompanyId())
                .orElseThrow(() -> new ResourceNotFoundException(
                    "Company not found with id " + request.getCompanyId()));

        // todo ハッシュ化
        // 取得したエンティティのパスワードがPOSTリクエストで送られたパスワードと異なるなら、
        // HttpStatus(UNAUTHORIZED)を返却する
        if (!company.getCompanyPassword().equals(request.getCompanyPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid password");
        }

        // 成功パターン
        return ResponseEntity.ok("Login success!");
    }
}
