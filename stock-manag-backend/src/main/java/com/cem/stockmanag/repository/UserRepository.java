package com.cem.stockmanag.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cem.stockmanag.model.User;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);

    boolean existsByName(String name);
    boolean existsBySurname(String surname);

    boolean existsByUsername(String username);

    boolean existsByEmail(String email);
    
    
}
