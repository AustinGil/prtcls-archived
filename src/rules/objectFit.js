const { each } = require("../utils");

const xprt = {};

each(["contain", "cover", "fill", "none", "scale-down"], (val) => {
  xprt[`.object-${val}`] = {
    "object-fit": val,
  };
});

const positions = [
  "bottom",
  "center",
  "left",
  "left bottom",
  "left top",
  "right",
  "right bottom",
  "right top",
  "top",
];
each(positions, (val) => {
  xprt[`.object-${val}`] = {
    "object-position": val,
  };
});

module.exports = xprt;
