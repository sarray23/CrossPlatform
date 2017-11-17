import {Component, OnInit} from "@angular/core"
import {ChallengeService} from "./ChallengeService"
import {Challenge} from "./challenge"
import {Router} from "@angular/router"

@Component({
    selector: "ns-challenges",
    templateUrl: 'pages/challenges/Challenges.html',
    styleUrls: ["pages/authentification/login-common.css"]
})
export class ChallengesComponent implements OnInit {
 Challenges:Challenge[];
 //prod: ProdCuct = new Product();
 constructor(private service:ChallengeService, private route:Router){}
 ngOnInit(){
    this.Challenges=this.service.getChallenges();
 }

}
