package com.birdwatchers.BirdTracker.model.data;



import com.birdwatchers.BirdTracker.model.Blog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlogRepository extends JpaRepository<Blog, Integer> {
}
