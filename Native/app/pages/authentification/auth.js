"use strict";
var core_1 = require("@angular/core");
var User_1 = require("../User/User");
var router_1 = require("@angular/router");
var AuthentificationComponent = (function () {
    function AuthentificationComponent(router) {
        this.router = router;
        this.user = new User_1.User("Admin", "Admin");
    }
    //email:string= "espritmobile@esprit.tn" ;
    AuthentificationComponent.prototype.connectSarra = function () {
        if (this.user.email != "Admin") {
            alert("Erreur d'authentification");
        }
        else if (this.user.password != "Admin") {
            alert("Erreur d'authentification");
        }
        else {
            this.router.navigate(["home"]);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxxQkFBcUIsY0FBYyxDQUFDLENBQUE7QUFDcEMsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFRekM7SUFHQSxtQ0FBcUIsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFEbkMsU0FBSSxHQUFPLElBQUksV0FBSSxDQUFDLE9BQU8sRUFBQyxPQUFPLENBQUMsQ0FBQztJQUNBLENBQUM7SUFDckMsMENBQTBDO0lBRTFDLGdEQUFZLEdBQVo7UUFDQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsQ0FBQSxDQUFDO1lBQzlCLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLENBQUEsQ0FBQztZQUN0QyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBRUgsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFLakMsQ0FBQztJQUNBLENBQUM7SUE1QkY7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixXQUFXLEVBQUUsa0NBQWtDO1lBQy9DLFNBQVMsRUFBRSxDQUFDLHlDQUF5QyxDQUFDO1NBR3pELENBQUM7O2lDQUFBO0lBdUJGLGdDQUFDO0FBQUQsQ0FBQyxBQXRCRCxJQXNCQztBQXRCWSxpQ0FBeUIsNEJBc0JyQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vVXNlci9Vc2VyXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhdXRoZW50aWZpY2F0aW9uXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvYXV0aGVudGlmaWNhdGlvbi9hdXRoLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL2F1dGhlbnRpZmljYXRpb24vbG9naW4tY29tbW9uLmNzc1wiXVxuXG5cbn0pXG5leHBvcnQgY2xhc3MgQXV0aGVudGlmaWNhdGlvbkNvbXBvbmVudCB7XG5cbnVzZXI6VXNlcj0gbmV3IFVzZXIoXCJBZG1pblwiLFwiQWRtaW5cIik7XG5jb25zdHJ1Y3RvciggcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcil7fVxuIC8vZW1haWw6c3RyaW5nPSBcImVzcHJpdG1vYmlsZUBlc3ByaXQudG5cIiA7XG5cbiBjb25uZWN0U2FycmEoKXtcbiAgaWYgKHRoaXMudXNlci5lbWFpbCAhPSBcIkFkbWluXCIpe1xuICAgIGFsZXJ0KFwiRXJyZXVyIGQnYXV0aGVudGlmaWNhdGlvblwiKTtcbiAgfVxuICBlbHNlIGlmICh0aGlzLnVzZXIucGFzc3dvcmQgIT0gXCJBZG1pblwiKXtcbiAgICBhbGVydChcIkVycmV1ciBkJ2F1dGhlbnRpZmljYXRpb25cIik7XG4gIH1cblxuZWxzZSB7XG4gIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImhvbWVcIl0pO1xuXG4gIC8vdGhpcy5zZXJ2aWNlLmluc2VydFVzZXIodGhpcy51c2VyUmVnaXN0cmVkKTtcbiAgLy90aGlzLnNlcnZpY2UuZ2V0QWxsKCk7XG4gICAvL3RoaXMucm91dGVyLm5hdmlnYXRlKFtcIlwiXSk7XG59XG4gfVxufVxuIl19