package com.rohkeymon.SpringBootAPI.MainController;

import com.rohkeymon.SpringBootAPI.database.Cards;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
        RowMapper<Cards> rm = new BeanPropertyRowMapper(Cards.class);
        String sql = "SELECT * from cards;";
        List<Cards> alldata = this.jdbcTemplate.query(sql, rm);
        return alldata;
    }
}

