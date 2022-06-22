package com.activities.api.dto;

import java.util.List;
import java.util.stream.Collectors;

import com.activities.api.entities.Category;
import com.activities.api.services.CategoryService;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @NoArgsConstructor @AllArgsConstructor
public class CategoryWithChildren {
    
    private int id;
    private String name;
    private List<ShallowCategory> children;

    public CategoryWithChildren(Category category, CategoryService categoryService, Boolean recursively){

        this.id = category.getId();
        this.name = category.getName();
        this.children = 
        (
            recursively
            ? categoryService.getCategoriesRecursively(category.getName())
            : categoryService.getByParent(category)
        )
        .stream()
            .map(
                cat -> new ShallowCategory(cat)
            ).collect(Collectors.toList());

        if(recursively)children.removeIf(child -> child.getId() == this.id);
    }

    public CategoryWithChildren(Category category, CategoryService categoryService){
        this(category, categoryService, false);
    }
}