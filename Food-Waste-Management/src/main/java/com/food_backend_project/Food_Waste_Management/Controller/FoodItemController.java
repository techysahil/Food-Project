package com.food_backend_project.Food_Waste_Management.Controller;


import com.food_backend_project.Food_Waste_Management.Dto.FoodItemDTO;
import com.food_backend_project.Food_Waste_Management.Entity.FoodItem;
import com.food_backend_project.Food_Waste_Management.Service.infc.FoodItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/v1/foodItem")
@CrossOrigin
public class FoodItemController {
    @Autowired
    private FoodItemService foodItemService;
    @PostMapping(path = "/donateFood")
    public String  saveFoodItem( @RequestBody FoodItemDTO foodItemDTO){
        String result =foodItemService.addFood(foodItemDTO);
        return result;
    }

    @GetMapping(path = "/getFood")
    public List<FoodItem> getFoodItem(){
        return  foodItemService.getAllFoodItem();
    };
    @GetMapping(path="/getMyList/{customerId}")
    public List<FoodItem> getFoodItemsByCustomerId(@PathVariable int customerId){
        return  foodItemService.getFoodItembyCustomerId(customerId);
    }

    @DeleteMapping("/deleteFoodItem/{foodId}")
    public void deleteFoodItem(@PathVariable int foodId){
        foodItemService.deleteFoodItem(foodId);
    }
}
