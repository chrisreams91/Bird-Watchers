package com.birdwatchers.BirdTracker.model.data;

import com.birdwatchers.BirdTracker.model.User;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;



    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public boolean deleteUser(int id) {
        User user = userRepository.findById(id).get();
        userRepository.delete(user);
        return true;
    }

    @Override
    public User getUserById() {
        return null;
    }

    @Override
    public User getUserById(int id) {
        User user = userRepository.findById(id).get();
        return user;
    }

    @Override
    public User updateUser() {
        return null;
    }

    @Override
    public User updateUser(int id, User user) {
        userRepository.findById(id).get();
        user.setUsername(user.getUsername());
        user.setFirstname(user.getFirstname());
        user.setLastname(user.getLastname());
        user.setEmail(user.getEmail());
        user.setPassword(user.getPassword());
        return userRepository.save(user);
    }
}
