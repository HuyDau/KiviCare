package com.example.KiviCareBe.service.User;


import com.example.KiviCareBe.dto.User.request.UserCreateRequest;
import com.example.KiviCareBe.dto.User.response.UserCreateResponse;

import com.example.KiviCareBe.entity.User.User;
import com.example.KiviCareBe.repository.User.RoleRepository;
import com.example.KiviCareBe.repository.User.UserRepository;
import com.example.KiviCareBe.service.MailService;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import com.example.KiviCareBe.entity.User.Role;
import com.example.KiviCareBe.entity.User.UserHasRole;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Optional;


@Service
@RequiredArgsConstructor
@Slf4j
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;
    private final MailService mailService;

    public UserCreateResponse createUser(UserCreateRequest request) {
        if (request.getEmail() == null || request.getEmail().trim().isEmpty()) {
            throw new IllegalArgumentException("Email cannot be null or empty");
        }
        if (request.getPassword() == null || request.getPassword().isEmpty()) {
            throw new IllegalArgumentException("Password is required");
        }

        Optional<User> byEmail = userRepository.findByEmail(request.getEmail());
        if (byEmail.isPresent()) {
            throw new RuntimeException("Email existed");
        }

        User user = User.builder()
                .fullName(request.getFullName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .dateOfBirth(request.getDate_of_birth())
                .phoneNumber(request.getPhone_number())
                .username(request.getUsername())// if needed
                .build();

        Role role = roleRepository.findByName("USER")
                .orElseGet(() -> roleRepository.save(Role.builder().name("USER").build()));

        user.setUserHasRoles(List.of(UserHasRole.builder()
                .role(role)
                .user(user)
                .build()));

        userRepository.save(user);
        try {
            mailService.sendEmail("Welcome", "ABC", user.getEmail());
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }

        return UserCreateResponse.builder()
                .fullName(user.getFullName())
                .email(user.getEmail())
                .phone_number(user.getPhoneNumber())
                .date_of_birth(user.getDateOfBirth())
                .username(user.getUsername())
                .build();
    }
}