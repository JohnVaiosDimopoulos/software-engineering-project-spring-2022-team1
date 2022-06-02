package com.activities.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.activities.api.entities.ActivityPhoto;

@Repository
public interface ActivityPhotoRepository extends JpaRepository<ActivityPhoto, Integer>{
    
}