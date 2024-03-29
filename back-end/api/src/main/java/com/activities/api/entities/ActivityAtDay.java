package com.activities.api.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity @Table(name = "activity_at_day")
@Data @AllArgsConstructor @NoArgsConstructor
public class ActivityAtDay {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String time;
    private LocalDate day;
    private int capacity;
    
    @ManyToOne
    @JoinColumn(name = "activity_id")
    private Activity activity;

    public void reserve(int number) throws Exception{
        if(number > capacity) throw new Exception("Not enough capacity (aad.id=" + id +")");
        this.capacity -= number;
    }
}
