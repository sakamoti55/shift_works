package com.sakamoti55.myapp.dto;

public class EmployeeDTO {
    // ポスト時の型を定義
    private String employeeName;
    private Long companyId;

    // ゲッターとセッター
    public String getEmployeeName() {
        return employeeName;
    }

    public void setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
    }

    public Long getCompanyId() {
        return companyId;
    }

    public void setCompanyId(Long companyId) {
        this.companyId = companyId;
    }
}
