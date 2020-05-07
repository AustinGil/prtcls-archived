const itemAlignments = {
  stretch: "stretch",
  start: "flex-start",
  end: "flex-end",
  center: "center",
  baseline: "baseline",
};

const contentAlignments = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  between: "space-betwee",
  around: "space-around",
  evenly: "space-evenly",
  stretch: "stretch",
};

const xprt = {};

Object.entries(itemAlignments).forEach(([key, val]) => {
  xprt[`.align-${key}`] = { "align-items": val };
  xprt[`.align-items-${key}`] = { "align-items": val };
  xprt[`.align-self-${key}`] = { "align-self": val };
  if (val !== "baseline") {
    xprt[`.justify-items-${key}`] = { "justify-items": val };
    xprt[`.justify-self-${key}`] = { "justify-self": val };
  }
});

Object.entries(contentAlignments).forEach(([key, val]) => {
  xprt[`.align-content-${key}`] = { "align-content": val };
  if (val !== "stretch") {
    xprt[`.justify-${key}`] = { "justify-content": val };
    xprt[`.justify-content-${key}`] = { "justify-content": val };
  }
  xprt[`.place-${key}`] = { "place-content": val };
  xprt[`.place-content-${key}`] = { "place-content": val };
  xprt[`.place-self-${key}`] = { "place-self": val };
});

module.exports = xprt;

exports.itemAlignments = itemAlignments;
exports.contentAlignments = contentAlignments;
