package com.birdwatchers.BirdTracker.model.data;

import com.birdwatchers.BirdTracker.model.Login;
import com.birdwatchers.BirdTracker.model.User;
import com.birdwatchers.BirdTracker.response.LoginResponse;
import org.springframework.stereotype.Service;


public interface UserService {

    String addUser(User user);

    LoginResponse loginUser(Login login);
}
