package com.birdwatchers.BirdTracker.controller;


import com.birdwatchers.BirdTracker.model.data.CommentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/comments")
@CrossOrigin(origins = "http://localhost:3000")
public class CommentsController {

    @Autowired
    CommentsService commentsService;


}
