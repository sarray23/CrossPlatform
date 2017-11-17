"use strict";
var core_1 = require("@angular/core");
var ChallengeService_1 = require("./ChallengeService");
var router_1 = require("@angular/router");
var MyChallengesComponent = (function () {
    //prod: ProdCuct = new Product();
    function MyChallengesComponent(service, route) {
        this.service = service;
        this.route = route;
    }
    MyChallengesComponent.prototype.ngOnInit = function () {
        this.MyChallenges = this.service.getMyChallenges();
    };
    MyChallengesComponent = __decorate([
        core_1.Component({
            selector: "ns-myChallenges",
            templateUrl: 'pages/challenges/MesChallenges.html',
            styleUrls: ["pages/authentification/login-common.css"]
        }), 
        __metadata('design:paramtypes', [ChallengeService_1.ChallengeService, router_1.Router])
    ], MyChallengesComponent);
    return MyChallengesComponent;
}());
exports.MyChallengesComponent = MyChallengesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVzY2hhbGxlbmdlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1lc2NoYWxsZW5nZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUFnQyxlQUNoQyxDQUFDLENBRDhDO0FBQy9DLGlDQUErQixvQkFDL0IsQ0FBQyxDQURrRDtBQUVuRCx1QkFBcUIsaUJBRXJCLENBQUMsQ0FGcUM7QUFPdEM7SUFFQyxpQ0FBaUM7SUFDakMsK0JBQW9CLE9BQXdCLEVBQVUsS0FBWTtRQUE5QyxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQU87SUFBRSxDQUFDO0lBQ3JFLHdDQUFRLEdBQVI7UUFDRyxJQUFJLENBQUMsWUFBWSxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7SUFFcEQsQ0FBQztJQVpGO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLHFDQUFxQztZQUNsRCxTQUFTLEVBQUUsQ0FBQyx5Q0FBeUMsQ0FBQztTQUN6RCxDQUFDOzs2QkFBQTtJQVVGLDRCQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7QUFUWSw2QkFBcUIsd0JBU2pDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5pbXBvcnQge0NoYWxsZW5nZVNlcnZpY2V9IGZyb20gXCIuL0NoYWxsZW5nZVNlcnZpY2VcIlxuaW1wb3J0IHtDaGFsbGVuZ2V9IGZyb20gXCIuL2NoYWxsZW5nZVwiXG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLW15Q2hhbGxlbmdlc1wiLFxuICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvY2hhbGxlbmdlcy9NZXNDaGFsbGVuZ2VzLmh0bWwnLFxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvYXV0aGVudGlmaWNhdGlvbi9sb2dpbi1jb21tb24uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIE15Q2hhbGxlbmdlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5NeUNoYWxsZW5nZXM6Q2hhbGxlbmdlW107XG4gLy9wcm9kOiBQcm9kQ3VjdCA9IG5ldyBQcm9kdWN0KCk7XG4gY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOkNoYWxsZW5nZVNlcnZpY2UsIHByaXZhdGUgcm91dGU6Um91dGVyKXt9XG4gbmdPbkluaXQoKXtcbiAgICB0aGlzLk15Q2hhbGxlbmdlcz10aGlzLnNlcnZpY2UuZ2V0TXlDaGFsbGVuZ2VzKCk7XG4gICAgXG4gfVxuXG59XG4iXX0=