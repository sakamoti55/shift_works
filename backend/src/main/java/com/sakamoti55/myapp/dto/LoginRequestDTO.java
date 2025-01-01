package com.sakamoti55.myapp.dto;

public class LoginRequestDTO {
    private Long companyId;
    private String companyPassword;

    // getter/setter
    public Long getCompanyId() {
        return companyId;
    }
    public void setCompanyId(Long companyId) {
        this.companyId = companyId;
    }

    public String getCompanyPassword() {
        return companyPassword;
    }
    public void setPassword(String companyPassword) {
        this.companyPassword = companyPassword;
    }
}
