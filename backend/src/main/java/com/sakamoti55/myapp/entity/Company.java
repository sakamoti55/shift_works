package com.sakamoti55.myapp.entity;

import jakarta.persistence.*;

@Entity
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long companyId;

    // ユニーク
    @Column(name = "company_name", nullable = false, unique = true)
    private String companyName;

    // コンストラクタ
    public Company() {}

    // ゲッターとセッター
    public Long getCompanyId() {
        return companyId;
    }

    public void setCompanyId(Long companyId) {
        this.companyId = companyId;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }
}
