const { each } = require("../utils");

const xprt = {
  "display-none": {
    display: "none",
  },
  "visually-hidden": {
    border: "0",
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: "0",
    position: "absolute",
    width: "1px",
  },
};
const items = [
  "inline",
  "block",
  "inline-block",
  "flex",
  "inline-flex",
  "grid",
  "inline-grid",
  "table",
  "table-row",
  "table-cell",
  "table-caption",
  "table-column",
  "table-column-group",
  "table-footer-group",
  "table-header-group",
  "table-row-group",
];

each(items, (val) => {
  xprt[`.${val}`] = {
    display: val,
  };
});

for (let i = 0; i < 10; i++) {
  const val = i * 0.1;
  xprt[`.opacity-${i}`] = {
    opacity: val.toFixed(1),
  };
}

module.exports = xprt;
