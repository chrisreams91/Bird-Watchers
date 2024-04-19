package com.birdwatchers.BirdTracker.controller;


import com.birdwatchers.BirdTracker.model.User;
import com.birdwatchers.BirdTracker.model.data.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;



    @GetMapping("/getAll")
    public List<User> getAllUsers() {
       return userService.getAllUsers();
    }

    @GetMapping("/save/{id}")
    public ResponseEntity<User> getUserById(@PathVariable int id){
        User user = null;
        user = userService.getUserById(id);
        return ResponseEntity.ok(user);
    }

    @DeleteMapping("/save/{id}")
    public ResponseEntity<Object> deleteUser(@PathVariable int id){
        boolean deleted = false;
        deleted = userService.deleteUser(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }


    @PutMapping("/save/{id}")
    public ResponseEntity<User> updateUser(@PathVariable int id, @RequestBody User user){
        user = userService.updateUser(id, user);
        return ResponseEntity.ok(user);
    }

}
