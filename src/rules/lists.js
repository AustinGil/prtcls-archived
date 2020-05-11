const { each } = require("../utils");

const xprt = {
  ".list-outside": {
    "list-style-position": "outside",
  },
  ".list-inside": {
    "list-style-position": "inside",
  },
};

const styles = [
  "disc",
  "circle",
  "square",
  "decimal",
  "lower-alpha",
  "upper-alpha",
  "lower-roman",
  "upper-roman",
];
each(styles, (val) => {
  xprt[`.list-${val}`] = {
    "list-style-type": val,
  };
});

module.exports = xprt;
