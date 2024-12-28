package com.sakamoti55.myapp.entity;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
public class ShiftData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long userId; // ユーザーIDを格納

    @Column(nullable = false)
    private LocalDate date; // 日付のみを格納

    @Column(nullable = false)
    private LocalTime startTime; // 開始時刻を格納

    @Column(nullable = false)
    private LocalTime endTime; // 終了時刻を格納

    // Getter, Setter, Constructorなどを追加
    public ShiftData() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
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
            throw new IllegalArgumentException("開始時刻は1時間刻みで指定してください。");
        }
        this.startTime = startTime;
    }

    public LocalTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalTime endTime) {
        if (endTime.getMinute() != 0 || endTime.getSecond() != 0) {
            throw new IllegalArgumentException("終了時刻は1時間刻みで指定してください。");
        }
        this.endTime = endTime;
    }

}

