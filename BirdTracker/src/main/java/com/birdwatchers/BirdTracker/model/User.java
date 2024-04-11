package com.birdwatchers.BirdTracker.model;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Table(name="user")
@Entity
public class User {


    @Id
    @Column(name="user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;


    @Column(name="username")
    @NotBlank
    @NotNull
    @Size(min = 3, max = 20)
    private String username;

    @Column(name="firstname")
    @NotBlank
    @Size(min = 2, max = 50)
    private String firstname;

    @Column(name="lastname")
    @Size(min = 2, max = 50)
    private String lastname;

    @Column(name="email")
    @Email()
    private String email;

    @Column(name="password")
    @NotBlank
    @NotNull
    @Size(min = 5, max = 40)
    private String password;

    public User() {
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
