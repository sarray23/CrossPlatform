import {Injectable} from "@angular/core";
import {Challenge} from "./challenge"
var Sqlite = require("nativescript-sqlite");
@Injectable()
export class ChallengeService {

challenges:Challenge[];

Mychallenges:Challenge[];
database:any;
constructor(){
  if (!Sqlite.exists("examen.db"))
  { Sqlite.copyDatabase("examen.db");}
  (new Sqlite("examen.db")).then(db => {
      db.execSQL("CREATE TABLE IF NOT EXISTS "+
      "challenges (id INTEGER PRIMARY KEY AUTOINCREMENT,"+
      "  nom TEXT)")
      .then(id => {
          this.database = db;

         this.getAllChallenges();
      }, error => {
          console.log("CREATE TABLE ERROR", error);
      });
  }, error => {
      console.log("OPEN DB ERROR", error);
  });
  (new Sqlite("examen.db")).then(db => {
      db.execSQL("CREATE TABLE IF NOT EXISTS "+
      "challenges (id INTEGER PRIMARY KEY AUTOINCREMENT,"+
      "  nom TEXT)")
      .then(id => {
          this.database = db;

         this.getAllChallenges();
      }, error => {
          console.log("CREATE TABLE ERROR", error);
      });
  }, error => {
      console.log("OPEN DB ERROR", error);
  });

}

public getAllChallenges(){
  this.database.all("SELECT * FROM challenges").then(rows => {
      this.challenges = [];
      for(var row in rows) {
          this.challenges.push({
            id:rows[row][0] ,
            nom : rows[row][1]
          });
          console.log("id: "+  rows[row][0] +"  name: "+rows[row][1]   );
      }
  }, error => {
      console.log("SELECT ERROR", error);
  });
}

public getAllMyChallenges(){
  this.database.all("SELECT * FROM mesChallenges").then(rows => {
      this.Mychallenges = [];
      for(var row in rows) {
          this.challenges.push({
            id:rows[row][0] ,
            nom : rows[row][1]
          });
          console.log("id: "+  rows[row][0] +"  name: "+rows[row][1]   );
      }
  }, error => {
      console.log("SELECT ERROR", error);
  });
}

insertChallenge(flight:Challenge){
  this.database.execSQL("INSERT INTO challenges (name) VALUES (?)", [flight.nom]).then(id => {
      console.log("INSERT RESULT", id);
    this.getAllChallenges();
  }, error => {
      console.log("INSERT ERROR", error);
  });
}


insertMyChallenge(flight:Challenge){
  this.database.execSQL("INSERT INTO mesChallenges (nom) VALUES (?)", [flight.nom]).then(id => {
      console.log("INSERT RESULT", id);
    this.getAllChallenges();
  }, error => {
      console.log("INSERT ERROR", error);
  });
}

deleteAll(){
  this.database.execSQL("DELETE FROM challenges").then(id => {
      console.log("Delete RESULT", id);
      this.getAllChallenges();

  }, error => {
      console.log("Delete ERROR", error);
  });
}

deleteOneChallenge(id:number)
{this.database.execSQL("DELETE FROM challenges WHERE id=?",[id]).then(id => {
      console.log("Delete RESULT", id);
      this.getAllChallenges();

  }, error => {
      console.log("Delete ERROR", error);
  });



}


getChallenges():Challenge[]{
	this.getAllChallenges();
  return this.challenges;
}

getMyChallenges():Challenge[]{
	this.getAllMyChallenges();
  return this.Mychallenges;
}

getChallenge(id:number):Challenge{
  console.log("id: "+id);
  return this.challenges.filter(tasks=>tasks.id==id)[0];
}





}
