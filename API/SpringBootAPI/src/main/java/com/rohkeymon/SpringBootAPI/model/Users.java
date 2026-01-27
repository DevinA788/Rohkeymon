package com.rohkeymon.SpringBootAPI.model;

import org.springframework.stereotype.Component;
import java.time.LocalDateTime;

@Component
public class Users {
    private String username;
    private String email;
    private String user_id;
    private String hashed_pw;
    private LocalDateTime created_at;

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getHashed_pw() {
        return hashed_pw;
    }

    public void setHashed_pw(String hashed_pw) {
        this.hashed_pw = hashed_pw;
    }

    public LocalDateTime getCreated_at() {
        return created_at;
    }

    public void setCreated_at(LocalDateTime created_at) {
        this.created_at = created_at;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUsername() {
        return this.username;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
