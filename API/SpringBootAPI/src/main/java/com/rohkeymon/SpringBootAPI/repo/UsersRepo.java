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
}
    @Autowired
    public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private JdbcTemplate jdbcTemplate;

    public Username save(Username username){

        String sqlString = "INSERT INTO users (user_id, username, card_copies) VALUES (?, ?, 1) ON DUPLICATE KEY UPDATE card_copies = LEAST(card_copies + 1, 4);";

        jdbcTemplate.update(sqlString, decklists.getDecklist_id(), decklists.getCard_id());

        String sqlSelect = "SELECT * FROM rohkeymon_decklists WHERE decklist_id = ? AND card_id = ?";
        RowMapper<Decklists> rm = new BeanPropertyRowMapper<>(Decklists.class);

        return jdbcTemplate.queryForObject(sqlSelect, rm,
                decklists.getDecklist_id(),
                decklists.getCard_id());

    }