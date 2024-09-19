package com.fenixdc.signum.entities;

import com.google.firebase.firestore.PropertyName;

public class Categories {
    private int id;
    private String imageUrl;
    private String name;
    private Boolean hasSubcategories;
    private Boolean isSubCategory;
    private Integer categoriDadId;

    public Categories(int id, String imageUrl, String name, Boolean hasSubcategories, Boolean isSubCategory, Integer categoriDadId) {
        this.id = id;
        this.imageUrl = imageUrl;
        this.name = name;
        this.hasSubcategories = hasSubcategories;
        this.isSubCategory = isSubCategory;
        this.categoriDadId = categoriDadId;
    }

    public int getId() {
        return id;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public String getName() {
        return name;
    }

    @PropertyName("hasSubcategories")
    public boolean hasSubcategories() {
        return hasSubcategories != null && hasSubcategories;
    }

    @PropertyName("isSubCategory")
    public boolean isSubCategory() {
        return isSubCategory != null && isSubCategory;
    }

    public Integer getCategoriDadId() {
        return categoriDadId;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public void setName(String name) {
        this.name = name;
    }

    @PropertyName("hasSubcategories")
    public void setHasSubcategories(Boolean hasSubcategories) {
        this.hasSubcategories = hasSubcategories != null ? hasSubcategories : false;
    }

    @PropertyName("isSubCategory")
    public void setIsSubCategory(Boolean isSubCategory) {
        this.isSubCategory = isSubCategory != null ? isSubCategory : false;
    }

    public void setCategoriDadId(Integer categoriDadId) {
        this.categoriDadId = categoriDadId;
    }
}
