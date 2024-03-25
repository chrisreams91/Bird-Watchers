package com.birdwatchers.BirdTracker.controller;

import com.birdwatchers.BirdTracker.model.Bird;

import com.birdwatchers.BirdTracker.model.data.BirdRepository;
import com.birdwatchers.BirdTracker.model.data.BirdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/mybirds")
@CrossOrigin
public class MyBirdsController {

    @Autowired
    private BirdService birdService;

    @PostMapping("/add")
    public String addBirdSighting(@RequestBody Bird bird) {
        birdService.saveBird(bird);
        return "New bird sighting has been added!";
    }

    @GetMapping("/getAll")
    public List<Bird> getAllBirds(){
        return birdService.getAllBirds();
    }

//    @DeleteMapping("/{id}")
//    public String deleteBird(@PathVariable int id){
//        if(!BirdRepository.existsById(id)){
//            return "User Not Found";
//        }
//        BirdRepository.deleteById(id);
//        return  "User with id "+id+" has been deleted success.";
//    }

}
