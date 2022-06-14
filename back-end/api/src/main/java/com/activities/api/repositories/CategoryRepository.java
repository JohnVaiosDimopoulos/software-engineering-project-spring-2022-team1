package com.activities.api.repositories;

import com.activities.api.entities.Category;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer>{
    public List<Category> findByParentCategory(Category category);
}