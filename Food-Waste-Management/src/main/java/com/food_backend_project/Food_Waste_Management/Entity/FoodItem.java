package com.food_backend_project.Food_Waste_Management.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.security.PrivateKey;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "foodItem")
public class FoodItem {

    @Id
    @Column(name = "foodId", length = 25)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int foodId;
    @ManyToOne
    @JoinColumn(name = "customerId")
    private Customer customer;
    @Column(name = "foodName", nullable = false)
    private String foodName;
    @Column(name = "foodType")
    private String foodType;

    @Column(name = "foodQuantity", nullable = false)
    private String foodQuantity;

    @Column(name = "pickupLocation", nullable = false)
    private String pickupLocation;
    @Column(name = "contactNo", nullable = false)
    private double contactNo;

    @Column(name = "expiryDate")
    private LocalDate expiryDate;
}
