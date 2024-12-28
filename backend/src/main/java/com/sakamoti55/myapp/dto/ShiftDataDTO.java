// src/main/java/com/sakamoti55/myapp/dto/ShiftDataDTO.java
package com.sakamoti55.myapp.dto;

import java.time.LocalDate;
import java.time.LocalTime;

public class ShiftDataDTO {
    // ポスト時の型を定義
    private Long employeeId;
    private LocalDate date;
    private LocalTime startTime;
    private LocalTime endTime;

    // ゲッターとセッター
    public Long getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Long employeeId) {
        this.employeeId = employeeId;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalTime startTime) {
        if (startTime.getMinute() != 0 || startTime.getSecond() != 0) {
            throw new IllegalArgumentException("The start time must be at 0 minutes and 0 seconds.");
        }
        this.startTime = startTime;
    }

    public LocalTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalTime endTime) {
        if (endTime.getMinute() != 0 || endTime.getSecond() != 0) {
            throw new IllegalArgumentException("The end time must be at 0 minutes and 0 seconds.");
        }
        this.endTime = endTime;
    }
}
