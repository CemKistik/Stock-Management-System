package com.cem.stockmanag.service;

import java.util.List;
import java.util.Optional;

import com.cem.stockmanag.model.User;

public interface UserService {

    List<User> getUsers();

    Optional<User> getUserByUsername(String username);

    boolean hasUserWithName(String name);
    boolean hasUserWithSurname(String surname);
    boolean hasUserWithUsername(String username);

    boolean hasUserWithEmail(String email);

    User validateAndGetUserByUsername(String username);

    User saveUser(User user);

    void deleteUser(User user);
}
