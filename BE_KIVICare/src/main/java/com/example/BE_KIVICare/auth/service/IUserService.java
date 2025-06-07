package com.example.BE_KIVICare.auth.service;

import com.example.BE_KIVICare.auth.dto.request.LoginRequest;
import com.example.BE_KIVICare.auth.dto.response.Response;
import com.example.BE_KIVICare.auth.entity.User;

public interface IUserService {
    Response register(User user);
    Response login(LoginRequest loginRequest);
}
