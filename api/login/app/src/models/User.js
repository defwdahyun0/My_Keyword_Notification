"user strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body=body;
    }

    //console.log(UserStorage.getUserInfo(client.id)) 에서 안에 있는 함수가
    //완료되기 전에 콘솔에 찍혀버림. (다 읽어오기 전에 찍는다.) -> 비동기 필요.
    async login(){
        const client=this.body;
        try{
         const { u_id, password } = await UserStorage.getUserInfo(client.id);
            if(u_id){
                if(u_id=== client.id && password === client.psword){
                    return {success : true};
                }
                return { success:false, msg:"비밀번호가 틀렸습니다." };
            }
        }catch(e){
            return { success: false, msg: "존재하지 않는 아이디입니다." };
        }
    }

    async register(){
        const client=this.body;
        try{
        const response = await UserStorage.save(client);
        return response;
        } catch(err){
            return { success: false, msg: err };
        }
    }

}

module.exports=User;