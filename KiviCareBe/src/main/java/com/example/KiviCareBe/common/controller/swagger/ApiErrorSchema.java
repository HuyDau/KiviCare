package com.example.KiviCareBe.common.controller.swagger;

import lombok.Data;

@Data
public class ApiErrorSchema {
    private int code;
    private String message;
}
