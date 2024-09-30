package com.fenixdc.signum.entities;

public class User {
    private String user, email, imageUrl;

    public User() {}
    public User(String user, String email, String imageUrl) {
        this.user = user;
        this.email = email;
        this.imageUrl = imageUrl;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
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
}
