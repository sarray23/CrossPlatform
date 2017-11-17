import {Injectable} from "@angular/core";
import {Product} from "./Produit"
var Sqlite = require("nativescript-sqlite");
@Injectable()
export class ServiceProduct{

flights:Product[];
database:any;
constructor(){
  (new Sqlite("my.db")).then(db => {
      db.execSQL("CREATE TABLE IF NOT EXISTS "+
      "prods (id INTEGER PRIMARY KEY AUTOINCREMENT,"+
      "  name TEXT, price INTEGER )")
      .then(id => {
          this.database = db;

         this.getAll();
      }, error => {
          console.log("CREATE TABLE ERROR", error);
      });
  }, error => {
      console.log("OPEN DB ERROR", error);
  });
}

public getAll(){
  this.database.all("SELECT * FROM prods").then(rows => {
      this.flights = [];
      for(var row in rows) {
          this.flights.push({
            id:rows[row][0] ,
            name : rows[row][1],
            price: rows[row][2]
          });
          console.log("id: "+  rows[row][0] +"  name: "+rows[row][1]+"  price: "+rows[row][2]   );
      }
  }, error => {
      console.log("SELECT ERROR", error);
  });
}

insertFlight(flight:Product){
  this.database.execSQL("INSERT INTO prods (name, price) VALUES (?, ?)", [flight.name, flight.price]).then(id => {
      console.log("INSERT RESULT", id);
    this.getAll();
  }, error => {
      console.log("INSERT ERROR", error);
  });
}

deleteAll(){
  this.database.execSQL("DELETE FROM prods").then(id => {
      console.log("Delete RESULT", id);
      this.getAll();

  }, error => {
      console.log("Delete ERROR", error);
  });
}

deleteOneFlight(id:number)
{this.database.execSQL("DELETE FROM prods WHERE id=?",[id]).then(id => {
      console.log("Delete RESULT", id);
      this.getAll();

  }, error => {
      console.log("Delete ERROR", error);
  });



}


getFlights():Product[]{
	this.getAll();
  return this.flights;
}

getFlight(id:number):Product{
  return this.flights.filter(tasks=>tasks.id==id)[0];
}





}
