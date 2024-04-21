package com.birdwatchers.BirdTracker.model.data;
import com.birdwatchers.BirdTracker.model.Bird;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;


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
    public Bird updateBird(int id, Bird updatedBird) {
        Optional<Bird> optionalBird = birdRepository.findById(id);
        if (optionalBird.isPresent()) {
            Bird existingBird = optionalBird.get();
            existingBird.setBird_species(updatedBird.getBird_species());
            existingBird.setDate(updatedBird.getDate());
            existingBird.setLocation(updatedBird.getLocation());
            existingBird.setDescription(updatedBird.getDescription());
            existingBird.setPhoto(updatedBird.getPhoto());
            existingBird.setSound(updatedBird.getSound());
            existingBird.setUsername(updatedBird.getUsername());

            return birdRepository.save(existingBird);
        } else {
            try {
                throw new ChangeSetPersister.NotFoundException();
            } catch (ChangeSetPersister.NotFoundException e) {
                throw new RuntimeException(e);
            }
        }
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
