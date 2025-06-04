package com.example.KiviCareBe.repository.User;

import com.example.KiviCareBe.entity.User.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface UserRepository extends JpaRepository<com.example.KiviCareBe.entity.User.User, Long> {
    @Query("Select u from User u where u.email= :email")
    Optional<User> findByEmail(String email);

}
