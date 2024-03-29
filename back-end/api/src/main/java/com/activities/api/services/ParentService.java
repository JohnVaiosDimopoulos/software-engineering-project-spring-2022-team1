package com.activities.api.services;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.activities.api.dto.ReservationRequest;
import com.activities.api.entities.ActivityAtDay;
import com.activities.api.entities.Parent;
import com.activities.api.entities.Reservation;
import com.activities.api.entities.User;
import com.activities.api.repositories.ActivityAtDayRepository;
import com.activities.api.repositories.ParentRepository;
import com.activities.api.repositories.ReservationRepository;
import com.activities.api.repositories.UserRepository;

@Service
public class ParentService {
    
    @Autowired private ParentRepository parentRepository;
    @Autowired private ActivityAtDayRepository activityAtDayRepository;
    @Autowired private ReservationRepository reservationRepository;
    @Autowired private UserRepository  userRepository;

    @Transactional
    public void deleteParent(Parent parent){
        
        parentRepository.delete(parent);
        userRepository.delete(parent.getUser());

    }

    public Parent getByUser(User user){
        return parentRepository.findByUser(user).orElse(null);
    }


    public Parent getParentByUN(String username){
        return parentRepository.findByUser_Username(username).orElse(null);
    }

    @Transactional
    public Parent saveParentWithUser(Parent parent, User user){

        parent.setUser(userRepository.save(user));
        return parentRepository.save(parent);
    }

    @Transactional
    public void makeReservations(List<ReservationRequest> reservations, int parent_id) throws Exception{

        //get days
        List<ActivityAtDay> aadList = activityAtDayRepository.findAllById(
            reservations.stream().map(
                 res -> res.getAad_id()
            ).collect(Collectors.toList())
        );

        int cost = 0;

        //make reservations on each day
        for(int i = 0; i < reservations.size(); i++){
            ActivityAtDay aad =aadList.get(i);
            aad.reserve(reservations.get(i).getNumber());
            aadList.set(i, aad);
            cost += aad.getActivity().getPrice() * reservations.get(i).getNumber();
        }

        //save new changes
        activityAtDayRepository.saveAll(aadList);

        //get parent
        Parent parent = parentRepository.findById(parent_id).orElse(null);
        if(parent == null) throw new Exception("Parent (parent.id = " + parent_id + ") does not exist");

        User user = parent.getUser();
        int balance = user.getBalance();

        if(balance < cost)
            throw new Exception("Parent (parent.id = " + parent_id + ") does not have enough money");

        user.setBalance(balance - cost);
        parent.setUser(user);
        parentRepository.save(parent);

        //create reservations
        List<Reservation> res = aadList.stream().map(
            aad -> {
                Reservation rr = new Reservation();
                rr.setActivityAtDay(aad);
                rr.setDate(LocalDate.now());
                rr.setNumber(0);    //set number 0 for now
                rr.setParent(parent);
                return rr;
            }
        ).collect(Collectors.toList());

        //save correct number
        for(int i = 0; i < res.size(); i++){
            Reservation r = res.get(i);
            r.setNumber(reservations.get(i).getNumber());
            res.set(i, r);
        }

        reservationRepository.saveAll(res);

        // throw new Exception("Something wrong " + reservations.size());
    }

    public List<Parent> getParents(){
        return parentRepository.findAll();
    }

    public Parent getParent(int id){
        return parentRepository.findById(id).orElse(null); 
    }

    public Parent saveOrUpdateParent(Parent parent){
        return parentRepository.save(parent);
    }
}
