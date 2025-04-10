package com.food_backend_project.Food_Waste_Management.Controller;

import com.food_backend_project.Food_Waste_Management.Dto.CustomerDTO;
import com.food_backend_project.Food_Waste_Management.Dto.LoginDTO;
import com.food_backend_project.Food_Waste_Management.Entity.Customer;
import com.food_backend_project.Food_Waste_Management.Response.LoginResponse;
import com.food_backend_project.Food_Waste_Management.Service.infc.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/customer")
@CrossOrigin
public class CustomerController {
    @Autowired
    public CustomerService customerService;

    @PostMapping(path = "/save")
    public String saveCustomer(@RequestBody CustomerDTO customerDTO) {
        String Id = customerService.addCustomer(customerDTO);
        return Id;
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginCustomer(@RequestBody LoginDTO loginDTO){
        LoginResponse loginResponse =customerService.loginCustomer(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }

    @GetMapping(path = "/getCustomer/{customerId}")
    public Customer getCustomerByCustomerId(@PathVariable int customerId) {
        return customerService.getCustomerById(customerId);
    }

    @PutMapping(path = "/updateCustomer/{customerId}")
    public void updateCustomer(@PathVariable int customerId,@RequestBody CustomerDTO customerDTO ){
        customerService.updateCustomer(customerId,customerDTO);
    }
}
