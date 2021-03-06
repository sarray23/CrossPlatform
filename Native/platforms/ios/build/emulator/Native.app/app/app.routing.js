"use strict";
var auth_1 = require("./pages/authentification/auth");
var home_1 = require("./pages/Home/home");
var ProductComponent_1 = require("./product/ProductComponent");
var ProductItem_1 = require("./product/ProductItem");
exports.routes = [
    { path: "", component: auth_1.AuthentificationComponent },
    { path: "home/:email", component: home_1.HomeComponent },
    { path: "prods", component: ProductComponent_1.ProductComponent },
    { path: "detail/:id", component: ProductItem_1.ProductItemComponent }
];
exports.navigatableComponents = [
    auth_1.AuthentificationComponent, home_1.HomeComponent, ProductComponent_1.ProductComponent, ProductItem_1.ProductItemComponent
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQTJDLCtCQUErQixDQUFDLENBQUE7QUFDM0UscUJBQStCLG1CQUFtQixDQUFDLENBQUE7QUFDbkQsaUNBQWtDLDRCQUE0QixDQUFDLENBQUE7QUFDL0QsNEJBQXNDLHVCQUF1QixDQUFDLENBQUE7QUFFakQsY0FBTSxHQUFPO0lBQ3hCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsZ0NBQXlCLEVBQUc7SUFDbkQsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxvQkFBYSxFQUFHO0lBQ2xELEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsbUNBQWdCLEVBQUM7SUFDM0MsRUFBQyxJQUFJLEVBQUMsWUFBWSxFQUFFLFNBQVMsRUFBRSxrQ0FBb0IsRUFBQztDQUNyRCxDQUFDO0FBRVcsNkJBQXFCLEdBQU87SUFDdkMsZ0NBQXlCLEVBQUMsb0JBQWEsRUFBQyxtQ0FBZ0IsRUFBQyxrQ0FBb0I7Q0FDOUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1dGhlbnRpZmljYXRpb25Db21wb25lbnQgIH0gZnJvbSBcIi4vcGFnZXMvYXV0aGVudGlmaWNhdGlvbi9hdXRoXCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50ICB9IGZyb20gXCIuL3BhZ2VzL0hvbWUvaG9tZVwiO1xuaW1wb3J0IHsgUHJvZHVjdENvbXBvbmVudCAgfSBmcm9tIFwiLi9wcm9kdWN0L1Byb2R1Y3RDb21wb25lbnRcIjtcbmltcG9ydCB7IFByb2R1Y3RJdGVtQ29tcG9uZW50ICB9IGZyb20gXCIuL3Byb2R1Y3QvUHJvZHVjdEl0ZW1cIjtcblxuZXhwb3J0IGNvbnN0IHJvdXRlczogYW55PSBbXG4gIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBBdXRoZW50aWZpY2F0aW9uQ29tcG9uZW50ICB9LFxuICB7IHBhdGg6IFwiaG9tZS86ZW1haWxcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50ICB9LFxuICB7cGF0aDpcInByb2RzXCIsIGNvbXBvbmVudDogUHJvZHVjdENvbXBvbmVudH0sXG4gIHtwYXRoOlwiZGV0YWlsLzppZFwiLCBjb21wb25lbnQ6IFByb2R1Y3RJdGVtQ29tcG9uZW50fVxuXTtcblxuZXhwb3J0IGNvbnN0IG5hdmlnYXRhYmxlQ29tcG9uZW50czogYW55PSBbXG4gIEF1dGhlbnRpZmljYXRpb25Db21wb25lbnQsSG9tZUNvbXBvbmVudCxQcm9kdWN0Q29tcG9uZW50LFByb2R1Y3RJdGVtQ29tcG9uZW50XG5dO1xuIl19