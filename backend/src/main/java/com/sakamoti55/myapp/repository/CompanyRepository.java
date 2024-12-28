package com.sakamoti55.myapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.sakamoti55.myapp.entity.Company;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {
}
