const { each } = require("../utils");

const xprt = {
  ".z-auto": {
    "z-index": "auto",
  },
};

each(["static", "fixed", "absolute", "relative", "sticky"], (val) => {
  xprt[`.${val}`] = {
    position: val,
  };
});

each(5, (i) => {
  const val = i * 10;
  xprt[`.z-${i}`] = {
    "z-index": val.toString(),
  };
});

each(["0", "auto"], (val) => {
  // $classMap: map-merge(
  //   $classMap,
  //   (
  //     inset-#{$value}:
  //       (
  //         top: $value,
  //         bottom: $value,
  //         left: $value,
  //         right: $value
  //       )
  //   )
  // );

  // $classMap: map-merge(
  //   $classMap,
  //   (
  //     inset-y-#{$value}:
  //       (
  //         top: $value,
  //         bottom: $value
  //       )
  //   )
  // );

  // $classMap: map-merge(
  //   $classMap,
  //   (
  //     inset-x-#{$value}:
  //       (
  //         left: $value,
  //         right: $value
  //       )
  //   )
  // );

  each(["top", "bottom", "left", "right"], (side) => {
    xprt[`${side}-${val}`] = {
      side: val,
    };
  });
});

// @for $denominator from 2 through 4 {
//   @for $numerator from 1 through ($denominator - 1) {
//     @each $side in top, bottom, left, right {
//       $classMap: map-merge(
//         $classMap,
//         (#{$side}-#{$numerator}\/#{$denominator}: (#{$side}: $numerator / $denominator * 100%))
//       );
//     }
//   }
// }

module.exports = xprt;
