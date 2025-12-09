package com.rohkeymon.SpringBootAPI.MainController;

import com.rohkeymon.SpringBootAPI.database.Cards;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(
        path = {"Rohkeymon"}
)
@CrossOrigin(origins = "http://127.0.0.1:5500")

public class MainController {
    @Autowired
    JdbcTemplate jdbcTemplate;

    @GetMapping(
            path = {"test"}
    )
    String test() {
        return "It works!";
    }

    @GetMapping({"alldata"})
    List<Cards> alldata() {
        RowMapper<Cards> rm = new BeanPropertyRowMapper<>(Cards.class);
        String sql = "SELECT * from cards;";
        List<Cards> alldata;
        alldata = this.jdbcTemplate.query(sql, rm);
        return alldata;
    }

   @PostMapping("add-to-deck")
    public void createCards(@RequestBody Cards cards) {
       System.out.println("cards ->"+cards);
    }
        //String card_id = body.get("card_id");
        //Cards cards = new Cards(card_id);

        //String sqlInsert = "INSERT INTO cards ("card_id ") VALUES (?);";

}

