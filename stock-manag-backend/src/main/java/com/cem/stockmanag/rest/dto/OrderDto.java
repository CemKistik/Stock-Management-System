package com.cem.stockmanag.rest.dto;

import lombok.Data;

import java.time.ZonedDateTime;

@Data
public class OrderDto {

    private String id;
    private String description;
    private String productName;
    private String quantity;
    private String price;
    private UserDto user;
    private ZonedDateTime createdAt;

    @Data
    public static final class UserDto {
        private String username;
    }
}