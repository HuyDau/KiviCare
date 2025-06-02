package com.example.KiviCareBe.dto.account;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class LoginResponse {
    private int statusCode;
    private String message;
    private String accessToken;
    private String refreshToken;
    private String role;
    private String expirationTime;
}
