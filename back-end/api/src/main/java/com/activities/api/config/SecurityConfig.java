package com.activities.api.config;

import javax.servlet.http.HttpServletResponse;

import com.activities.api.filters.JwtFilter;
import com.activities.api.utils.CustomPasswordEncoder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{

    @Autowired
    private UserDetailsService userDetailsService;
    @Autowired
    private CustomPasswordEncoder customPasswordEncoder;
    @Autowired
    private JwtFilter jwtFilter;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(customPasswordEncoder.getPasswordEncoder());
    }
    
    @Override @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http = http.cors().and().csrf().disable();
        http = http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and();
        http = http.exceptionHandling().authenticationEntryPoint((request, response, ex) -> {
            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, ex.getMessage());
        }).and();
        http
            .authorizeRequests()
            .antMatchers("/search/**").permitAll() 
            .antMatchers("/users/login").permitAll()  
            .antMatchers("/admin/login").permitAll() 
            .antMatchers("/parent/login").permitAll()    
            .antMatchers("/parent/signup").permitAll()
            .antMatchers("/seller/signup").permitAll()
            .antMatchers("/seller/login").permitAll()
            .antMatchers("/test/**").permitAll()
            .antMatchers("/parent/**").hasAuthority("ROLE_PARENT")
            .antMatchers("/seller/**").hasAuthority("ROLE_SELLER")
            .antMatchers("/admin/**").hasAuthority("ROLE_ADMIN")
            .anyRequest().authenticated();

        http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

    }
}
