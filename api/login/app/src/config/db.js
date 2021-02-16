const mysql = require("mysql");
const db=mysql.createConnection({
	host : 'localhost',
	user : "root",
	password : "",
	database : 'key_db',
    port : 3306

});

db.connect();
module.exports=db;