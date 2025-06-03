package com.example.KiviCareBe.dto.User.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@JsonFormat(pattern = "yyyy-MM-dd")
public class UserCreateResponse {
    private String fullName;
    private String email;
    private String phone_number;
    private Date date_of_birth;
    private String username;
}
