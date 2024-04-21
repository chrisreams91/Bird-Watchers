package com.birdwatchers.BirdTracker.model;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.util.ArrayList;
import java.util.List;

@Table(name="blog")
@Entity
public class Blog {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_blog_id",referencedColumnName = "id")
    private List<Comments> comments;

    @Column(name="Title")
    @NotBlank
    @Size(min = 4, max = 50)
    public String title;

    @Column(name="date")
    @NotNull
    public String date;

    @Column(name="blog_text")
    @NotBlank
    @Size(min = 5, max = 4000)
    public String blogText;

    @Column(name="username")
    public String username;


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

    public String getBlogText() {
        return blogText;
    }

    public void setBlogText(String blogText) {
        this.blogText = blogText;
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
