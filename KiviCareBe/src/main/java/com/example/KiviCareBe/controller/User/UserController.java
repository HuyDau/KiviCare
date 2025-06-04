package com.example.KiviCareBe.controller.User;

import com.example.KiviCareBe.dto.User.request.UserCreateRequest;
import com.example.KiviCareBe.dto.User.response.ListUserResponse;
import com.example.KiviCareBe.dto.User.response.UserCreateResponse;
import com.example.KiviCareBe.service.User.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/users")
public class UserController {
    private final UserService userService;

    @PostMapping("/create")
    public UserCreateResponse createUser(@RequestBody UserCreateRequest request) {
        return userService.createUser(request);
    }

    @GetMapping("/all")
    public ResponseEntity<ListUserResponse> getAllUsers() {
        ListUserResponse response = userService.getAllUsers();
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }
}
