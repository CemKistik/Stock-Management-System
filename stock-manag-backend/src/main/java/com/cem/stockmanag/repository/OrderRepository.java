package com.cem.stockmanag.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cem.stockmanag.model.Order;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, String> {
    List<Order> findAllByOrderByCreatedAtDesc();
    List<Order> findByIdContainingOrDescriptionContainingOrderByCreatedAt(String id, String description);
}
