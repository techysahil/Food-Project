package com.food_backend_project.Food_Waste_Management.Service.Impl;

import com.food_backend_project.Food_Waste_Management.Dto.CustomerDTO;
import com.food_backend_project.Food_Waste_Management.Dto.LoginDTO;
import com.food_backend_project.Food_Waste_Management.Entity.Customer;
import com.food_backend_project.Food_Waste_Management.Repository.CustomerRepo;
import com.food_backend_project.Food_Waste_Management.Response.LoginResponse;
import com.food_backend_project.Food_Waste_Management.Service.infc.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomerIMPL implements CustomerService {
    @Autowired
    private CustomerRepo customerRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String addCustomer(CustomerDTO customerDTO) {
        Customer customer = new Customer(
                customerDTO.getCustomerId(),
                customerDTO.getCustomerName(),
                customerDTO.getEmail(),
                customerDTO.getPhone(),
                customerDTO.getAddress(),
                customerDTO.getOrganization(),
                customerDTO.getRole(),
                this.passwordEncoder.encode(customerDTO.getPassword())
        );
        customerRepo.save(customer);
        return customer.getCustomerName();
    }

    @Override
    public LoginResponse loginCustomer(LoginDTO loginDTO) {

        String msg = "";
        Customer customer1 = customerRepo.findByEmail(loginDTO.getEmail());
        if (customer1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = customer1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<Customer> customer = customerRepo.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if (customer.isPresent()) {
                    int customer_id = customer1.getCustomerId();
                    String role = customer1.getRole();
                    return new LoginResponse("Login Success", true ,customer_id,role);
                } else {
                    return new LoginResponse("Login Failed", false,0, null);
                }
            } else {

                return new LoginResponse("password Not Match", false,0, null);
            }
        }else {
            return new LoginResponse("Email not exists", false,0, null);
        }

    }

    @Override
    public Customer getCustomerById(int customerId) {
        Customer customer= customerRepo.findByCustomerId(customerId);
        return customer;
    }

    @Override
    public void updateCustomer(int customerId, CustomerDTO customerDTO) {
        Customer customerUpdated = customerRepo.findByCustomerId(customerId);
        customerUpdated.setCustomerName(customerDTO.getCustomerName());
        customerUpdated.setPhone(customerDTO.getPhone());
        customerUpdated.setAddress(customerDTO.getAddress());
        customerUpdated.setOrganization(customerDTO.getOrganization());
        customerUpdated.setRole(customerDTO.getRole());
        String password = customerDTO.getPassword();
        if (password != null && !password.isEmpty()) {
            customerUpdated.setPassword(this.passwordEncoder.encode(password));
        }
        customerRepo.save(customerUpdated);
    }
}
