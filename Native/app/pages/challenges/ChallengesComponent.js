"use strict";
var core_1 = require("@angular/core");
var ChallengeService_1 = require("./ChallengeService");
var router_1 = require("@angular/router");
var ChallengesComponent = (function () {
    //prod: ProdCuct = new Product();
    function ChallengesComponent(service, route) {
        this.service = service;
        this.route = route;
    }
    ChallengesComponent.prototype.ngOnInit = function () {
        this.Challenges = this.service.getChallenges();
    };
    ChallengesComponent = __decorate([
        core_1.Component({
            selector: "ns-challenges",
            templateUrl: 'pages/challenges/Challenges.html',
            styleUrls: ["pages/authentification/login-common.css"]
        }), 
        __metadata('design:paramtypes', [ChallengeService_1.ChallengeService, router_1.Router])
    ], ChallengesComponent);
    return ChallengesComponent;
}());
exports.ChallengesComponent = ChallengesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhbGxlbmdlc0NvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNoYWxsZW5nZXNDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUFnQyxlQUNoQyxDQUFDLENBRDhDO0FBQy9DLGlDQUErQixvQkFDL0IsQ0FBQyxDQURrRDtBQUVuRCx1QkFBcUIsaUJBRXJCLENBQUMsQ0FGcUM7QUFPdEM7SUFFQyxpQ0FBaUM7SUFDakMsNkJBQW9CLE9BQXdCLEVBQVUsS0FBWTtRQUE5QyxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQU87SUFBRSxDQUFDO0lBQ3JFLHNDQUFRLEdBQVI7UUFDRyxJQUFJLENBQUMsVUFBVSxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQVhGO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMseUNBQXlDLENBQUM7U0FDekQsQ0FBQzs7MkJBQUE7SUFTRiwwQkFBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBUlksMkJBQW1CLHNCQVEvQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuaW1wb3J0IHtDaGFsbGVuZ2VTZXJ2aWNlfSBmcm9tIFwiLi9DaGFsbGVuZ2VTZXJ2aWNlXCJcbmltcG9ydCB7Q2hhbGxlbmdlfSBmcm9tIFwiLi9jaGFsbGVuZ2VcIlxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIlxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1jaGFsbGVuZ2VzXCIsXG4gICAgdGVtcGxhdGVVcmw6ICdwYWdlcy9jaGFsbGVuZ2VzL0NoYWxsZW5nZXMuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9hdXRoZW50aWZpY2F0aW9uL2xvZ2luLWNvbW1vbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhbGxlbmdlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gQ2hhbGxlbmdlczpDaGFsbGVuZ2VbXTtcbiAvL3Byb2Q6IFByb2RDdWN0ID0gbmV3IFByb2R1Y3QoKTtcbiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6Q2hhbGxlbmdlU2VydmljZSwgcHJpdmF0ZSByb3V0ZTpSb3V0ZXIpe31cbiBuZ09uSW5pdCgpe1xuICAgIHRoaXMuQ2hhbGxlbmdlcz10aGlzLnNlcnZpY2UuZ2V0Q2hhbGxlbmdlcygpO1xuIH1cblxufVxuIl19