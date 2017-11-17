"use strict";
var core_1 = require("@angular/core");
var ServiceProduct_1 = require("./ServiceProduct");
var Produit_1 = require("./Produit");
var router_1 = require("@angular/router");
var ProductComponent = (function () {
    function ProductComponent(service, route) {
        this.service = service;
        this.route = route;
        this.prod = new Produit_1.Product();
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.produits = this.service.getFlights();
    };
    ProductComponent.prototype.InsertProduct = function () {
        this.service.insertFlight(this.prod);
        // this.service.getAll();
        //this.route.navigate(["prods"]);
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: "ns-products",
            templateUrl: 'product/produitComponent.html'
        }), 
        __metadata('design:paramtypes', [ServiceProduct_1.ServiceProduct, router_1.Router])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZHVjdENvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlByb2R1Y3RDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUFnQyxlQUNoQyxDQUFDLENBRDhDO0FBQy9DLCtCQUE2QixrQkFDN0IsQ0FBQyxDQUQ4QztBQUMvQyx3QkFBc0IsV0FDdEIsQ0FBQyxDQURnQztBQUNqQyx1QkFBcUIsaUJBRXJCLENBQUMsQ0FGcUM7QUFNdEM7SUFHQywwQkFBb0IsT0FBc0IsRUFBVSxLQUFZO1FBQTVDLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFPO1FBRGhFLFNBQUksR0FBWSxJQUFJLGlCQUFPLEVBQUUsQ0FBQztJQUNvQyxDQUFDO0lBQ25FLG1DQUFRLEdBQVI7UUFDRyxJQUFJLENBQUMsUUFBUSxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUNELHdDQUFhLEdBQWI7UUFFRSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMseUJBQXlCO1FBQ3hCLGlDQUFpQztJQUNuQyxDQUFDO0lBaEJGO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSwrQkFBK0I7U0FDL0MsQ0FBQzs7d0JBQUE7SUFjRix1QkFBQztBQUFELENBQUMsQUFiRCxJQWFDO0FBYlksd0JBQWdCLG1CQWE1QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuaW1wb3J0IHtTZXJ2aWNlUHJvZHVjdH0gZnJvbSBcIi4vU2VydmljZVByb2R1Y3RcIlxuaW1wb3J0IHtQcm9kdWN0fSBmcm9tIFwiLi9Qcm9kdWl0XCJcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCJcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtcHJvZHVjdHNcIixcbiAgICB0ZW1wbGF0ZVVybDogJ3Byb2R1Y3QvcHJvZHVpdENvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiBwcm9kdWl0czpQcm9kdWN0W107XG4gcHJvZDogUHJvZHVjdCA9IG5ldyBQcm9kdWN0KCk7XG4gY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOlNlcnZpY2VQcm9kdWN0LCBwcml2YXRlIHJvdXRlOlJvdXRlcil7fVxuIG5nT25Jbml0KCl7XG4gICAgdGhpcy5wcm9kdWl0cz10aGlzLnNlcnZpY2UuZ2V0RmxpZ2h0cygpO1xuIH1cbiBJbnNlcnRQcm9kdWN0KCl7XG5cbiAgIHRoaXMuc2VydmljZS5pbnNlcnRGbGlnaHQodGhpcy5wcm9kKTtcbiAgLy8gdGhpcy5zZXJ2aWNlLmdldEFsbCgpO1xuICAgLy90aGlzLnJvdXRlLm5hdmlnYXRlKFtcInByb2RzXCJdKTtcbiB9XG59XG4iXX0=