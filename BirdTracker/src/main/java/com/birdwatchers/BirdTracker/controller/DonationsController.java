package com.birdwatchers.BirdTracker.controller;

import com.birdwatchers.BirdTracker.model.Donations;
import com.birdwatchers.BirdTracker.model.data.DonationService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/donations")
@CrossOrigin(origins = "http://localhost:3000")
public class DonationsController {

    @Autowired
    private DonationService donationService;


    @PostMapping("/add")
    public String addNewDonation(@RequestBody @Valid Donations donations) {
        donationService.saveDonations(donations);
        return "New Donation request has been added!";
    }

    @GetMapping("/getAll")
    public List<Donations> getAllDonations(){
        return donationService.getAllDonations();
    }

    @GetMapping("/add/{id}")
    public ResponseEntity<Donations> getDonationById(@PathVariable int id){
        Donations donations = null;
        donations = donationService.getDonationsById(id);
        return ResponseEntity.ok(donations);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Object> deleteDonations(@PathVariable int id){
        boolean deleted = false;
        deleted = donationService.deleteDonations(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/add/{id}")
    public ResponseEntity<Donations> updateDonations(@PathVariable int id, @RequestBody Donations donations){
        donations = donationService.updateDonations(id, donations);
        return ResponseEntity.ok(donations);
    }

    @GetMapping("/entries")
    public ResponseEntity<List<Donations>> getDonationsForCurrentUser(Authentication authentication) {
        String username = authentication.getName();
        List<Donations> donations = donationService.findByUsername(username);
        return ResponseEntity.ok(donations);
    }

    @GetMapping("/entries/{username}")
    public ResponseEntity<List<Donations>> getDonationsByUser(@PathVariable String username) {
        List<Donations> donations = donationService.getByUsername(username);
        return ResponseEntity.ok(donations);
    }

}