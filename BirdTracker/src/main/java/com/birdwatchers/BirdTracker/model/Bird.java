package com.birdwatchers.BirdTracker.model;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.antlr.v4.runtime.misc.NotNull;

    @Table(name="bird")
    @Entity
    public class Bird {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private int id;


        @Column(name="bird_species")
        @NotBlank
        @Size(min = 3, max = 40)
        public String bird_species;


        @Column(name="location")
        @NotBlank
        @Size(min = 3, max = 100)
        public String location;


        @Column(name="date")
        @NotBlank
        public String date;

        @Column(name="description")
        @NotBlank
        @Size(min = 3, max = 200)
        public String description;

        @Column(name="photo")
        public String photo;

        @Column(name="sound")
        public String sound;

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

        public String getPhoto() {
            return photo;
        }

        public void setPhoto(String photo) {
            this.photo = photo;
        }

        public String getSound() {
            return sound;
        }

        public void setSound(String sound) {
            this.sound = sound;
        }
    }