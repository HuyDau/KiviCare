package com.example.BE_KIVICare.auth.util;

import com.example.BE_KIVICare.auth.dto.UserDTO;
import com.example.BE_KIVICare.auth.entity.User;

public class Utils {

    public static UserDTO mapUserEntityToUserDTO(User user) {
        UserDTO userDTO = new UserDTO();

        userDTO.setId(user.getId());
        userDTO.setName(user.getName());
        userDTO.setEmail(user.getEmail());
        userDTO.setPhoneNumber(user.getPhoneNumber());
        userDTO.setRole(user.getRole());
        return userDTO;
    }
}
