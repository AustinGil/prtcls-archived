const { each } = require("../utils");

// TODO: vars
const lineHeights = ["1", "1.25", "1.375", "1.5", "1.625", "2"];
const letterSpacers = ["-0.05em", "-0.025em", "0", "0.025em", "0.05em", "0.1em"];

const xprt = {
  ".normal-case": {
    "text-transform": "none",
  },
  ".no-line": {
    "text-decoration": "none",
  },
};

each(["uppercase", "lowercase", "capitalize"], (val) => {
  xprt[`.${val}`] = {
    "text-transform": val,
  };
});

each(["underline", "overline", "line-through"], (val) => {
  xprt[`.${val}`] = {
    "text-decoration": "val",
  };
});

each(["center", "left", "right", "justify"], (val) => {
  xprt[`.text-${val}`] = {
    "text-align": val,
  };
});

each(lineHeights, (val, i) => {
  xprt[`.line-h-${i}`] = {
    "line-height": val,
  };
});

each(letterSpacers, (val, i) => {
  xprt[`.spacing-${i}`] = {
    "letter-spacing": val,
  };
});

module.exports = xprt;
