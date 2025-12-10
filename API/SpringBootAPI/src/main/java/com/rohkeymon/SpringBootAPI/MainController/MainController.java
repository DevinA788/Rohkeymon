package com.rohkeymon.SpringBootAPI.MainController;

import com.rohkeymon.SpringBootAPI.model.Cards;
import com.rohkeymon.SpringBootAPI.repo.CardsRepo;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(
        path = {"Rohkeymon"}
)
@CrossOrigin(origins = "http://127.0.0.1:5500")

public class MainController {
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    CardsRepo cardsRepo;

    @GetMapping(
            path = {"test"}
    )
    String test() {
        return "It works!";
    }

    @GetMapping({"alldata"})
    List<Cards> alldata() {
        return cardsRepo.findAll();
    }

    @PostMapping("add-to-deck")
    public Cards save(@RequestBody Cards cards) {
       cardsRepo.save(cards);
        return cards;
    }
        //String card_id = body.get("card_id");
        //Cards cards = new Cards(card_id);*/

}

