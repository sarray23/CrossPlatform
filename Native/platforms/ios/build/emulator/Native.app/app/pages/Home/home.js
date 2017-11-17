"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var HomeComponent = (function () {
    function HomeComponent(route) {
        var _this = this;
        route.params.subscribe(function (params) { return [_this.user = params['email']]; });
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: "home",
            templateUrl: "pages/Home/home.html",
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBK0IsaUJBQWlCLENBQUMsQ0FBQTtBQU1qRDtJQUVBLHVCQUFZLEtBQXFCO1FBRmpDLGlCQVdDO1FBUEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFNLElBQUcsT0FBQSxDQUFDLEtBQUksQ0FBQyxJQUFJLEdBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQTNCLENBQTJCLENBQUMsQ0FBQztJQUloRSxDQUFDO0lBWkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtTQUN0QyxDQUFDOztxQkFBQTtJQVlGLG9CQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7QUFYYSxxQkFBYSxnQkFXMUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiaG9tZVwiLFxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL0hvbWUvaG9tZS5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzICBIb21lQ29tcG9uZW50IHtcbnVzZXI6c3RyaW5nO1xuY29uc3RydWN0b3Iocm91dGU6IEFjdGl2YXRlZFJvdXRlKXtcblxuICByb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpPT5bdGhpcy51c2VyPXBhcmFtc1snZW1haWwnXV0pO1xuXG5cblxufVxuXG5cbn1cbiJdfQ==