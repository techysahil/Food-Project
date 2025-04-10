package com.food_backend_project.Food_Waste_Management.Response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponse {

    String message;
    boolean status;
    int cutomerid;
    String role;
}
