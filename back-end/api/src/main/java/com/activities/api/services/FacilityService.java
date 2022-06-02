package com.activities.api.services;

import java.util.List;

import com.activities.api.entities.Facility;
import com.activities.api.repositories.FacilityRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FacilityService {
    

    @Autowired private FacilityRepository facilityRepository;

    public List<Facility> getFacilities(){
        return facilityRepository.findAll();
    }
}
