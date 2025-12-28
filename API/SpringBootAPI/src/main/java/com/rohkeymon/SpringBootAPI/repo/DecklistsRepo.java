package com.rohkeymon.SpringBootAPI.repo;

import com.rohkeymon.SpringBootAPI.model.Decklists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;


import java.util.List;


@Repository // indicates this is a DAO
public class DecklistsRepo {

    public JdbcTemplate getJdbcTemplate() {
        return jdbcTemplate;
    }

    @Autowired
    public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private JdbcTemplate jdbcTemplate;

    public Decklists save(Decklists decklists){

        String sqlInsert = "INSERT INTO rohkeymon_decklists (decklist_id, card_id, card_copies) VALUES (?, ?, 1) ON DUPLICATE KEY UPDATE card_copies = LEAST(card_copies + 1, 4);";

        

        jdbcTemplate.update(sqlInsert, decklists.getDecklist_id(), decklists.getCard_id());

        String sqlSelect = "SELECT * FROM rohkeymon_decklists WHERE decklist_id = ? AND card_id = ?";
        RowMapper<Decklists> rm = new BeanPropertyRowMapper<>(Decklists.class);

        return jdbcTemplate.queryForObject(sqlSelect, rm,
                decklists.getDecklist_id(),
                decklists.getCard_id());

    }

    public List<Decklists> findAll(){
        RowMapper<Decklists> rm = new BeanPropertyRowMapper<>(Decklists.class);
        String sql = "SELECT * from rohkeymon_decklists;";
        List<Decklists> alldata;
        alldata = this.jdbcTemplate.query(sql, rm);
        return alldata;
    }

    public List<Decklists> decklistQuery(){
        RowMapper<Decklists> rm = new BeanPropertyRowMapper<>(Decklists.class);
        String sql = "SELECT * FROM rohkeymon_decklists WHERE decklist_id = '44764e09-bf3d-11f0-a784-d8bbc1d9bfc1';";
        List<Decklists> decklistQueryResult;
        decklistQueryResult = this.jdbcTemplate.query(sql, rm);
        return decklistQueryResult;
    }

    public List<Decklists> findByDecklistId(String decklistId) {
        String sql = "SELECT * FROM rohkeymon_decklists WHERE decklist_id = ?";
        RowMapper<Decklists> rm = new BeanPropertyRowMapper<>(Decklists.class);
        return jdbcTemplate.query(sql, rm, decklistId);
    }
}
