package com.food_backend_project.Food_Waste_Management.Dto;

import com.food_backend_project.Food_Waste_Management.Entity.Customer;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class FoodItemDTO {

    private int foodId;
    private Customer customer;
    private String foodName;
    private String foodType;
    private String foodQuantity;
    private String pickupLocation;
    private double contactNo;
    private LocalDate expiryDate;
}
