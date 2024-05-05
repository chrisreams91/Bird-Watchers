package com.birdwatchers.BirdTracker.model.data;



import com.birdwatchers.BirdTracker.model.Bird;
import com.birdwatchers.BirdTracker.model.Donations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DonationServiceImpl implements DonationService {

    @Autowired
    private DonationsRepo donationsRepo;

    @Autowired
    private AuthenticationService authenticationService;

    @Override
    public Donations saveDonations(Donations donations) {
        return donationsRepo.save(donations);
    }

    @Override
    public List<Donations> getAllDonations() {
        return donationsRepo.findAll();
    }

    @Override
    public boolean deleteDonations(int id) {
        Donations donations = donationsRepo.findById(id).get();
        donationsRepo.delete(donations);
        return true;
    }

    @Override
    public Donations getDonationsById() {
        return null;
    }

    @Override
    public Donations getDonationsById(int id) {
        Donations donations = donationsRepo.findById(id).get();
        return donations;
    }

    @Override
    public Donations updateDonations() {
        return null;
    }

    @Override
    public Donations updateDonations(int id, Donations updatedDonations) {
        Optional<Donations> optionalDonations = donationsRepo.findById(id);
        if (optionalDonations.isPresent()) {
            Donations existingDonations = optionalDonations.get();
            existingDonations.setDonation_request(updatedDonations.getDonation_request());
            existingDonations.setDate(updatedDonations.getDate());
            existingDonations.setDonation_link(updatedDonations.getDonation_link());
            existingDonations.setUsername(updatedDonations.getUsername());
            return donationsRepo.save(existingDonations);
        } else {
            try {
                throw new ChangeSetPersister.NotFoundException();
            } catch (ChangeSetPersister.NotFoundException e) {
                throw new RuntimeException(e);
            }
        }
    }

    @Override
    public List<Donations> findByUsername() {
        return null;
    }

    @Override
    public List<Donations> findByUsername(String username) {
        return donationsRepo.findByUsername(username);
    }


    @Override
    public List<Donations> getByUsername(String username) {
        return donationsRepo.findByUsername(username);
    }
}



