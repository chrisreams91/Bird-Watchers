package com.birdwatchers.BirdTracker.model;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Table(name="users")
@Entity
public class User implements UserDetails {


    @Id
    @Column(name="user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_user_id",referencedColumnName = "user_id")
    private List<Bird> bird;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_user_id",referencedColumnName = "user_id")
    private List<Blog> blog;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_user_id",referencedColumnName = "user_id")
    private List<Comments> comments;

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

//    @Enumerated(value = EnumType.STRING)
//    private Role role;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
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

//    @Override
//    public Collection<? extends GrantedAuthority> getAuthorities() {
//        return List.of(new SimpleGrantedAuthority(role.name()));
//    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    } //new thing replacing above

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

//    public Role getRole() {
//        return role;
//    }
//
//    public void setRole(Role role) {
//        this.role = role;
//    }


    public List<Blog> getBlog() {
        return blog;
    }

    public void setBlog(List<Blog> blog) {
        this.blog = blog;
    }

    public List<Comments> getComments() {
        return comments;
    }

    public void setComments(List<Comments> comments) {
        this.comments = comments;
    }

    public List<Bird> getBird() {
        return bird;
    }

    public void setBird(List<Bird> bird) {
        this.bird = bird;
    }
}
