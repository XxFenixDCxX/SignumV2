package com.fenixdc.signum.entities;

import java.io.Serializable;
import java.util.List;

public class Learn implements Serializable {
    private int id;
    private int progress;
    private int totalSigns;
    private int idCategorie;
    private List<Sign> signs;
    private String name;
    private String imageUrl;

    public Learn(){}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public int getProgress() {
        return progress;
    }

    public int getTotalSigns() {
        return totalSigns;
    }

    public void setTotalSigns(int totalSigns) {
        this.totalSigns = totalSigns;
    }

    public void setProgress(int progress) {
        this.progress = progress;
    }

    public int getIdCategorie() {
        return idCategorie;
    }

    public void setIdCategorie(int idCategorie) {
        this.idCategorie = idCategorie;
    }

    public List<Sign> getSigns() {
        return signs;
    }

    public void setSigns(List<Sign> signs) {
        this.signs = signs;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String SignsToString(){
        String signsString = "";
        for (Sign sign : signs) {
            signsString += sign.getId() + ",";
        }

        if (!signsString.isEmpty()) {
            signsString = signsString.substring(0, signsString.length() - 1);
        }

        return signsString;
    }
}
