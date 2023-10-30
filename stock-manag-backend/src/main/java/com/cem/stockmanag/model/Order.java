package com.cem.stockmanag.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import java.time.ZonedDateTime;

@Data
@NoArgsConstructor
@Entity
@Table(name = "orders")
public class Order {

    @Id
    private String id;

    private String description;
    
    private String productName;
    private String quantity;
    private String price;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
    private ZonedDateTime createdAt;

    public Order(String id, String description, String productName, String quantity, String price, User user) {
        this.id = id;
        this.description = description;
        this.productName = productName;
        this.quantity = quantity;
        this.price = price;
        this.user = user;
    }

    @PrePersist
    public void onPrePersist() {
        createdAt = ZonedDateTime.now();
    }
}