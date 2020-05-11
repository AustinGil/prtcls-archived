const { each, rem } = require("../utils");

const borderWidths = [1, 2, 4, 8].map(rem);
const radii = [4, 8, 12, 16].map(rem);

const xprt = {
  ".border": {
    border: "1px solid",
  },
  ".border-y": {
    "border-top": "1px solid",
    "border-bottom": "1px solid",
  },
  ".border-x": {
    "border-left": "1px solid",
    "border-right": "1px solid",
  },
  ".border-t": {
    "border-top": "1px solid",
  },
  ".border-b": {
    "border-bottom": "1px solid",
  },
  ".border-l": {
    "border-left": "1px solid",
  },
  ".border-r": {
    "border-right": "1px solid",
  },
  ".border-0": {
    border: "0",
  },
  ".border-y-0": {
    "border-top": "0",
    "border-bottom": "0",
  },
  ".border-x-0": {
    "border-left": "0",
    "border-right": "0",
  },
  ".border-t-0": {
    "border-top": "0",
  },
  ".border-b-0": {
    "border-bottom": "0",
  },
  ".border-l-0": {
    "border-left": "0",
  },
  ".border-r-0": {
    "border-right": "0",
  },
};

each(borderWidths, (value, i) => {
  xprt[`.border-${i}`] = { border: `${value} solid` };
  xprt[`.border-${i}`] = {
    border: `${value} solid`,
  };
  xprt[`.border-y-${i}`] = {
    "border-top": `${value} solid`,
    "border-bottom": `${value} solid`,
  };
  xprt[`.border-x-${i}`] = {
    "border-left": `${value} solid`,
    "border-right": `${value} solid`,
  };
  xprt[`.border-t-${i}`] = {
    "border-top": `${value} solid`,
  };
  xprt[`.border-b-${i}`] = {
    "border-bottom": `${value} solid`,
  };
  xprt[`.border-l-${i}`] = {
    "border-left": `${value} solid`,
  };
  xprt[`.border-r-${i}`] = {
    "border-right": `${value} solid`,
  };
});

each(["solid", "dashed", "dotted", "double", "none"], (val) => {
  xprt[`.border-${val}`] = {
    "border-style": val,
  };
  xprt[`.border-y-${val}`] = {
    "border-top-style": val,
    "border-bottom-style": val,
  };
  xprt[`.border-x-${val}`] = {
    "border-left-style": val,
    "border-right-style": val,
  };
  xprt[`.border-t-${val}`] = {
    "border-top-style": val,
  };
  xprt[`.border-b-${val}`] = {
    "border-bottom-style": val,
  };
  xprt[`.border-l-${val}`] = {
    "border-left-style": val,
  };
  xprt[`.border-r-${val}`] = {
    "border-right-style": val,
  };
});

each({ 0: "0", full: "999px" }, ([key, val]) => {
  xprt[`.radius-${key}`] = {
    "border-radius": val,
  };
  xprt[`.radius-t-${key}`] = {
    "border-top-left-radius": val,
    "border-top-right-radius": val,
  };
  xprt[`.radius-b-${key}`] = {
    "border-bottom-left-radius": val,
    "border-bottom-right-radius": val,
  };
  xprt[`.radius-l-${key}`] = {
    "border-top-left-radius": val,
    "border-bottom-left-radius": val,
  };
  xprt[`.radius-r-${key}`] = {
    "border-top-right-radius": val,
    "border-bottom-right-radius": val,
  };
  xprt[`.radius-tl-${key}`] = {
    "border-top-left-radius": val,
  };
  xprt[`.radius-tr-${key}`] = {
    "border-top-right-radius": val,
  };
  xprt[`.radius-bl-${key}`] = {
    "border-bottom-left-radius": val,
  };
  xprt[`.radius-br-${key}`] = {
    "border-bottom-right-radius": val,
  };
});

each(radii, (val, i) => {
  xprt[`.radius-${i}`] = {
    "border-radius": val,
  };
  xprt[`.radius-t-${i}`] = {
    "border-top-left-radius": val,
    "border-top-right-radius": val,
  };
  xprt[`.radius-b-${i}`] = {
    "border-bottom-left-radius": val,
    "border-bottom-right-radius": val,
  };
  xprt[`.radius-l-${i}`] = {
    "border-top-left-radius": val,
    "border-bottom-left-radius": val,
  };
  xprt[`.radius-r-${i}`] = {
    "border-top-right-radius": val,
    "border-bottom-right-radius": val,
  };
  xprt[`.radius-tl-${i}`] = {
    "border-top-left-radius": val,
  };
  xprt[`.radius-tr-${i}`] = {
    "border-top-right-radius": val,
  };
  xprt[`.radius-bl-${i}`] = {
    "border-bottom-left-radius": val,
  };
  xprt[`.radius-br-${i}`] = {
    "border-bottom-right-radius": val,
  };
});

module.exports = xprt;

exports.borderWidths = borderWidths;
exports.radii = radii;
