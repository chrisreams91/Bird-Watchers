package com.birdwatchers.BirdTracker.model;

import jakarta.persistence.*;

import java.util.Objects;

@Table(name="bird")
@Entity
public class Bird {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="bird_species")
    public String bird_species;

    public Bird() {
    }

    public Bird(int id, String bird_species) {
        this.id = id;
        this.bird_species = bird_species;
    }

    public int getId() {
        return id;
    }


    public void setId(int id) {
        this.id = id;
    }

    public String getBird_species() {
        return bird_species;
    }

    public void setBird_species(String bird_species) {
        this.bird_species = bird_species;
    }
    @Override
    public String toString() {
        return bird_species;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Bird that = (Bird) o;
        return id == that.id;
    }


}