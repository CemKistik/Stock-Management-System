package com.cem.stockmanag.mapper;

import com.cem.stockmanag.model.Order;
import com.cem.stockmanag.model.User;
import com.cem.stockmanag.rest.dto.CreateOrderRequest;
import com.cem.stockmanag.rest.dto.OrderDto;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-10-30T05:41:37+0300",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 11.0.17 (Oracle Corporation)"
)
@Component
public class OrderMapperImpl implements OrderMapper {

    @Override
    public Order toOrder(CreateOrderRequest createOrderRequest) {
        if ( createOrderRequest == null ) {
            return null;
        }

        Order order = new Order();

        order.setDescription( createOrderRequest.getDescription() );
        order.setProductName( createOrderRequest.getProductName() );
        order.setQuantity( createOrderRequest.getQuantity() );
        order.setPrice( createOrderRequest.getPrice() );

        return order;
    }

    @Override
    public OrderDto toOrderDto(Order order) {
        if ( order == null ) {
            return null;
        }

        OrderDto orderDto = new OrderDto();

        orderDto.setCreatedAt( order.getCreatedAt() );
        orderDto.setId( order.getId() );
        orderDto.setDescription( order.getDescription() );
        orderDto.setProductName( order.getProductName() );
        orderDto.setQuantity( order.getQuantity() );
        orderDto.setPrice( order.getPrice() );
        orderDto.setUser( userToUserDto( order.getUser() ) );

        return orderDto;
    }

    protected OrderDto.UserDto userToUserDto(User user) {
        if ( user == null ) {
            return null;
        }

        OrderDto.UserDto userDto = new OrderDto.UserDto();

        userDto.setUsername( user.getUsername() );

        return userDto;
    }
}
