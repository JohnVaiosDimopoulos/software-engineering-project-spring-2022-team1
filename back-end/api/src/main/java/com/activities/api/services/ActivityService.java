package com.activities.api.services;

import java.time.LocalDate;
import java.util.List;

import com.activities.api.entities.Activity;
import com.activities.api.entities.ActivityAtDay;
import com.activities.api.entities.ActivityPhoto;
import com.activities.api.entities.AgeCategory;
import com.activities.api.entities.Evaluation;
import com.activities.api.entities.Facility;
import com.activities.api.repositories.ActivityAtDayRepository;
import com.activities.api.repositories.ActivityPhotoRepository;
import com.activities.api.repositories.ActivityRepository;
import com.activities.api.repositories.EvaluationRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ActivityService {

    @Autowired private ActivityRepository activityRepository;
    @Autowired private EvaluationRepository evaluationRepository;
    @Autowired private ActivityAtDayRepository activityAtDayRepository;
    @Autowired private ActivityPhotoRepository activityPhotoRepository;

    public List<Activity> getActivities(){
        return activityRepository.findAll();
    }

    public Activity getActivity(int id){
        Activity a = activityRepository.findById(id).orElse(null);
        // System.out.println(a.toString());
        return a;
    }

    public int getActivityRating(Activity activity){
        List<Evaluation> evaluations = evaluationRepository.findByActivity(activity);
        return calculateRating(evaluations);
    }

    public List<ActivityPhoto> getActivityPhotos(Activity activity){
        return activityPhotoRepository.findByActivity(activity);
    }

    public List<Activity> getActivitiesByFacility(Facility facility){
        return activityRepository.findByFacility(facility);
    }


    public List<ActivityAtDay> getDaysOfActivity(Activity activity){
        return activityAtDayRepository.findByActivity(activity);
    }

    public LocalDate getEarliestDate(Activity activity, LocalDate start_date){
        List<ActivityAtDay> days = activityAtDayRepository.findByActivityAndDayAfterOrderByDayAsc(activity, start_date.minusDays(1));
        return (!days.isEmpty()) ? days.get(0).getDay() : LocalDate.parse("3000-01-02");
    }

    private int calculateRating(List<Evaluation> evaluations){
        int size = evaluations.size();
        int total = 0;
        for(int i = 0; i < size; i++) total += evaluations.get(i).getRating();
        return (int) ((double) total/size + 0.5);
    }

    public List<Activity> findInPriceRangeAndOfCategoryAndInFacilities(
        int max, int min, 
        List<AgeCategory> ageCategories, 
        List<Facility> facilities){

        return activityRepository.findByPriceLessThanEqualAndPriceGreaterThanEqualAndAgeCategoryInAndFacilityIn(
            max, min, ageCategories, facilities);
    }
}
