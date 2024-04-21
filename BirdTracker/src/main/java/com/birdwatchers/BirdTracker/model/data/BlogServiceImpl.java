package com.birdwatchers.BirdTracker.model.data;



import com.birdwatchers.BirdTracker.model.Bird;
import com.birdwatchers.BirdTracker.model.Blog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
    public Blog updateBlog(int id, Blog updatedBlog) {
        Optional<Blog> optionalBlog = blogRepository.findById(id);
        if (optionalBlog.isPresent()) {
            Blog existingBlog = optionalBlog.get();
            existingBlog.setTitle(updatedBlog.getTitle());
            existingBlog.setDate(updatedBlog.getDate());
            existingBlog.setBlogText(updatedBlog.getBlogText());
            existingBlog.setUsername(updatedBlog.getUsername());
            return blogRepository.save(existingBlog);
        } else {
            try {
                throw new ChangeSetPersister.NotFoundException();
            } catch (ChangeSetPersister.NotFoundException e) {
                throw new RuntimeException(e);
            }
        }
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
