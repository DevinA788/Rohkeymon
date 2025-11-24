

CREATE TABLE `decklists` (
  `decklist_id` char(36) NOT NULL DEFAULT (uuid()),
  `decklist_name` varchar(45) DEFAULT NULL,
  `user_id` char(36) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`decklist_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `decklists_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

