var Observable = require("data/observable").Observable;
var Sqlite = require("nativescript-sqlite");

function createViewModel(database) {
    var viewModel = new Observable();
    viewModel.id= null;
    viewModel.name = "";
    viewModel.price = "";

    viewModel.insert = function () {
        database.execSQL("INSERT INTO product (id, name, price) VALUES (?,?,?)", [this.id, this.name, this.price]).then(id => {
            console.log("INSERT RESULT", id);
        }, error => {
            console.log("INSERT ERROR", error);
        });
    }

    viewModel.select = function() {
        database.all("SELECT * FROM product").then(rows => {
            for(var row in rows) {
                console.log("RESULT", rows[row]);
            }
        }, error => {
            console.log("SELECT ERROR", error);
        });
    }

    return viewModel;
}

exports.createViewModel = createViewModel;
