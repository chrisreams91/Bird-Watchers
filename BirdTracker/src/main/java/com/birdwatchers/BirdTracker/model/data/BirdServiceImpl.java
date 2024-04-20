package com.birdwatchers.BirdTracker.model.data;
import com.birdwatchers.BirdTracker.model.Bird;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class BirdServiceImpl implements BirdService {

    @Autowired
    private BirdRepository birdRepository;

    @Autowired
    private AuthenticationService authenticationService;

    @Override
    public Bird saveBird(Bird bird) {
        return birdRepository.save(bird);
    }

    @Override
    public List<Bird> getAllBirds() {
        return birdRepository.findAll();
    }

    @Override
    public boolean deleteBird(int id) {
        Bird bird = birdRepository.findById(id).get();
        birdRepository.delete(bird);
        return true;
    }

    @Override
    public Bird getBirdById() {
        return null;
    }

    @Override
    public Bird getBirdById(int id) {
        Bird bird = birdRepository.findById(id).get();
        return bird;
    }

    @Override
    public Bird updateBird() {
        return null;
    }

    @Override
    public Bird updateBird(int id, Bird bird) {
        birdRepository.findById(id).get();
        bird.setId(bird.getId());
        bird.setBird_species(bird.getBird_species());
        bird.setDate(bird.getDate());
        bird.setLocation(bird.getLocation());
        bird.setDescription(bird.getDescription());
        bird.setPhoto(bird.getPhoto());
        bird.setSound(bird.getSound());
        bird.setUsername(bird.getUsername());
        return birdRepository.save(bird);
    }

    @Override
    public List<Bird> findByUsername() {
        return null;
    }

    @Override
    public List<Bird> findByUsername(String username) {
        return birdRepository.findByUsername(username);
    }


    @Override
    public List<Bird> getByUsername(String username) {
        return birdRepository.findByUsername(username);
    }

}
