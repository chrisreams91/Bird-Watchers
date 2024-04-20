package com.birdwatchers.BirdTracker.controller;


import com.birdwatchers.BirdTracker.model.Blog;
import com.birdwatchers.BirdTracker.model.Comments;
import com.birdwatchers.BirdTracker.model.data.CommentsService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/comments")
@CrossOrigin(origins = "http://localhost:3000")
public class CommentsController {

    @Autowired
    CommentsService commentsService;

    @PostMapping("/add")
    public String addNewComments(@RequestBody @Valid Comments comments) {
        commentsService.saveComments(comments);
        return "New post has been added!";
    }

    @GetMapping("/getAll")
    public List<Comments> getAllComments(){
        return commentsService.getAllComments();
    }

    @GetMapping("/add/{id}")
    public ResponseEntity<Comments> getCommentsById(@PathVariable int id){
        Comments comments = null;
        comments = commentsService.getCommentsById(id);
        return ResponseEntity.ok(comments);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Object> deleteComments(@PathVariable int id){
        boolean deleted = false;
        deleted = commentsService.deleteComments(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/add/{id}")
    public ResponseEntity<Comments> updateComments(@PathVariable int id, @RequestBody Comments comments){
        comments = commentsService.updateComments(id, comments);
        return ResponseEntity.ok(comments);
    }

}
