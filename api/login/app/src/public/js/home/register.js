"use strict";

//질의선택자 : html에 있는 태그에서 하나를 선택하여 자바스크립트에서 제어할 수 있게 해줌. (DOM 객체)
const id=document.querySelector("#id"), //태그에 id로 부여되어있는 "id"를 가져와라.
    email=document.querySelector("#email"),
    psword=document.querySelector("#psword"),
    confirmPsword=document.querySelector("#confirm-psword"),
    registerBtn=document.querySelector("#button");

registerBtn.addEventListener("click",register);

function register(){
    if(!id.value) return alert("아이디를 입력해주십시오.");
    if(psword.value!==confirmPsword.value){
        return alert("비밀번호가 일치하지 않습니다.");
    }

   const req = {
       id : id.value,
       psword: psword.value,
       email : email.value,
   };
   console.log(req);
   fetch("/register",{
       method: "POST",
       headers: {
        "Content-Type" : "application/json",
       },
       body : JSON.stringify(req),
   })
        .then(res=>res.json())
        .then((res)=>{
            if(res.success){
                location.href="/login";
            }else{
                alert(res.msg);
            }

        })
        .catch((err)=>{
            console.error("회원가입 중 에러 발생");
        });
}
