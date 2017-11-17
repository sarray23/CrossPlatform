"use strict";
var core_1 = require("@angular/core");
var User_1 = require("../User/User");
var router_1 = require("@angular/router");
var AuthentificationComponent = (function () {
    function AuthentificationComponent(router) {
        this.router = router;
        this.user = new User_1.User("espritmobile@esprit.tn", "");
    }
    //email:string= "espritmobile@esprit.tn" ;
    AuthentificationComponent.prototype.connectSarra = function () {
        //this.router.navigate(["prods"]);
        // alert("You are logged in with "+ this.user.email+" password: "+this.user.password);
        this.router.navigate(["home", this.user.email]);
    };
    AuthentificationComponent = __decorate([
        core_1.Component({
            selector: "authentification",
            templateUrl: "pages/authentification/auth.html",
            styleUrls: ["pages/authentification/login-common.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AuthentificationComponent);
    return AuthentificationComponent;
}());
exports.AuthentificationComponent = AuthentificationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxxQkFBcUIsY0FBYyxDQUFDLENBQUE7QUFDcEMsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFRekM7SUFHQSxtQ0FBcUIsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFEbkMsU0FBSSxHQUFPLElBQUksV0FBSSxDQUFDLHdCQUF3QixFQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUNyQywwQ0FBMEM7SUFFMUMsZ0RBQVksR0FBWjtRQUNFLGtDQUFrQztRQUNuQyxzRkFBc0Y7UUFDcEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFqQkY7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixXQUFXLEVBQUUsa0NBQWtDO1lBQy9DLFNBQVMsRUFBRSxDQUFDLHlDQUF5QyxDQUFDO1NBR3pELENBQUM7O2lDQUFBO0lBWUYsZ0NBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQztBQVhZLGlDQUF5Qiw0QkFXckMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL1VzZXIvVXNlclwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYXV0aGVudGlmaWNhdGlvblwiLFxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2F1dGhlbnRpZmljYXRpb24vYXV0aC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9hdXRoZW50aWZpY2F0aW9uL2xvZ2luLWNvbW1vbi5jc3NcIl1cblxuXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpZmljYXRpb25Db21wb25lbnQge1xuXG51c2VyOlVzZXI9IG5ldyBVc2VyKFwiZXNwcml0bW9iaWxlQGVzcHJpdC50blwiLFwiXCIpO1xuY29uc3RydWN0b3IoIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpe31cbiAvL2VtYWlsOnN0cmluZz0gXCJlc3ByaXRtb2JpbGVAZXNwcml0LnRuXCIgO1xuXG4gY29ubmVjdFNhcnJhKCl7XG4gICAvL3RoaXMucm91dGVyLm5hdmlnYXRlKFtcInByb2RzXCJdKTtcbiAgLy8gYWxlcnQoXCJZb3UgYXJlIGxvZ2dlZCBpbiB3aXRoIFwiKyB0aGlzLnVzZXIuZW1haWwrXCIgcGFzc3dvcmQ6IFwiK3RoaXMudXNlci5wYXNzd29yZCk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiaG9tZVwiLHRoaXMudXNlci5lbWFpbF0pO1xuIH1cbn1cbiJdfQ==