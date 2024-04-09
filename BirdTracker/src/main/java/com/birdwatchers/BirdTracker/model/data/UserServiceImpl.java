package com.birdwatchers.BirdTracker.model.data;

import com.birdwatchers.BirdTracker.model.Login;
import com.birdwatchers.BirdTracker.model.User;
import com.birdwatchers.BirdTracker.response.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

//    @Autowired
//    private PasswordEncoder passwordEncoder;

    @Override
    public String addUser(User newUser) {
        User user = new User();
        user.setId(newUser.getId());
        user.setUsername(newUser.getUsername());
        user.setFirstname(newUser.getFirstname());
        user.setLastname(newUser.getLastname());
        user.setEmail(newUser.getEmail());
        user.setPassword(newUser.getPassword());
        //user.setPassword(this.passwordEncoder.encode(newUser.getPassword()));
        userRepository.save(user);
        return user.getUsername();
    }

    @Override
    public LoginResponse loginUser(Login login) {
        String msg = "";
        User user1 = userRepository.findByEmail(login.getEmail());
        if (user1 != null) {
            String password = login.getPassword();
            //String encodedPassword = user1.getPassword();
            String storedPassword = user1.getPassword();
            //Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
//            if (isPwdRight) {
//                Optional<User> user = userRepository.findOneByEmailAndPassword(login.getEmail(), encodedPassword);
//                if (user.isPresent()) {
            if (password.equals(storedPassword)) {
                Optional<User> authenticatedUser = userRepository.findOneByEmailAndPassword(login.getEmail(), storedPassword);
                if (authenticatedUser.isPresent()) {
                    return new LoginResponse("Login Success", true);
                } else {
                    return new LoginResponse("Login Failed", false);
                }
            } else {
                return new LoginResponse("Please Enter Valid Credentials.", false);
            }
        }else {
            return new LoginResponse("Email Does Not Exist. Please Register For An Account.", false);
        }
    }


}
