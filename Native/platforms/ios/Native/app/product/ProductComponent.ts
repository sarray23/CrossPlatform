import {Component, OnInit} from "@angular/core"
import {ServiceProduct} from "./ServiceProduct"
import {Product} from "./Produit"
import {Router} from "@angular/router"

@Component({
    selector: "ns-products",
    templateUrl: 'product/produitComponent.html'
})
export class ProductComponent implements OnInit {
 produits:Product[];
 prod: Product = new Product();
 constructor(private service:ServiceProduct, private route:Router){}
 ngOnInit(){
    this.produits=this.service.getFlights();
 }
 InsertProduct(){

   this.service.insertFlight(this.prod);
  // this.service.getAll();
   //this.route.navigate(["prods"]);
 }
}
