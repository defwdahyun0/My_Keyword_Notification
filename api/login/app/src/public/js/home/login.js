"use strict";

//질의선택자 : html에 있는 태그에서 하나를 선택하여 자바스크립트에서 제어할 수 있게 해줌. (DOM 객체)
const id=document.querySelector("#id"), //태그에 id로 부여되어있는 "id"를 가져와라.
psword=document.querySelector("#psword"),
loginBtn=document.querySelector("#button");

loginBtn.addEventListener("click",login);

function login(){
   const req = {
       id : id.value,
       psword: psword.value,
   };
   
   fetch("/login",{
       method: "POST",
       headers: {
        "Content-Type" : "application/json",
       },
       body : JSON.stringify(req),
   })
        .then(res=>res.json())
        .then((res)=>{
            if(res.success){
                location.href="/";
            }else{
                alert(res.msg);
            }

        })
        .catch((err)=>{
            console.error("로그인 중 에러 발생");
        });
}
