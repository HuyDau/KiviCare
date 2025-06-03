package com.example.KiviCareBe.controller.Auth;

import com.example.KiviCareBe.dto.Login.LoginRequest;
import com.example.KiviCareBe.dto.Login.LoginResponse;
import com.example.KiviCareBe.dto.Login.RefreshTokenRequest;
import com.example.KiviCareBe.dto.Login.RefreshTokenResponse;
import com.example.KiviCareBe.service.Login.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/auth")
public class AuthController {
    private final AuthService authService;

    @PostMapping("/login")
    public LoginResponse login(@RequestBody @Valid LoginRequest request) {
        return authService.login(request);
    }

    @PostMapping("/logout")
    public void logout(@RequestHeader("Authorization") String token) {
        try {
            authService.logout(token.replace("Bearer ", ""));
        } catch (ParseException e) {
            log.error("Logout error");
            throw new RuntimeException(e);
        }
    }

    @PostMapping("/refresh")
    public RefreshTokenResponse refreshToken(@RequestBody RefreshTokenRequest request) throws ParseException {
        return authService.refreshToken(request);
    }
}
