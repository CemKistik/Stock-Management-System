package com.cem.stockmanag.rest.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class CreateOrderRequest {

    @Schema(example = "There are desc")
    @NotBlank
    private String description;
    
    @Schema(example = "productName")
    
    private String productName;
    
    @Schema(example = "quantity")
    
    private String quantity;

    @Schema(example = "price")
    
    private String price;

}
