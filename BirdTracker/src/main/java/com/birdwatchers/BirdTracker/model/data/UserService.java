package com.birdwatchers.BirdTracker.model.data;


import com.birdwatchers.BirdTracker.model.User;

import java.util.List;


public interface UserService {


    public List<User> getAllUsers();

    boolean deleteUser(int id);

    User getUserById();

    User getUserById(int id);

    User updateUser();

    User updateUser(int id, User user);
}
