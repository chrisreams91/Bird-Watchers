package com.birdwatchers.BirdTracker.model.data;

import com.birdwatchers.BirdTracker.model.Bird;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BirdRepository extends CrudRepository<Bird, Integer> {


}