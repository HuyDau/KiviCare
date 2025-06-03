package com.example.KiviCareBe.dto.User.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.util.Date;

@Data
@JsonFormat(pattern = "yyyy-MM-dd")
public class UserCreateRequest {
    private String fullName;
    private String email;
    private String password;
    private Date date_of_birth; // hoặc LocalDate
    private String phone_number;
    private String username;
}
