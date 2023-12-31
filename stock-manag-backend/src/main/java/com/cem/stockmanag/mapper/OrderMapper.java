package com.cem.stockmanag.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.context.annotation.Configuration;

import com.cem.stockmanag.model.Order;
import com.cem.stockmanag.rest.dto.CreateOrderRequest;
import com.cem.stockmanag.rest.dto.OrderDto;

@Configuration
@Mapper(componentModel = "spring")
public interface OrderMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "user", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    Order toOrder(CreateOrderRequest createOrderRequest);
    @Mapping(target = "createdAt", dateFormat = "yyyy-MM-dd'T'HH:mm:ss.SSSXXX")
    OrderDto toOrderDto(Order order);
}