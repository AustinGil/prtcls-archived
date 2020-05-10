const { each } = require("../utils");

const xprt = {
  ".flex-grow": {
    "flex-grow": "1",
  },
  ".flex-shrink": {
    "flex-shrink": "1",
  },
};

each(["row", "row-reverse", "column", "column-reverse"], (val) => {
  xprt[`.flex-${val}`] = {
    "flex-direction": val,
  };
});

each(["nowrap", "wrap", "wrap-reverse"], (val) => {
  xprt[`.flex-${val}`] = {
    "flex-wrap": val,
  };
});

const flexs = { initial: "0 1 auto", "1": "1 1 0%", auto: "1 1 auto", none: "none" };
each(flexs, (val, key) => {
  xprt[`.flex-${key}`] = {
    flex: val,
  };
});

module.exports = xprt;
