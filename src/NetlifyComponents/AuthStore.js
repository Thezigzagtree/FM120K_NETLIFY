import { decorate, observable } from "mobx";
import axios from "axios";
import jwt_decode from "jwt-decode";

const instance = axios.create ({
    baseURL: "",
});

class AuthStore 
{
    constructor()
    {
        this.username = null;
        this.loginError = "";
        this.sampleFound = null;
        
    }

   

    setAuthToken(token) {
        axios.defaults.headers.common.Authorization = `jwt ${token}`;
        
    }

    checkForToken = () =>  {
        const token = localStorage.getItem("myToken");
        if (token) 
        {
            const currentTime = Date.now() / 1000;
            const user = jwt_decode (token);
            console.log(user);
            if (user.exp >= currentTime) 
            {
                this.setAuthToken(token);
                this.username = user;
            }
            else
                {
                    this.signout();
                }
        }  
    };

    signout = () => {
        delete axios.defaults.headers.common.Authorization;
        localStorage.removeItem("myToken");
        this.user = null;
    };
    


    AttemptLogin(userData) 
    {
      
        axios
        .post("https://fm120k.com/login/", userData)
        .then(tokenObj => {
            const user = jwt_decode(tokenObj.data.token);
            this.setAuthToken (tokenObj.data.token);
            this.username = user;
            localStorage.setItem("myToken", tokenObj.data.token);
            //console.log(tokenObj.username);
            
           
        }
        ).catch(err => 
            {
            this.loginError = err.response.data.non_field_errors[0];
            console.log(err.response.data.non_field_errors[0]);
            
        })
            
    }

}

decorate (AuthStore, 
    {
    username : observable,
    loginError : observable,
    
});

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;