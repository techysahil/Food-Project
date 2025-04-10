package com.food_backend_project.Food_Waste_Management.Service.infc;

import com.food_backend_project.Food_Waste_Management.Dto.CustomerDTO;
import com.food_backend_project.Food_Waste_Management.Dto.LoginDTO;
import com.food_backend_project.Food_Waste_Management.Entity.Customer;
import com.food_backend_project.Food_Waste_Management.Response.LoginResponse;

public interface CustomerService {


    String addCustomer(CustomerDTO customerDTO);
    LoginResponse loginCustomer(LoginDTO loginDTO);

}