const { each, rem } = require("../utils");

const xprt = {};

const spacers = [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 256, 512].map(rem);

function genSpacers(val, name) {
  xprt[`.m-${name}`] = {
    margin: val,
  };
  xprt[`.my-${name}`] = {
    "margin-top": val,
    "margin-bottom": val,
  };
  xprt[`.mx-${name}`] = {
    "margin-left": val,
    "margin-right": val,
  };
  xprt[`.mt-${name}`] = {
    "margin-top": val,
  };
  xprt[`.mb-${name}`] = {
    "margin-bottom": val,
  };
  xprt[`.ml-${name}`] = {
    "margin-left": val,
  };
  xprt[`.mr-${name}`] = {
    "margin-right": val,
  };
  xprt[`.p-${name}`] = {
    padding: val,
  };
  xprt[`.py-${name}`] = {
    "padding-top": val,
    "padding-bottom": val,
  };
  xprt[`.px-${name}`] = {
    "padding-left": val,
    "padding-right": val,
  };
  xprt[`.pt-${name}`] = {
    "padding-top": val,
  };
  xprt[`.pb-${name}`] = {
    "padding-bottom": val,
  };
  xprt[`.pl-${name}`] = {
    "padding-left": val,
  };
  xprt[`.pr-${name}`] = {
    "padding-right": val,
  };
}

each(["0", "auto"], (val) => {
  genSpacers(val, val);
});

each(spacers, (val, i) => {
  genSpacers(val, i);
});

module.exports = xprt;
