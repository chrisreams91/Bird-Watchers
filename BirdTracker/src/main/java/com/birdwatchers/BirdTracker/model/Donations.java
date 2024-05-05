package com.birdwatchers.BirdTracker.model;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.util.ArrayList;
import java.util.List;

@Table(name="donations")
@Entity
public class Donations {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_donation_id",referencedColumnName = "id")
    private List<Comments> comments;

    @Column(name="donation_request")
    @NotBlank
    @Size(min = 4, max = 200)
    public String donation_request;

    @Column(name="date")
    @NotNull
    public String date;

    @Column(name="donation_link")
    @NotBlank
    @Size(min = 5, max = 4000)
    public String donation_link;

    @Column(name="username")
    public String username;


    public Donations() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDonation_request() {
        return donation_request;
    }

    public void setDonation_request(String donation_request) {
        this.donation_request = donation_request;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getDonation_link() {
        return donation_link;
    }

    public void setDonation_link(String donation_link) {
        this.donation_link = donation_link;
    }

    public List<Comments> getComments() {
        return comments;
    }

    public void setComments(List<Comments> comments) {
        this.comments = comments;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
