package com.example.KiviCareBe.controller.User;

import com.example.KiviCareBe.dto.User.request.UserCreateRequest;
import com.example.KiviCareBe.dto.User.response.UserCreateResponse;
import com.example.KiviCareBe.service.User.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping("/api/v1/users")
    public UserCreateResponse createUser(@RequestBody UserCreateRequest request) {
        return userService.createUser(request);
    }
}
