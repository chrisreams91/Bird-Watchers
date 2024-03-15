package com.birdwatchers.BirdTracker.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Bird {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String birdSpecies;

    public Bird() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBirdSpecies() {
        return birdSpecies;
    }

    public void setBirdSpecies(String birdSpecies) {
        this.birdSpecies = birdSpecies;
    }
}