package com.birdwatchers.BirdTracker.model.data;



import com.birdwatchers.BirdTracker.model.Bird;
import com.birdwatchers.BirdTracker.model.Blog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogServiceImpl implements BlogService {

    @Autowired
    private BlogRepository blogRepository;

    @Autowired
    private AuthenticationService authenticationService;

    @Override
    public Blog saveBlog(Blog blog) {
        return blogRepository.save(blog);
    }

    @Override
    public List<Blog> getAllBlogs() {
        return blogRepository.findAll();
    }

    @Override
    public boolean deleteBlog(int id) {
        Blog blog = blogRepository.findById(id).get();
        blogRepository.delete(blog);
        return true;
    }

    @Override
    public Blog getBlogById() {
        return null;
    }

    @Override
    public Blog getBlogById(int id) {
        Blog blog = blogRepository.findById(id).get();
        return blog;
    }

    @Override
    public Blog updateBlog() {
        return null;
    }

    @Override
    public Blog updateBlog(int id, Blog blog) {
        blogRepository.findById(id).get();
        blog.setId(blog.getId());
        blog.setTitle(blog.getTitle());
        blog.setDate(blog.getDate());
        blog.setBlogText(blog.getBlogText());
        blog.setUsername(blog.getUsername());
        return blogRepository.save(blog);
    }

    @Override
    public List<Blog> findByUsername() {
        return null;
    }

    @Override
    public List<Blog> findByUsername(String username) {
        return blogRepository.findByUsername(username);
    }


    @Override
    public List<Blog> getByUsername(String username) {
        return blogRepository.findByUsername(username);
    }
}
