package com.food_backend_project.Food_Waste_Management.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomerDTO {
    private int customerId;
    private String customerName;
    private String email;
    private double phone;
    private String address;
    private String organization;
    private String role;
    private String password;
}