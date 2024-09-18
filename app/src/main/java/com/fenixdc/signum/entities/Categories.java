package com.fenixdc.signum.entities;

public class Categories {
    private int id;
    private String imageUrl;
    private String name;
    private boolean hasSubcategories;

    public Categories(){}

    public Categories(int id, String imageUrl, String name, boolean hasSubcategories) {
        this.id = id;
        this.imageUrl = imageUrl;
        this.name = name;
        this.hasSubcategories = hasSubcategories;
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

    public boolean isHasSubcategories() {
        return hasSubcategories;
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

    public void setHasSubcategories(boolean hasSubcategories) {
        this.hasSubcategories = hasSubcategories;
    }
}
