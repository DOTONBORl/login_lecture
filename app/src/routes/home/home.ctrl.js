"use strict";

const user = {
  id: ["aaa"],
  pw: ["1111"],
};

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};
const process = {
  login: (req, res) => {
    const id = req.body.id,
      pw = req.body.pw;

    if (user.id.includes(id)) {
      const idx = user.id.indexOf(id);
      if (user.pw[idx] === pw) {
        return res.json({
          success: true,
        });
      }
    }
    return res.json({
      success: false,
      msg: "로그인에 실패하였습니다. ",
    });
    console.log(id, pw);
  },
};

module.exports = {
  output,
  process,
};
