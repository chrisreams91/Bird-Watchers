package com.birdwatchers.BirdTracker.model.data;
import com.birdwatchers.BirdTracker.model.Bird;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class BirdServiceImpl implements BirdService {

    @Autowired
    private BirdRepository birdRepository;

    @Override
    public Bird saveBird(Bird bird) {
        return birdRepository.save(bird);
    }

    @Override
    public List<Bird> getAllBirds() {
        return birdRepository.findAll();
    }
}
