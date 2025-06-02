package com.example.KiviCareBe.common.controller.swagger;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class ApiResponseSchema<T> {
    private T result;
    private ApiErrorSchema error;

    @JsonProperty("success")
    private boolean isSuccess = true;
}
