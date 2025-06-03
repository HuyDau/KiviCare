package com.example.KiviCareBe.repository;

import com.example.KiviCareBe.entity.Auth.InvalidToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InvalidTokenRepository extends JpaRepository<InvalidToken, String> {

}