package com.fenixdc.signum.entities;

public class Sign {
    private int id;
    private int idCategorie;
    private String name;
    private String description;
    private String imageUrl;

    private Sign () {}

    private Sign (int id, int idCategorie, String name, String description, String imageUrl) {
        this.id = id;
        this.idCategorie = idCategorie;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
    }

    public int getId() {
        return id;
    }

    public int getIdCategorie() {
        return idCategorie;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setIdCategorie(int idCategorie) {
        this.idCategorie = idCategorie;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
