"use strict";
var core_1 = require("@angular/core");
var ServiceProduct_1 = require("./ServiceProduct");
var router_1 = require("@angular/router");
var ProductItemComponent = (function () {
    function ProductItemComponent(service, activated) {
        this.service = service;
        this.activated = activated;
    }
    ProductItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activated.params.subscribe(function (params) { return _this.produit = _this.service.getFlight(params["id"]); });
        //this.produit=this.service.getProduct(this.activated.snapshot.params["id"]);
        //this.produit=this.service.getProduct();
    };
    ProductItemComponent = __decorate([
        core_1.Component({
            selector: "ns-products",
            templateUrl: 'product/ProduitItemComponent.html'
        }), 
        __metadata('design:paramtypes', [ServiceProduct_1.ServiceProduct, router_1.ActivatedRoute])
    ], ProductItemComponent);
    return ProductItemComponent;
}());
exports.ProductItemComponent = ProductItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZHVjdEl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQcm9kdWN0SXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQWdDLGVBQ2hDLENBQUMsQ0FEOEM7QUFDL0MsK0JBQTZCLGtCQUM3QixDQUFDLENBRDhDO0FBRS9DLHVCQUE2QixpQkFDN0IsQ0FBQyxDQUQ2QztBQVM5QztJQUVDLDhCQUFvQixPQUFzQixFQUFVLFNBQXlCO1FBQXpELFlBQU8sR0FBUCxPQUFPLENBQWU7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFnQjtJQUFFLENBQUM7SUFDaEYsdUNBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxJQUFFLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBakQsQ0FBaUQsQ0FBQyxDQUFDO1FBQzNGLDZFQUE2RTtRQUNoRix5Q0FBeUM7SUFDeEMsQ0FBQztJQWRGO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSxtQ0FBbUM7U0FHbkQsQ0FBQzs7NEJBQUE7SUFXRiwyQkFBQztBQUFELENBQUMsQUFWRCxJQVVDO0FBVlksNEJBQW9CLHVCQVVoQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuaW1wb3J0IHtTZXJ2aWNlUHJvZHVjdH0gZnJvbSBcIi4vU2VydmljZVByb2R1Y3RcIlxuaW1wb3J0IHtQcm9kdWN0fSBmcm9tIFwiLi9Qcm9kdWl0XCJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIlxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIlxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1wcm9kdWN0c1wiLFxuICAgIHRlbXBsYXRlVXJsOiAncHJvZHVjdC9Qcm9kdWl0SXRlbUNvbXBvbmVudC5odG1sJ1xuXG5cbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuIHByb2R1aXQ6UHJvZHVjdDtcbiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6U2VydmljZVByb2R1Y3QsIHByaXZhdGUgYWN0aXZhdGVkOiBBY3RpdmF0ZWRSb3V0ZSl7fVxuIG5nT25Jbml0KCl7XG5cbiAgIHRoaXMuYWN0aXZhdGVkLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zPT50aGlzLnByb2R1aXQ9dGhpcy5zZXJ2aWNlLmdldEZsaWdodChwYXJhbXNbXCJpZFwiXSkpO1xuICAgLy90aGlzLnByb2R1aXQ9dGhpcy5zZXJ2aWNlLmdldFByb2R1Y3QodGhpcy5hY3RpdmF0ZWQuc25hcHNob3QucGFyYW1zW1wiaWRcIl0pO1xuLy90aGlzLnByb2R1aXQ9dGhpcy5zZXJ2aWNlLmdldFByb2R1Y3QoKTtcbiB9XG5cbn1cbiJdfQ==