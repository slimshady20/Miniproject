package com.jayden.web.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MusicController {
    @GetMapping("")
    public String home() {
        return "헬로우 월드";
    }
}
