package com.rohkeymon.SpringBootAPI.controller;

import com.rohkeymon.SpringBootAPI.model.Users;
import com.rohkeymon.SpringBootAPI.repo.UsersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    UsersRepo usersRepo;

    @PostMapping("/register")
    public Users register(@RequestBody Users user){
        return usersRepo.save(Users);
    }

}
