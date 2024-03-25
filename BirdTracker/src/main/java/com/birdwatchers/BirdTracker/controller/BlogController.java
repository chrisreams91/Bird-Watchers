package com.birdwatchers.BirdTracker.controller;

import com.birdwatchers.BirdTracker.model.Bird;
import com.birdwatchers.BirdTracker.model.Blog;
import com.birdwatchers.BirdTracker.model.data.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/blogposts")
@CrossOrigin
public class BlogController {

    @Autowired
    private BlogService blogService;


    @PostMapping("/add")
    public String addNewPost(@RequestBody Blog blog) {
        blogService.saveBlog(blog);
        return "New post has been added!";
    }

    @GetMapping("/getAll")
    public List<Blog> getAllBirds(){
        return blogService.getAllBlogs();
    }

}
