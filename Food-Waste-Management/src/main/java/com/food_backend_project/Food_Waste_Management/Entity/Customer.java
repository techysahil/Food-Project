package com.food_backend_project.Food_Waste_Management.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "customer_info")
public class Customer {

    @Id
    @Column(name = "customerId" , length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int customerId;
    @Column(name = "customerName", length=200)
    private String customerName;
    @Column(name = "email",length=200)
    private String email;
    @Column(name = "phone",length = 12)
    private double phone;
    @Column(name = "address" , length = 300)
    private String address;
    @Column(name = "organization", length = 100)
    private String organization;
    @Column(name="role", length = 20, nullable = false)
    private String role;
    @Column(name = "password",length=200)
    private String password;
}
