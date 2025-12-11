package com.rohkeymon.SpringBootAPI.repo;

import com.rohkeymon.SpringBootAPI.model.Cards;
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

    public void save(Cards cards){

        String sqlInsert = "INSERT INTO cards (decklist_order, decklist_id, card_id, card_copies) VALUES (?, ?, ?, ?);";

        System.out.println(cards.getDecklist_id());

        jdbcTemplate.update(sqlInsert, cards.getDecklist_order(), cards.getDecklist_id(), cards.getCard_id(), cards.getCard_copies());


    }

    public List<Cards> findAll(){
        RowMapper<Cards> rm = new BeanPropertyRowMapper<>(Cards.class);
        String sql = "SELECT * from cards;";
        List<Cards> alldata;
        alldata = this.jdbcTemplate.query(sql, rm);
        return alldata;
    }
}
