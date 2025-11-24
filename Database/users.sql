
CREATE TABLE `users` (
  `user_id` char(36) NOT NULL DEFAULT (uuid()),
  `username` varchar(45) DEFAULT NULL,
  `hashed_pw` varchar(45) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `email` varchar(319) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

