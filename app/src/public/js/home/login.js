"use strict ";

// DOM => Document Object Model 이다

const id = document.querySelector("#id"),
  pw = document.querySelector("#pw"),
  loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);
function login() {
  // 로그인 버튼 클릭 시 id value와 pw value를 가져온다
  const req = {
    id: id.value,
    pw: pw.value,
  };

  fetch("/login", {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
}
