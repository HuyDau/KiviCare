package com.example.KiviCareBe.dto.User.response;

import com.example.KiviCareBe.dto.User.UserDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ListUserResponse {
    private List<UserDto> users;
    private int statusCode;
    private String message;

    public ListUserResponse(List<UserDto> users, String message) {
        this.users = users;
        this.statusCode = HttpStatus.OK.value();
        this.message = message;
    }

    public ListUserResponse(int statusCode, String message) {
        this.users = null;
        this.statusCode = statusCode;
        this.message = message;
    }
}
