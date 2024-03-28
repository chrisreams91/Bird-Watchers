package com.birdwatchers.BirdTracker.controller;

import com.birdwatchers.BirdTracker.model.Bird;
import com.birdwatchers.BirdTracker.model.data.BirdService;
import org.antlr.v4.runtime.misc.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/mybirds")
@CrossOrigin(origins = "http://localhost:3000")
public class MyBirdsController {

    @Autowired
    private BirdService birdService;

    @PostMapping("/add")
    public String addBirdSighting(@RequestBody Bird bird) {
        birdService.saveBird(bird);
        return "New bird sighting has been added!";
    }

    @GetMapping("/getAll")
    public List<Bird> getAllBirds() {
        return birdService.getAllBirds();
    }

    @GetMapping("/add/{id}")
    public ResponseEntity<Bird> getBirdById(@PathVariable int id) {
        Bird bird = null;
        bird = birdService.getBirdById(id);
        return ResponseEntity.ok(bird);
    }

    @DeleteMapping("/add/{id}")
    public ResponseEntity<Object> deleteBird(@PathVariable int id) {
        boolean deleted = false;
        deleted = birdService.deleteBird(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @EventListener()
    @GetMapping("/update")
    @NotNull
    public Object updateBird() {
        try {
            Bird newBird = birdService.getBirdById();
            newBird.addAttribute("newBird", newBird);

            Bird birdObj = new Bird();
            birdObj.setBird_species(newBird.getBird_species());
            birdObj.setLocation(newBird.getLocation());
            birdObj.setDate(newBird.getDate());
            birdObj.setDescription(newBird.getDescription());

            newBird.addAttribute("birdObj", birdObj);


        } catch (Exception ex) {
            System.out.println("Exception: " + ex.getMessage());
            return "redirect:/mybirds";
        }
        return "/mybirds";
    }




}
