"use strict ";

// DOM => Document Object Model 이다

const id = document.querySelector("#id"),
  name = document.querySelector("#name"),
  checkPw = document.querySelector("#check-pw"),
  pw = document.querySelector("#pw"),
  registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);
function register() {
  // 로그인 버튼 클릭 시 id value와 pw value를 가져온다
  const req = {
    id: id.value,
    name: name.value,
    pw: pw.value,
    checkPw: checkPw.value,
  };

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  }).then((res) =>
    res
      .json()
      .then((res) => {
        if (res.success) {
          location.href = "/login";
        } else {
          alert(res.msg);
        }
      })
      .catch((err) => console.error("회원가입 중 에러 발생"))
  );
}
