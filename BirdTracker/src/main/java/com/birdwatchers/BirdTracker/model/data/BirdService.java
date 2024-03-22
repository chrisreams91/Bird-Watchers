package com.birdwatchers.BirdTracker.model.data;

import com.birdwatchers.BirdTracker.model.Bird;

import java.util.List;

public interface BirdService {

    public Bird saveBird(Bird bird);

    public List<Bird> getAllBirds();


}