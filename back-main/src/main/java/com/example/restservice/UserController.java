package com.example.restservice;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class UserController {
        
        private final static String PASSWORD = "default";
        private final static String USER_NAME = "default";
        private final static int TOKEN_LENGHT = 100;
        private String token;
        
        @GetMapping("/connect")
	public ResponseEntity connect(@RequestParam String name, @RequestParam String password) {
            if (!password.equals(PASSWORD) || !USER_NAME.equals(name)){
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
            }
            try{
                token = Utils.generateRandomToken(TOKEN_LENGHT);
            }
            catch(Exception e){
                token = "error";
            }
            return ResponseEntity.ok(new UserInfo(token, USER_NAME));
	}
       
       
        
        @GetMapping("/disconnect")
        public ResponseEntity disconnect(@RequestParam String token){
            if (!token.equals(this.token))
                return ResponseEntity.status(HttpStatus.FORBIDDEN).body(null);
            this.token = "";
            return ResponseEntity.ok(null);
        }
}
