package com.cem.stockmanag.rest.dto;

import lombok.Data;

import java.time.ZonedDateTime;
import java.util.List;

@Data
public class UserDto {

    private Long id;

    private String name;
    private String surname;
    
    private String username;
    
    private String email;
    private String role;
    private List<OrderDto> orders;

    @Data
    public static final class OrderDto {
        private String id;
        private String description;
        private String productName;
        private String quantity;
        private String price;
        private ZonedDateTime createdAt;
    }
}