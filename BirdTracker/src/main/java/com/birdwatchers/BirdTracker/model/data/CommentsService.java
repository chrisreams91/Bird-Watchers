package com.birdwatchers.BirdTracker.model.data;

import com.birdwatchers.BirdTracker.model.Blog;
import com.birdwatchers.BirdTracker.model.Comments;

import java.util.List;

public interface CommentsService {

    public Comments saveComments(Comments comments);

    public List<Comments> getAllComments();

    boolean deleteComments(int id);

    Comments getCommentsById();

    Comments getCommentsById(int id);

    Comments updateComments();

    Comments updateComments(int id, Comments comments);

    public List<Comments> findByUsername();

    List<Comments> findByUsername(String username);


    List<Comments> getByUsername(String username);
}
