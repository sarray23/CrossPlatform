import { Component } from "@angular/core";
import { User } from "../User/User";
import { Router } from "@angular/router";
@Component({
    selector: "authentification",
    templateUrl: "pages/authentification/auth.html",
    styleUrls: ["pages/authentification/login-common.css"]


})
export class AuthentificationComponent {

user:User= new User("espritmobile@esprit.tn","");
constructor( private router: Router){}
 //email:string= "espritmobile@esprit.tn" ;

 connectSarra(){
   //this.router.navigate(["prods"]);
  // alert("You are logged in with "+ this.user.email+" password: "+this.user.password);
    this.router.navigate(["home",this.user.email]);
 }
}
