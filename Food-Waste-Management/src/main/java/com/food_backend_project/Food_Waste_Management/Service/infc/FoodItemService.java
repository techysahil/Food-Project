package com.food_backend_project.Food_Waste_Management.Service.infc;

import com.food_backend_project.Food_Waste_Management.Dto.FoodItemDTO;
import com.food_backend_project.Food_Waste_Management.Entity.FoodItem;

import java.util.List;



    public interface FoodItemService {
        String addFood(FoodItemDTO foodItemDTO);
        List<FoodItem> getAllFoodItem();
        List<FoodItem> getFoodItembyCustomerId(int customerId);

        public  void deleteFoodItem(int foodId) ;
    }

