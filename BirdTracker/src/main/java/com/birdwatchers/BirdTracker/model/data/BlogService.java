package com.birdwatchers.BirdTracker.model.data;

import com.birdwatchers.BirdTracker.model.Bird;
import com.birdwatchers.BirdTracker.model.Blog;

import java.util.List;

public interface BlogService {

    public Blog saveBlog(Blog blog);

    public List<Blog> getAllBlogs();


}
