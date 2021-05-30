
package com.example.restservice;

public class UserInfo {
    private final String token;
    private final String login;
    //private final String password;

    public UserInfo(String token, String login/*, String password*/) {
            this.token = token;
            this.login = login;
            //this.password = password;
    }

    public String getToken() {
            return this.token;
    }

    public String getlogin() {
            return this.login;
    }
    
    /*public String getPassword(){
        return this.password;
    }*/
}