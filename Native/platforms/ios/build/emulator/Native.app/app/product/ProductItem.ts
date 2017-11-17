import {Component, OnInit} from "@angular/core"
import {ServiceProduct} from "./ServiceProduct"
import {Product} from "./Produit"
import {ActivatedRoute} from "@angular/router"
import {Router} from "@angular/router"

@Component({
    selector: "ns-products",
    templateUrl: 'product/ProduitItemComponent.html'


})
export class ProductItemComponent implements OnInit {
 produit:Product;
 constructor(private service:ServiceProduct, private activated: ActivatedRoute){}
 ngOnInit(){

   this.activated.params.subscribe(params=>this.produit=this.service.getFlight(params["id"]));
   //this.produit=this.service.getProduct(this.activated.snapshot.params["id"]);
//this.produit=this.service.getProduct();
 }

}
