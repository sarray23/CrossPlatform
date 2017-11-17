"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    //  route.params.subscribe((params)=>[this.user=params['email']]);
    HomeComponent.prototype.Challenges = function () {
        this.router.navigate(["challenges"]);
    };
    HomeComponent.prototype.MesChallenges = function () {
        this.router.navigate(["meschallenges"]);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "home",
            templateUrl: "pages/Home/home.html",
            styleUrls: ["pages/authentification/login-common.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUUxQyx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQU96QztJQUVBLHVCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFFLENBQUM7SUFFckMsa0VBQWtFO0lBR2xFLGtDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUdELHFDQUFhLEdBQWI7UUFDQSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQW5CRDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLHlDQUF5QyxDQUFDO1NBQ3pELENBQUM7O3FCQUFBO0lBbUJGLG9CQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQztBQWxCYSxxQkFBYSxnQkFrQjFCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImhvbWVcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9Ib21lL2hvbWUuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvYXV0aGVudGlmaWNhdGlvbi9sb2dpbi1jb21tb24uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzICBIb21lQ29tcG9uZW50IHtcbnVzZXI6c3RyaW5nO1xuY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcil7fVxuXG4vLyAgcm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKT0+W3RoaXMudXNlcj1wYXJhbXNbJ2VtYWlsJ11dKTtcblxuXG5DaGFsbGVuZ2VzKCl7XG4gIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImNoYWxsZW5nZXNcIl0pO1xufVxuXG5cbk1lc0NoYWxsZW5nZXMoKXtcbnRoaXMucm91dGVyLm5hdmlnYXRlKFtcIm1lc2NoYWxsZW5nZXNcIl0pO1xufVxuXG5cblxufVxuIl19