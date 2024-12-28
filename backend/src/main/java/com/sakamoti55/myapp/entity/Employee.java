package com.sakamoti55.myapp.entity;

import jakarta.persistence.*;

@Entity
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long employeeId;

    // employeeとcompanyを多対一で定義
    @ManyToOne
    @JoinColumn(name = "company_id", nullable = false)
    private Company company;

    // ユニーク
    @Column(nullable = false, unique = true)
    private String employeeName;

    // コンストラクタ
    public Employee() {}

    // ゲッターとセッター
    public Long getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Long id) {
        this.employeeId = id;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    public String getEmployeeName() {
        return employeeName;
    }

    public void setEmployeeName(String employee) {
        this.employeeName = employee;
    }

    // log出力用
    @Override
    public String toString() {
        return "Employee{" +
               "employeeId=" + employeeId +
               ", company=" + (company != null ? company.getCompanyName() : "null") +
               ", employeeName='" + employeeName + '\'' +
               '}';
    }

}
