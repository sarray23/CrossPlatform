import {Component, OnInit} from "@angular/core"
import {ChallengeService} from "./ChallengeService"
import {Challenge} from "./challenge"
import {ActivatedRoute, Router} from "@angular/router"

@Component({
    selector: "ns-challengesDetails",
    templateUrl: 'pages/challenges/ChallengesDeatil.html',
    styleUrls: ["pages/authentification/login-common.css"]
})
export class ChallengesDetailComponent implements OnInit {
 challengeZ:Challenge;
 //prod: ProdCuct = new Product();
 constructor(private service:ChallengeService, private route:Router ,private activated: ActivatedRoute){}
 ngOnInit(){
    //this.Challenges=this.service.getChallenges();
    this.activated.params.subscribe(params=>this.challengeZ=this.service.getChallenge(params["id"]));
 }
AddChallenge(){


    alert(this.challengeZ.nom +"a été ajouté au favoris" );
    this.service.insertMyChallenge(this.challengeZ);

   //this.service.insertFlight(this.prod);
  // this.service.getAll();
   //this.route.navigate(["prods"]);
 }
}
