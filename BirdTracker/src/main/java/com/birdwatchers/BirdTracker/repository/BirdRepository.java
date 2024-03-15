package com.birdwatchers.BirdTracker.repository;

import com.birdwatchers.BirdTracker.model.Bird;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BirdRepository extends CrudRepository<Bird, Integer> {


}