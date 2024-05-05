package com.birdwatchers.BirdTracker.model.data;



import com.birdwatchers.BirdTracker.model.Bird;
import com.birdwatchers.BirdTracker.model.Donations;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DonationsRepo extends JpaRepository<Donations, Integer> {

    List<Donations> findByUsername(String username);

}
