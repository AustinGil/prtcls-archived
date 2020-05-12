const { each } = require("../utils");

const xprt = {};

each(["normal", "nowrap", "pre", "pre-line", "pre-wrap"], (val) => {
  xprt[`.whitespace-${val}`] = {
    "white-space": val,
  };
});

each({ all: "break-all", word: "break-word", normal: "normal" }, (val, key) => {
  xprt[`.word-break-${key}`] = {
    "word-break": val,
  };
});

module.exports = xprt;
