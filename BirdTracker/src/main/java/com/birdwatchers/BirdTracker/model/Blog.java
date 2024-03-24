package com.birdwatchers.BirdTracker.model;


import jakarta.persistence.*;

@Table(name="blog")
@Entity
public class Blog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="Title")
    public String title;

    @Column(name="date")
    public String date;

    @Column(name="blogtext")
    public String blogtext;


    public Blog() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getBlogtext() {
        return blogtext;
    }

    public void setBlogtext(String blogtext) {
        this.blogtext = blogtext;
    }
}
