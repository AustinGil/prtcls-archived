const postcss = require("postcss");
const { each, isObject } = require("./utils");

const files = [
  "alignJustify",
  "background",
  "border",
  "colors",
  "display",
  "flex",
  "float",
  "font",
  "grid",
  "lists",
  "objectFit",
  "overflow",
  "position",
];

// TODO: variables
const breakpoints = {
  1: `${640 / 16}em`,
  2: `${768 / 16}em`,
  3: `${1024 / 16}em`,
  4: `${1280 / 16}em`,
};
const pseudos = {
  hover: "hover",
  focus: "focus",
  within: "focus-within",
  active: "active",
  visited: "visited",
  disabled: "disabled",
  first: "first-child",
  last: "last-child",
  even: "nth-child(even)",
  odd: "nth-child(odd)",
  empty: "empty",
  invalid: "invalid",
  required: "required",
};

// Docs: https://api.postcss.org/postcss.html
// Article: https://dev.to/mariowhowrites/parsing-open-source-tailwind-css-39j7
module.exports = postcss.plugin("prtcls", (config) => (root) => {
  // if (!_.isObject(config)) {
  // delete require.cache[require.resolve(config)];
  // }

  each(files, (name) => {
    const moduul = require(`./rules/${name}`);
    each(moduul, (decls, /** @type{string} */ selector) => {
      const rule = postcss.rule({ selector });
      each(decls, (value, /** @type{string} */ prop) => {
        rule.append(postcss.decl({ prop, value }));
      });
      root.append(rule);

      // Pseudos
      // TODO: can this be faster?
      each(pseudos, (suffix, prefix) => {
        const pseudoSelector = `.${prefix}\:${selector.slice(1)}:${suffix}`;
        const pseudoRule = postcss.rule({ selector: pseudoSelector });
        each(decls, (value, /** @type{string} */ prop) => {
          pseudoRule.append(postcss.decl({ prop, value }));
        });
        root.append(pseudoRule);
      });

      // Breakpoints
      // each(breakpoints, (bp, key) => {
      //   const prefix = `bp${key}`;

      //   // @media (min-width: $bp) {
      //   //   @each $class, $rules in $classMap {
      //   //     .#{$prefix}\:#{$class} {
      //   //       @each $property, $value in $rules {
      //   //         #{$property}: $value;
      //   //       }
      //   //     }
      //   //   }
      //   // }
      // });
    });
  });
});
