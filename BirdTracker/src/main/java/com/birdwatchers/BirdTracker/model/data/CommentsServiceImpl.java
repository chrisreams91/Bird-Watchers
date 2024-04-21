package com.birdwatchers.BirdTracker.model.data;

import com.birdwatchers.BirdTracker.model.Blog;
import com.birdwatchers.BirdTracker.model.Comments;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentsServiceImpl implements CommentsService{

    @Autowired
    private CommentsRepository commentsRepository;

    @Override
    public Comments saveComments(Comments comments) {
        return commentsRepository.save(comments);
    }

    @Override
    public List<Comments> getAllComments() {
        return commentsRepository.findAll();
    }

    @Override
    public boolean deleteComments(int id) {
        Comments comments = commentsRepository.findById(id).get();
        commentsRepository.delete(comments);
        return true;
    }

    @Override
    public Comments getCommentsById() {
        return null;
    }

    @Override
    public Comments getCommentsById(int id) {
        Comments comments = commentsRepository.findById(id).get();
        return comments;
    }

    @Override
    public Comments updateComments() {
        return null;
    }

    @Override
    public Comments updateComments(int id, Comments comments) {
        commentsRepository.findById(id).get();
        comments.setId(comments.getId());
        comments.setDate(comments.getDate());
        comments.setComment_text(comments.getComment_text());
        comments.setUsername(comments.getUsername());
        return commentsRepository.save(comments);
    }

    @Override
    public List<Comments> findByUsername() {
        return null;
    }

    @Override
    public List<Comments> findByUsername(String username) {
        return commentsRepository.findByUsername(username);
    }


    @Override
    public List<Comments> getByUsername(String username) {
        return commentsRepository.findByUsername(username);
    }

}
