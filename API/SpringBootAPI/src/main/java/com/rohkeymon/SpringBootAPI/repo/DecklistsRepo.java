package com.rohkeymon.SpringBootAPI.repo;

import com.rohkeymon.SpringBootAPI.model.Decklists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;


import java.util.List;


@Repository // indicates this is a DAO
public class CardsRepo {

    public JdbcTemplate getJdbcTemplate() {
        return jdbcTemplate;
    }

    @Autowired
    public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private JdbcTemplate jdbcTemplate;

    public void save(Decklists decklists){

        String sqlInsert = "INSERT INTO cards (decklist_id, card_id, card_copies) VALUES (?, ?, ?);";

        

        jdbcTemplate.update(sqlInsert, decklists.getDecklist_id(), decklists.getCard_id(), decklists.getCard_copies());

    }

    public List<Decklists> findAll(){
        RowMapper<Decklists> rm = new BeanPropertyRowMapper<>(Decklists.class);
        String sql = "SELECT * from cards;";
        List<Decklists> alldata;
        alldata = this.jdbcTemplate.query(sql, rm);
        return alldata;
    }

    public List<Decklists> decklistQuery(){
        RowMapper<Decklists> rm = new BeanPropertyRowMapper<>(Decklists.class);
        String sql = "SELECT * FROM cards WHERE decklist_id = '44764e09-bf3d-11f0-a784-d8bbc1d9bfc1';";
        List<Decklists> decklistQueryResult;
        decklistQueryResult = this.jdbcTemplate.query(sql, rm);
        return decklistQueryResult;
    }
}
