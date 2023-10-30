package com.cem.stockmanag.mapper;

import com.cem.stockmanag.model.Order;
import com.cem.stockmanag.model.User;
import com.cem.stockmanag.rest.dto.UserDto;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-10-30T04:44:11+0300",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 11.0.17 (Oracle Corporation)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public UserDto toUserDto(User user) {
        if ( user == null ) {
            return null;
        }

        UserDto userDto = new UserDto();

        userDto.setId( user.getId() );
        userDto.setName( user.getName() );
        userDto.setSurname( user.getSurname() );
        userDto.setUsername( user.getUsername() );
        userDto.setEmail( user.getEmail() );
        userDto.setRole( user.getRole() );
        userDto.setOrders( orderListToOrderDtoList( user.getOrders() ) );

        return userDto;
    }

    protected UserDto.OrderDto orderToOrderDto(Order order) {
        if ( order == null ) {
            return null;
        }

        UserDto.OrderDto orderDto = new UserDto.OrderDto();

        orderDto.setId( order.getId() );
        orderDto.setDescription( order.getDescription() );
        orderDto.setProductName( order.getProductName() );
        orderDto.setQuantity( order.getQuantity() );
        orderDto.setPrice( order.getPrice() );
        orderDto.setCreatedAt( order.getCreatedAt() );

        return orderDto;
    }

    protected List<UserDto.OrderDto> orderListToOrderDtoList(List<Order> list) {
        if ( list == null ) {
            return null;
        }

        List<UserDto.OrderDto> list1 = new ArrayList<UserDto.OrderDto>( list.size() );
        for ( Order order : list ) {
            list1.add( orderToOrderDto( order ) );
        }

        return list1;
    }
}
