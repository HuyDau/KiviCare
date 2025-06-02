package com.example.KiviCareBe.repository.account;

import com.example.KiviCareBe.entity.account.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
