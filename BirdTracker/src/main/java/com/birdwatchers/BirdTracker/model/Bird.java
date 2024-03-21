package com.birdwatchers.BirdTracker.model;
import jakarta.persistence.*;
import org.antlr.v4.runtime.misc.NotNull;

@Table(name="bird")
@Entity
public class Bird {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotNull
    @Column(name="bird_species")
    public String bird_species;

    @NotNull
    @Column(name="location")
    public String location;

    @NotNull
    @Column(name="date")
    public String date;

    @Column(name="description")
    public String description;

    @Column(name="description")
    public String description;

    public Bird() {
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

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }


    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Bird that = (Bird) o;
        return id == that.id;
    }

}