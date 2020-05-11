const { each, rem } = require("../utils");

const maxColumns = 12;

const xprt = {
  ".columns-auto": {
    "grid-template-columns": "repeat(auto-fit, minmax(0, 1fr))",
  },
  ".rows-auto": {
    "grid-template-rows": "auto",
  },
  ".flow-row": {
    "grid-auto-flow": "row",
  },
  ".flow-column": {
    "grid-auto-flow": "column",
  },
  ".gap-0": {
    "grid-gap": "0",
  },
  ".column-gap-0": {
    "grid-column-gap": "0",
  },
  ".row-gap-0": {
    "grid-row-gap": "0",
  },
  "column-span-full": {
    "grid-column": "1/-1",
  },
  "row-span-full": {
    "grid-row": "1/-1",
  },
};

each(["right", "left", "none"], (val) => {
  xprt[`.columns-auto`] = {
    "grid-template-columns": "repeat(auto-fit, minmax(0, 1fr))",
  };
  xprt[`.rows-auto`] = {
    "grid-template-rows": "auto",
  };
  xprt[`.flow-row`] = {
    "grid-auto-flow": "row",
  };
  xprt[`.flow-column`] = {
    "grid-auto-flow": "column",
  };
});

each(maxColumns, (i) => {
  xprt[`.columns-${i}`] = {
    "grid-template-columns": "repeat($i, minmax(0, 1fr))",
  };
  xprt[`.rows-${i}`] = {
    "grid-template-rows": "repeat($i, 1fr)",
  };
  xprt[`.column-span-${i}`] = {
    "grid-column": `span ${i}`,
  };
  xprt[`.row-span-${i}`] = {
    "grid-row": `span ${i}`,
  };
});

const gaps = [4, 8, 16, 24, 32, 48, 64, 96].map(rem);
each(gaps, (val, i) => {
  xprt[`.gap-${i}`] = {
    gap: val,
    "grid-gap": val,
  };
  xprt[`.column-gap-${i}`] = {
    "grid-column-gap": val,
  };
  xprt[`.row-gap-${i}`] = {
    "grid-row-gap": val,
  };
});

module.exports = xprt;
