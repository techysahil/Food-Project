package com.food_backend_project.Food_Waste_Management.Repository;

import com.food_backend_project.Food_Waste_Management.Entity.FoodItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;



    @Repository
    @EnableJpaRepositories
    public interface FoodItemRepo extends JpaRepository<FoodItem,Integer> {
        List<FoodItem> findByCustomerCustomerId(int customerId);
    }

