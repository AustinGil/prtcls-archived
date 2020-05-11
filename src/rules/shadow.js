const { each } = require("../utils");

const xprt = {
  "box-shadow": "none",
};

const shadows = [
  "(0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06))",
  "(0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06))",
  "(0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05))",
  "(0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04))",
  "(0 25px 50px -12px rgba(0, 0, 0, 0.25))",
];

each(shadows, (val, i) => {
  xprt[`.shadow-${i}`] = {
    "box-shadow": val,
  };
  xprt[`.overflow-x-${val}`] = {
    "overflow-x": val,
  };
  xprt[`.overflow-y-${val}`] = {
    "overflow-y": val,
  };
});

module.exports = xprt;
