package com.rohkeymon.SpringBootAPI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
public class SpringBootApiApplication implements CommandLineRunner {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public static void main(String[] args) {
        SpringApplication.run(SpringBootApiApplication.class, args);
    }

    public void run(String... args) throws Exception {
        int result = (Integer)this.jdbcTemplate.queryForObject("SELECT COUNT(*) FROM users", Integer.class);
        if (result > 0) {
            System.out.println(result + " <---- Here, Dev.");
        }

    }
}