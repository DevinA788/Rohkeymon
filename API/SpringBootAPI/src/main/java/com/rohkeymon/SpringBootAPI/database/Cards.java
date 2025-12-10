package com.rohkeymon.SpringBootAPI.database;

import org.springframework.stereotype.Component;

@Component
public class Cards {
    private String decklist_order;
    private String decklist_id;
    private String card_id;
    private String card_copies;

    public String getDecklist_order() {
        return this.decklist_order;
    }

    public void setDecklist_order(String decklist_order) {
        this.decklist_order = decklist_order;
    }

    public String getDecklist_id() {
        return this.decklist_id;
    }

    public void setDecklist_id(String decklist_id) {
        this.decklist_id = decklist_id;
    }

    public String getCard_id() {
        return this.card_id;
    }

    public void setCard_id(String card_id) {
        this.card_id = card_id;
    }

    public String getCard_copies() {
        return this.card_copies;
    }

    public void setCard_copies(String card_copies) {
        this.card_copies = card_copies;
    }

    @Override
    public String toString() {
        return "Cards{" +
                "decklist_order='" + decklist_order + '\'' +
                ", decklist_id='" + decklist_id + '\'' +
                ", card_id='" + card_id + '\'' +
                ", card_copies='" + card_copies + '\'' +
                '}';
    }

    public void add(Cards cards) {
    }
}