package com.rohkeymon.SpringBootAPI.Security;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;



@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean //Custom filter chain bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{

        http.csrf(customizer -> customizer.disable());
        http.sessionManagement(session ->session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
        return http.build();
    }
}