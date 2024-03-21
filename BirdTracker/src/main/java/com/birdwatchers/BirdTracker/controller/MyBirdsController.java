package com.birdwatchers.BirdTracker.controller;

import com.birdwatchers.BirdTracker.model.Bird;

import com.birdwatchers.BirdTracker.model.data.BirdRepository;
import com.birdwatchers.BirdTracker.model.data.BirdService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("mybirds")
@CrossOrigin
public class MyBirdsController {

    @Autowired
    private BirdRepository birdRepository;
    private BirdService birdService;

    @PostMapping("/add")
    public String addBirdSighting(@RequestBody Bird bird) {
        birdRepository.save(bird);
        return "New bird sighting has been added!";
    }

    @GetMapping("/getAll")
    public List<Bird> list(){
        return birdService.getAllBirds();
    }



}
