package com.cem.stockmanag.rest.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
public class SignUpRequest {

	@Schema(example = "user3")
    @NotBlank
    private String name;
	
	@Schema(example = "user3")
    @NotBlank
    private String surname;

    @Schema(example = "user3")
    @NotBlank
    private String username;
    
    @Schema(example = "user3@gmail.com")
    @Email
    private String email;

    @Schema(example = "user3")
    @NotBlank
    private String password;



    
}
