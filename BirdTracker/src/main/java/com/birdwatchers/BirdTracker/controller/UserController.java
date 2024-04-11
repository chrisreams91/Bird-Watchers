package com.birdwatchers.BirdTracker.controller;


import com.birdwatchers.BirdTracker.model.Login;
import com.birdwatchers.BirdTracker.model.User;
import com.birdwatchers.BirdTracker.model.data.UserService;
import com.birdwatchers.BirdTracker.response.LoginResponse;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

   @PostMapping("/save")
   public String saveUser(@RequestBody @Valid User user) {
       String id = userService.addUser(user);
       return id;
   }

   @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody @Valid Login login) {
       LoginResponse loginResponse = userService.loginUser(login);
       return ResponseEntity.ok(loginResponse);
   }

    @GetMapping("/getAll")
    public List<User> getAllUsers() {
       return userService.getAllUsers();
    }

    //need to add getmapping get by id, deletemapping delete by id, and putmapping get by id

}
