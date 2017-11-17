import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "home",
    templateUrl: "pages/Home/home.html",
})
export class  HomeComponent {
user:string;
constructor(route: ActivatedRoute){

  route.params.subscribe((params)=>[this.user=params['email']]);



}


}
