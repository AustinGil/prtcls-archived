const { each } = require("../utils");

const xprt = {};

each(["auto", "hidden", "scroll", "visible"], (val) => {
  xprt[`.overflow-${val}`] = {
    overflow: val,
  };
  xprt[`.overflow-x-${val}`] = {
    "overflow-x": val,
  };
  xprt[`.overflow-y-${val}`] = {
    "overflow-y": val,
  };
});

module.exports = xprt;
