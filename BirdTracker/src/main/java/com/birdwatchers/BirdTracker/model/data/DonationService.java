package com.birdwatchers.BirdTracker.model.data;

import com.birdwatchers.BirdTracker.model.Bird;
import com.birdwatchers.BirdTracker.model.Donations;

import java.util.List;

public interface DonationService {

    public Donations saveDonations(Donations donations);

    public List<Donations> getAllDonations();

    boolean deleteDonations(int id);

    Donations getDonationsById();

    Donations getDonationsById(int id);

    Donations updateDonations();

    Donations updateDonations(int id, Donations donations);

    public List<Donations> findByUsername();

    List<Donations> findByUsername(String username);


    List<Donations> getByUsername(String username);
}


