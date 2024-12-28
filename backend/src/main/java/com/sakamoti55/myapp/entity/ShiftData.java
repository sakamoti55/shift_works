package com.sakamoti55.myapp.entity;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
public class ShiftData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long shiftdataId;

    // shiftDataとemployeeを多対一で定義
    @ManyToOne
    @JoinColumn(name = "employee_id", nullable = false)
    private Employee employee;

    @Column(nullable = false)
    private LocalDate date;

    @Column(nullable = false)
    private LocalTime startTime;

    @Column(nullable = false)
    private LocalTime endTime;

    // コンストラクタ
    public ShiftData() {}

    // ゲッターとセッター
    public Long getShiftDataId() {
        return shiftdataId;
    }

    public void setShiftDataId(Long id) {
        this.shiftdataId = id;
    }

    public Employee getEmployee() { 
        return employee;
    }

    public void setEmployee(Employee employee) { 
        this.employee = employee;
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
