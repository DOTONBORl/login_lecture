"use strict";
// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// 라우팅
const home = require("./src/routes/home");

// 뷰 엔진 설정
app.set("view engine", "ejs");
app.set("views", "./src/views"); // 뷰 파일이 저장된 디렉토리 설정 (옵션)

app.use(express.static(`${__dirname}/src/public`)); // express의 static란 메서드로 정적 경로 추가
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // URL을 통해 전달되는 데이터 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않은 문제

app.use("/", home); // use => 미들웨어를 등록해주는 메서드임

module.exports = app;
