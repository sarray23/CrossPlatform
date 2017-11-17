import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
    selector: "home",
    templateUrl: "pages/Home/home.html",
    styleUrls: ["pages/authentification/login-common.css"]
})
export class  HomeComponent {
user:string;
constructor(private router: Router){}

//  route.params.subscribe((params)=>[this.user=params['email']]);


Challenges(){
  this.router.navigate(["challenges"]);
}


MesChallenges(){
this.router.navigate(["meschallenges"]);
}



}
