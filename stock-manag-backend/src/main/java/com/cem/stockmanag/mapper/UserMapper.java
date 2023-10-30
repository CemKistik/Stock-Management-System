package com.cem.stockmanag.mapper;

import org.mapstruct.Mapper;
import org.springframework.context.annotation.Configuration;

import com.cem.stockmanag.model.User;
import com.cem.stockmanag.rest.dto.UserDto;

@Configuration
@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);
}