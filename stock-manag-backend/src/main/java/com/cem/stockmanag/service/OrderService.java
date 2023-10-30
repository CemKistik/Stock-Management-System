package com.cem.stockmanag.service;

import java.util.List;

import com.cem.stockmanag.model.Order;

public interface OrderService {

    List<Order> getOrders();

    List<Order> getOrdersContainingText(String text);

    Order validateAndGetOrder(String id);

    Order saveOrder(Order order);

    void deleteOrder(Order order);
    
    void updateOrder(Order order);
    
    
}
