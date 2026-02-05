package com.rohkeymon.SpringBootAPI.repo;

import com.rohkeymon.SpringBootAPI.model.Decklists;
import com.rohkeymon.SpringBootAPI.model.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

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

        String sqlString = "INSERT INTO users (user_id, username, hashed_pw) VALUES (?, ?, ?)";

        jdbcTemplate.update(sqlString, users.getUser_id(), users.getUsername(), users.getHashed_pw());

    }
};