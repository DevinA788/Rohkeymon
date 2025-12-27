package com.rohkeymon.SpringBootAPI.MainController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rohkeymon.SpringBootAPI.model.Decklists;
import com.rohkeymon.SpringBootAPI.repo.DecklistsRepo;

@RestController
@RequestMapping(
        path = {"api"}
)
@CrossOrigin(origins = "http://127.0.0.1:5500")

public class MainController {
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    DecklistsRepo decklistsRepo;

    @GetMapping(
            path = {"test"}
    )
    String test() {
        return "It works!";
    }

    @GetMapping({"alldata"})
    List<Decklists> alldata() {
        return decklistsRepo.findAll();
    }

    @GetMapping({"decklist"})
    List<Decklists> decklistQueryResult() {return decklistsRepo.decklistQuery();}

    @PostMapping("add-to-deck")
    public Decklists save(@RequestBody Decklists decklists) {
       decklistsRepo.save(decklists);
        return decklists;
        //if card copies >=4, send message saying max has been reached.

    }
        //String card_id = body.get("card_id");
        //Cards cards = new Cards(card_id);*/

}

