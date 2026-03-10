package com.rohkeymon.SpringBootAPI.repo;

import com.rohkeymon.SpringBootAPI.model.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UsersRepo {
    public JdbcTemplate getJdbcTemplate() {
        return jdbcTemplate;

}
    @Autowired
    public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private JdbcTemplate jdbcTemplate;

    public void save(Users users) {

        String sqlString = "INSERT INTO users (username, hashed_pw, email) VALUES (?, ?, ?)";

        jdbcTemplate.update(sqlString, users.getUsername(), users.getPassword(), users.getEmail());
    }

    public boolean findUsername(String username) {
        String sqlUsernameSearch = "SELECT COUNT(*) FROM users WHERE username = (?)";
        Integer queryResult = jdbcTemplate.queryForObject(sqlUsernameSearch, Integer.class, username);
            if (queryResult > 0) {
                return true;
            } else {
                return false;
            }

    }
};