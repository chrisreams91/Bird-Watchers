package com.birdwatchers.BirdTracker.model.data;

import com.birdwatchers.BirdTracker.model.Bird;
import com.birdwatchers.BirdTracker.model.Blog;

import java.util.List;

public interface BlogService {

    public Blog saveBlog(Blog blog);

    public List<Blog> getAllBlogs();

    boolean deleteBlog(int id);

    Blog getBlogById();

    Blog getBlogById(int id);

    Blog updateBlog();

    Blog updateBlog(int id, Blog blog);

    public List<Blog> findByUsername();

    List<Blog> findByUsername(String username);


    List<Blog> getByUsername(String username);
}
