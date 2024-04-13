package com.birdwatchers.BirdTracker.model;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Table(name="comments")
@Entity
public class Comments {

    @ManyToOne
    private Blog blog;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="date")
    @NotNull
    public String date;

    @Column(name="CommentText")
    @Size(min = 10, max = 1000)
    public String commentText;

    public Comments() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getCommentText() {
        return commentText;
    }

    public void setCommentText(String commentText) {
        this.commentText = commentText;
    }

}
