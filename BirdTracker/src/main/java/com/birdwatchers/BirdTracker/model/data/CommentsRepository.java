package com.birdwatchers.BirdTracker.model.data;


import com.birdwatchers.BirdTracker.model.Blog;
import com.birdwatchers.BirdTracker.model.Comments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentsRepository extends JpaRepository<Comments, Integer> {

    List<Comments> findByUsername(String username);

}
