"use strict";

const express = require("express");
const router =express.Router();
const ctrl = require("./home.ctrl");

//get으로 요청시 화면 렌더링
router.get("/", ctrl.output.hello);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

//post 요청시 기능 수행
router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

module.exports=router;