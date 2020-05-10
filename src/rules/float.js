const { each } = require("../utils");

const xprt = {
  ".clearfix::after": {
    content: "",
    display: "table",
    clear: "both",
  },
};

each(["right", "left", "none"], (val) => {
  xprt[`.float-${val}`] = {
    float: val,
  };
});

module.exports = xprt;
