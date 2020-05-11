const { each, rem } = require("../utils");

const fontSans = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`;
const fontSerif = `Georgia, Cambria, "Times New Roman", Times, serif`;
const fontMono = `Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;

const fontStacks = [fontSans, fontSerif, fontMono];
const fontSizes = [12, 16, 20, 24, 32, 40, 48, 64, 80, 96].map(rem);

const xprt = {};

each({ sans: fontSans, serif: fontSerif, mono: fontMono }, (val, key) => {
  xprt[`.font-${key}`] = {
    "font-family": val,
  };
});

each(fontStacks, (val, i) => {
  xprt[`.font-${i}`] = {
    "font-family": val,
  };
});

each(fontSizes, (val, i) => {
  xprt[`.size-${i}`] = {
    "font-size": val,
  };
});

each(9, (i) => {
  const val = i * 100;
  xprt[`.weight-${i}`] = {
    "font-weight": val.toString(),
  };
});

module.exports = xprt;
