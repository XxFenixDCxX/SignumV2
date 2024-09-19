package com.fenixdc.signum.entities;

import com.google.firebase.firestore.PropertyName;

import java.io.Serializable;

public class Categori implements Serializable {
    private int id;
    private String imageUrl;
    private String name;
    private Boolean hasSubcategories;
    private Boolean isSubCategory;
    private Integer categoriDadId;

    public Categori(){}

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

    @PropertyName("hasSubcategories")
    public void setHasSubcategories(Boolean hasSubcategories) {
        this.hasSubcategories = hasSubcategories != null ? hasSubcategories : false;
    }
}
