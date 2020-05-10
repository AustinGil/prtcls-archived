const { each } = require("../utils");
// TODO: Variables
const white = "#fff";
const black = "#000";
const colors = [
  { gray: 0 },
  { red: 0 },
  { orange: 25 },
  { yellow: 55 },
  { green: 110 },
  { cyan: 170 },
  { blue: 210 },
  { purple: 270 },
  { pink: 320 },
];
const saturation = "70%";

const xprt = {};

each({ color: "color", bg: "background-color", border: "border-color" }, (val, key) => {
  xprt[`${key}-white`] = {
    val: white,
  };
  xprt[`${key}-black`] = {
    val: black,
  };
  xprt[`${key}-transparent`] = {
    val: "transparent",
  };
});

const lums = ["95%", "86%", "76%", "66%", "57%", "48%", "38%", "29%", "20%"];

each(colors, (h, name) => {
  each(lums, (l, i) => {
    // TODO: support custom s
    let s = saturation;

    if (name === "gray") {
      s = "0";
    }

    xprt[`.color-${name}-${i}`] = {
      color: `hsla(var(--color-h, ${h}), var(--color-s, ${s}), var(--color-l, ${l}), var(--color-a, 1))`,
    };
    xprt[`.bg-${name}-${i}`] = {
      "background-color": `hsla(var(--bg-h, ${h}), var(--bg-s, ${s}), var(--bg-l, ${l}), var(--bg-a, 1))`,
    };
    xprt[`.border-${name}-${i}`] = {
      "border-color": `hsla(var(--border-h, ${h}), var(--border-s, ${s}), var(--border-l, ${l}), var(--border-a, 1))`,
    };
    xprt[`.border-t-${name}-${i}`] = {
      "border-top-color": `hsla(var(--border-h, ${h}), var(--border-s, ${s}), var(--border-l, ${l}), var(--border-a, 1))`,
    };
    xprt[`.border-b-${name}-${i}`] = {
      "border-bottom-color": `hsla(var(--border-h, ${h}), var(--border-s, ${s}), var(--border-l, ${l}), var(--border-a, 1))`,
    };
    xprt[`.border-l-${name}-${i}`] = {
      "border-left-color": `hsla(var(--border-h, ${h}), var(--border-s, ${s}), var(--border-l, ${l}), var(--border-a, 1))`,
    };
    xprt[`.border-r-${name}-${i}`] = {
      "border-right-color": `hsla(var(--border-h, ${h}), var(--border-s, ${s}), var(--border-l, ${l}), var(--border-a, 1))`,
    };
    xprt[`.border-y-${name}-${i}`] = {
      "border-top-color": `hsla(var(--border-h, ${h}), var(--border-s, ${s}), var(--border-l, ${l}), var(--border-a, 1))`,
      "border-bottom-color": `hsla(var(--border-h, ${h}), var(--border-s, ${s}), var(--border-l, ${l}), var(--border-a, 1))`,
    };
    xprt[`.border-x-${name}-${i}`] = {
      "border-left-color": `hsla(var(--border-h, ${h}), var(--border-s, ${s}), var(--border-l, ${l}), var(--border-a, 1))`,
      "border-right-color": `hsla(var(--border-h, ${h}), var(--border-s, ${s}), var(--border-l, ${l}), var(--border-a, 1))`,
    };

    // TODO:
    // $customProps: map-merge(
    //   $customProps,
    //   (
    //     "${name}-${i}":
    //       hsla(
    //         var(--color-h, ${h}),
    //         var(--color-s, ${s}),
    //         var(--color-l, ${l}),
    //         var(--color-a, 1)
    //       ),
    //   )
    // );
  });
});

module.exports = xprt;
