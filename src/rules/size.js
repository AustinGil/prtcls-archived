const { each, rem } = require("../utils");

const xprt = {};

each(["auto", "hidden", "scroll", "visible"], (val) => {
  xprt[`.overflow-${val}`] = {
    overflow: val,
  };
});

const sizes = [8, 16, 24, 32, 48, 64, 96, 128, 256, 384, 512, 640, 768, 1024, 1280].map(rem);
const maxDenominator = 12; // maxColumns TODO: default

each({ w: "width", h: "height" }, (prop, shorty) => {
  each({ 0: "0", auto: "auto", full: "100%" }, (val, name) => {
    xprt[`${shorty}-${name}`] = {
      prop: val,
    };
    xprt[`min-${shorty}-${name}`] = {
      [`min-${prop}`]: val,
    };
    xprt[`max-${shorty}-${name}`] = {
      [`max-${prop}`]: val,
    };

    each(["vw", "vh"], (unit) => {
      xprt[`${shorty}-screen`] = {
        prop: `100${unit}`,
      };
      xprt[`min-${shorty}-screen`] = {
        [`min-${prop}`]: `100${unit}`,
      };
      xprt[`max-${shorty}-screen`] = {
        [`max-${prop}`]: `100${unit}`,
      };
    });

    each(sizes, (val, i) => {
      xprt[`${shorty}-${i}`] = {
        prop: val,
      };
      xprt[`min-${shorty}-${i}`] = {
        [`min-${prop}`]: val,
      };
      xprt[`max-${shorty}-${i}`] = {
        [`max-${prop}`]: val,
      };
    });

    for (let denominator = 2; denominator < maxDenominator; denominator++) {
      for (let numerator = 1; numerator < denominator - 1; numerator++) {
        xprt[`${shorty}-${numerator}\/${denominator}`] = {
          prop: `${(numerator / denominator) * 100}%`,
        };
        xprt[`min-${shorty}-${numerator}\/${denominator}`] = {
          [`min-${prop}`]: `${(numerator / denominator) * 100}%`,
        };
        xprt[`max-${shorty}-${numerator}\/${denominator}`] = {
          [`max-${prop}`]: `${(numerator / denominator) * 100}%`,
        };
      }
    }
  });
});

// TODO:
// @for $i from 1 through length($breakpoints) {
//   val: nth($breakpoints, $i) / $remBase * 1rem;
//   $classMap: map-merge(
//     $classMap,
//     (
//       xprt[`w-bp${i}`] = {
//         width: val
//       ),
//       xprt[`min-w-bp${i}`] = {
//         min-width: val
//       ),
//       xprt[`max-w-bp${i}`] = {
//         max-width: val
//       )
//     )
//   );
// }

module.exports = xprt;
