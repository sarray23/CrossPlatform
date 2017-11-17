import { Component } from "@angular/core";
import { User } from "../User/User";
import { Router } from "@angular/router";
@Component({
    selector: "authentification",
    templateUrl: "pages/authentification/auth.html",
    styleUrls: ["pages/authentification/login-common.css"]


})
export class AuthentificationComponent {

user:User= new User("Admin","Admin");
constructor( private router: Router){}
 //email:string= "espritmobile@esprit.tn" ;

 connectSarra(){
  if (this.user.email != "Admin"){
    alert("Erreur d'authentification");
  }
  else if (this.user.password != "Admin"){
    alert("Erreur d'authentification");
  }

else {
  this.router.navigate(["home"]);

  //this.service.insertUser(this.userRegistred);
  //this.service.getAll();
   //this.router.navigate([""]);
}
 }
}
