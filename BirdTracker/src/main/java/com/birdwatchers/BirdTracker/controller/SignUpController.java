package com.birdwatchers.BirdTracker.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/signup")
public class SignUpController {

    @Autowired
    private SignUpService signUpService;

    @PostMapping
    public ResponseEntity<?> signUp(@RequestBody SignUpRequest request) {
        try {
            signUpService.signUp(request.getUsername()request,request.getPassword());
            return ResponseEntity.ok("User signed up successfully");
        } catch (UserAlreadyExistsException e) {
            return
                    ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        }
    }
}


