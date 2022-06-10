package com.activities.api.services;

import java.util.List;

import com.activities.api.entities.Seller;
import com.activities.api.repositories.SellerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SellerService {
    
    @Autowired private SellerRepository sellerRepository;

    public List<Seller> getSellers(){
        return sellerRepository.findAll();
    }
}
