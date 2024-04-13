package com.birdwatchers.BirdTracker.model.data;


import com.birdwatchers.BirdTracker.model.Comments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentsRepository extends JpaRepository<Comments, Integer> {
}
