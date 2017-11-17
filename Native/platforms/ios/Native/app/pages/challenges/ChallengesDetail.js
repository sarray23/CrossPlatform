"use strict";
var core_1 = require("@angular/core");
var ChallengeService_1 = require("./ChallengeService");
var router_1 = require("@angular/router");
var ChallengesDetailComponent = (function () {
    //prod: ProdCuct = new Product();
    function ChallengesDetailComponent(service, route, activated) {
        this.service = service;
        this.route = route;
        this.activated = activated;
    }
    ChallengesDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.Challenges=this.service.getChallenges();
        this.activated.params.subscribe(function (params) { return _this.challengeZ = _this.service.getChallenge(params["id"]); });
    };
    ChallengesDetailComponent.prototype.AddChallenge = function () {
        alert(this.challengeZ.nom + "a été ajouté au favoris");
        this.service.insertMyChallenge(this.challengeZ);
        //this.service.insertFlight(this.prod);
        // this.service.getAll();
        //this.route.navigate(["prods"]);
    };
    ChallengesDetailComponent = __decorate([
        core_1.Component({
            selector: "ns-challengesDetails",
            templateUrl: 'pages/challenges/ChallengesDeatil.html',
            styleUrls: ["pages/authentification/login-common.css"]
        }), 
        __metadata('design:paramtypes', [ChallengeService_1.ChallengeService, router_1.Router, router_1.ActivatedRoute])
    ], ChallengesDetailComponent);
    return ChallengesDetailComponent;
}());
exports.ChallengesDetailComponent = ChallengesDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhbGxlbmdlc0RldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNoYWxsZW5nZXNEZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUFnQyxlQUNoQyxDQUFDLENBRDhDO0FBQy9DLGlDQUErQixvQkFDL0IsQ0FBQyxDQURrRDtBQUVuRCx1QkFBcUMsaUJBRXJDLENBQUMsQ0FGcUQ7QUFPdEQ7SUFFQyxpQ0FBaUM7SUFDakMsbUNBQW9CLE9BQXdCLEVBQVUsS0FBWSxFQUFVLFNBQXlCO1FBQWpGLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWdCO0lBQUUsQ0FBQztJQUN4Ryw0Q0FBUSxHQUFSO1FBQUEsaUJBR0M7UUFGRSwrQ0FBK0M7UUFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxJQUFFLE9BQUEsS0FBSSxDQUFDLFVBQVUsR0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBdkQsQ0FBdUQsQ0FBQyxDQUFDO0lBQ3BHLENBQUM7SUFDRixnREFBWSxHQUFaO1FBR0ksS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFFLHlCQUF5QixDQUFFLENBQUM7UUFDdkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFakQsdUNBQXVDO1FBQ3hDLHlCQUF5QjtRQUN4QixpQ0FBaUM7SUFDbkMsQ0FBQztJQXRCRjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFdBQVcsRUFBRSx3Q0FBd0M7WUFDckQsU0FBUyxFQUFFLENBQUMseUNBQXlDLENBQUM7U0FDekQsQ0FBQzs7aUNBQUE7SUFtQkYsZ0NBQUM7QUFBRCxDQUFDLEFBbEJELElBa0JDO0FBbEJZLGlDQUF5Qiw0QkFrQnJDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5pbXBvcnQge0NoYWxsZW5nZVNlcnZpY2V9IGZyb20gXCIuL0NoYWxsZW5nZVNlcnZpY2VcIlxuaW1wb3J0IHtDaGFsbGVuZ2V9IGZyb20gXCIuL2NoYWxsZW5nZVwiXG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIlxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1jaGFsbGVuZ2VzRGV0YWlsc1wiLFxuICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvY2hhbGxlbmdlcy9DaGFsbGVuZ2VzRGVhdGlsLmh0bWwnLFxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvYXV0aGVudGlmaWNhdGlvbi9sb2dpbi1jb21tb24uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIENoYWxsZW5nZXNEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuIGNoYWxsZW5nZVo6Q2hhbGxlbmdlO1xuIC8vcHJvZDogUHJvZEN1Y3QgPSBuZXcgUHJvZHVjdCgpO1xuIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTpDaGFsbGVuZ2VTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOlJvdXRlciAscHJpdmF0ZSBhY3RpdmF0ZWQ6IEFjdGl2YXRlZFJvdXRlKXt9XG4gbmdPbkluaXQoKXtcbiAgICAvL3RoaXMuQ2hhbGxlbmdlcz10aGlzLnNlcnZpY2UuZ2V0Q2hhbGxlbmdlcygpO1xuICAgIHRoaXMuYWN0aXZhdGVkLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zPT50aGlzLmNoYWxsZW5nZVo9dGhpcy5zZXJ2aWNlLmdldENoYWxsZW5nZShwYXJhbXNbXCJpZFwiXSkpO1xuIH1cbkFkZENoYWxsZW5nZSgpe1xuXG5cbiAgICBhbGVydCh0aGlzLmNoYWxsZW5nZVoubm9tICtcImEgw6l0w6kgYWpvdXTDqSBhdSBmYXZvcmlzXCIgKTtcbiAgICB0aGlzLnNlcnZpY2UuaW5zZXJ0TXlDaGFsbGVuZ2UodGhpcy5jaGFsbGVuZ2VaKTtcblxuICAgLy90aGlzLnNlcnZpY2UuaW5zZXJ0RmxpZ2h0KHRoaXMucHJvZCk7XG4gIC8vIHRoaXMuc2VydmljZS5nZXRBbGwoKTtcbiAgIC8vdGhpcy5yb3V0ZS5uYXZpZ2F0ZShbXCJwcm9kc1wiXSk7XG4gfVxufVxuIl19