package com.birdwatchers.BirdTracker.controller;

import com.birdwatchers.BirdTracker.model.Bird;

import com.birdwatchers.BirdTracker.model.data.BirdRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/mybirds")
public class MyBirdsController {

    @Autowired
    private BirdRepository birdRepository;

    @PostMapping("/add")
    public String addBirdSighting(@ModelAttribute Bird bird, Error errors, Model model) {
        birdRepository.save(bird);
        return "New bird sighting has been added!";
    }

    @GetMapping("/getAll")
    public String displayLifeList(Model model) {
        birdRepository.findAll();
        return "mybirds/index";

    }

}
