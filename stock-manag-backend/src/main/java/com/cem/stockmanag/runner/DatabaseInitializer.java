package com.cem.stockmanag.runner;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.cem.stockmanag.model.User;
import com.cem.stockmanag.security.WebSecurityConfig;
import com.cem.stockmanag.service.UserService;

import java.util.Arrays;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Component
public class DatabaseInitializer implements CommandLineRunner {

    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) {
        if (!userService.getUsers().isEmpty()) {
            return;
        }
        USERS.forEach(user -> {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            userService.saveUser(user);
        });
        log.info("Database olusturuldu");
    }
    private static final List<User> USERS = Arrays.asList(
    		new User( "Cem", "Kistik", "Cem123", "cemkistik@gmail.com", "cem12345", WebSecurityConfig.ADMIN)
    );
}
