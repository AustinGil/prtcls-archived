module.exports = new Array(10).fill().reduce(
  (xprt, _, i) => {
    const num = i + 1;
    const val = num * 0.1;
    xprt[`.bg-opacity-${num}`] = { "--bg-alpha": val.toFixed(1) };
    return xprt;
  },
  { ".bg-opacity-0": { "--bg-alpha": "0" } }
);
