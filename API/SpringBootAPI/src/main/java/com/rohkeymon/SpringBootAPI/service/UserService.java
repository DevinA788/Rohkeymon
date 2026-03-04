package com.rohkeymon.SpringBootAPI.service;

import com.rohkeymon.SpringBootAPI.model.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import com.rohkeymon.SpringBootAPI.repo.UsersRepo;

@Service
public class UserService {

    @Autowired
    private UsersRepo usersRepo;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public void register(Users users){
        String password = users.getPassword();
        String hashed_pw = bCryptPasswordEncoder.encode(password);
        users.setPassword(hashed_pw);
        usersRepo.save(users);
    }

}
