


CREATE TABLE `cards` (
  `decklist_order` int NOT NULL,
  `decklist_id` char(36) DEFAULT NULL,
  `card_id` varchar(45) DEFAULT NULL,
  `card_copies` int DEFAULT NULL,
  KEY `decklist_id` (`decklist_id`),
  CONSTRAINT `cards_ibfk_1` FOREIGN KEY (`decklist_id`) REFERENCES `decklist` (`decklist_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='''card_id'' is the card ID string provided by the 3rd party API storing the card image, text, etc. ';

