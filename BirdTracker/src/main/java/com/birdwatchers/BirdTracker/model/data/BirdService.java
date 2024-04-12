package com.birdwatchers.BirdTracker.model.data;

import com.birdwatchers.BirdTracker.model.Bird;

import java.util.List;

public interface BirdService {

    public Bird saveBird(Bird bird);

    public List<Bird> getAllBirds();

    boolean deleteBird(int id);

    Bird getBirdById();

    Bird getBirdById(int id);

    Bird updateBird();

    Bird updateBird(int id, Bird bird);


}