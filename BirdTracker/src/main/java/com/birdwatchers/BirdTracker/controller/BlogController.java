package com.birdwatchers.BirdTracker.controller;
import com.birdwatchers.BirdTracker.model.Bird;
import com.birdwatchers.BirdTracker.model.Blog;
import com.birdwatchers.BirdTracker.model.data.BlogService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/blogposts")
@CrossOrigin(origins = "http://localhost:3000")
public class BlogController {

    @Autowired
    private BlogService blogService;


    @PostMapping("/add")
    public String addNewPost(@RequestBody @Valid Blog blog) {
        blogService.saveBlog(blog);
        return "New post has been added!";
    }

    @GetMapping("/getAll")
    public List<Blog> getAllBirds(){
        return blogService.getAllBlogs();
    }

    @GetMapping("/add/{id}")
    public ResponseEntity<Blog> getBirdById(@PathVariable int id){
        Blog blog = null;
        blog = blogService.getBlogById(id);
        return ResponseEntity.ok(blog);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Object> deleteBlog(@PathVariable int id){
        boolean deleted = false;
        deleted = blogService.deleteBlog(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/add/{id}")
    public ResponseEntity<Blog> updateBlog(@PathVariable int id, @RequestBody Blog blog){
        blog = blogService.updateBlog(id, blog);
        return ResponseEntity.ok(blog);
    }

    @GetMapping("/entries")
    public ResponseEntity<List<Blog>> getBlogsForCurrentUser(Authentication authentication) {
        String username = authentication.getName();
        List<Blog> blogs = blogService.findByUsername(username);
        return ResponseEntity.ok(blogs);
    }

    @GetMapping("/entries/{username}")
    public ResponseEntity<List<Blog>> getBlogsByUser(@PathVariable String username) {
        List<Blog> blogs = blogService.getByUsername(username);
        return ResponseEntity.ok(blogs);
    }

}
