package com.example.KiviCareBe.repository.account;

import com.example.KiviCareBe.entity.account.InvalidToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface InvalidTokenRepository extends JpaRepository<InvalidToken, String> {
}
