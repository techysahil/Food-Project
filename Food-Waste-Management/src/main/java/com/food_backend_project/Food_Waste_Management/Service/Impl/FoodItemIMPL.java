package com.food_backend_project.Food_Waste_Management.Service.Impl;

import com.food_backend_project.Food_Waste_Management.Dto.FoodItemDTO;
import com.food_backend_project.Food_Waste_Management.Entity.FoodItem;
import com.food_backend_project.Food_Waste_Management.Repository.FoodItemRepo;
import com.food_backend_project.Food_Waste_Management.Service.infc.FoodItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodItemIMPL implements FoodItemService {
    @Autowired
    private FoodItemRepo foodItemRepo;
    @Override
    public String addFood(FoodItemDTO foodItemDTO) {
        FoodItem foodItem = new FoodItem(
                foodItemDTO.getFoodId(),
                foodItemDTO.getCustomer(),
                foodItemDTO.getFoodName(),
                foodItemDTO.getFoodType(),
                foodItemDTO.getFoodQuantity(),
                foodItemDTO.getPickupLocation(),
                foodItemDTO.getContactNo(),
                foodItemDTO.getExpiryDate());

        foodItemRepo.save(foodItem);
        return foodItem.getFoodName();
    }

    @Override
    public List<FoodItem> getAllFoodItem() {
        return foodItemRepo.findAll(Sort.by(Sort.Direction.DESC,"foodId"));

    }

    @Override
    public List<FoodItem> getFoodItembyCustomerId(int customerId) {
        return foodItemRepo.findByCustomerCustomerId(customerId);
    }

    @Override
    public void deleteFoodItem(int foodId) {
        foodItemRepo.deleteById(foodId);
    }
}
