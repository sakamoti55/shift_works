package com.sakamoti55.myapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sakamoti55.myapp.entity.Company;

// import java.util.List;
import java.util.Optional;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {

    // companyNameをキーにデータを取得
    // :companyNameはプレースホルダー
    @Query("SELECT c FROM Company c WHERE c.companyName = :companyName")
    Optional<Company> findByCompanyName(String companyName);
}
