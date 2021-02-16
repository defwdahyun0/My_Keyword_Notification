"use strict";

const { resolveCname } = require("dns");
const db=require("../config/db");

class UserStorage{
    

    static getUserInfo(id){
        return new Promise((resolve, reject)=>{
            db.query("SELECT * FROM user WHERE u_id=?;",[id],(err, data)=>{
                if(err) reject(`${err}`);
                if(typeof data[0]=="undefined") reject(false);
                resolve(data[0]);
            });
        });   
    }

    static async save(userInfo){
        return new Promise((resolve, reject)=>{
            db.query("INSERT INTO user(u_id,email,password) VALUES(?,?,?);",
                [userInfo.id, userInfo.email, userInfo.psword],
                (err, data)=>{
                if(err) reject(`${err}`);
                resolve({ success : true });
            });
        });   

    }

}

module.exports=UserStorage;