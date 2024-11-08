package com.fenixdc.signum.entities;

import java.io.Serializable;

public class User implements Serializable {
    private String username, email, imageUrl, birthDate;

    public User() {}
    public User(String username, String email, String imageUrl, String birthDate) {
        this.username = username;
        this.email = email;
        this.imageUrl = imageUrl;
        this.birthDate = birthDate;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public void setBirthDate(String birthDate) {
        this.birthDate = birthDate;
    }

    public String getBirthDate() {
        return birthDate;
    }
}
