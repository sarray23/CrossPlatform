import {Component, OnInit} from "@angular/core"
import {ChallengeService} from "./ChallengeService"
import {Challenge} from "./challenge"
import {Router} from "@angular/router"

@Component({
    selector: "ns-myChallenges",
    templateUrl: 'pages/challenges/MesChallenges.html',
    styleUrls: ["pages/authentification/login-common.css"]
})
export class MyChallengesComponent implements OnInit {
MyChallenges:Challenge[];
 //prod: ProdCuct = new Product();
 constructor(private service:ChallengeService, private route:Router){}
 ngOnInit(){
    this.MyChallenges=this.service.getMyChallenges();
    
 }

}
