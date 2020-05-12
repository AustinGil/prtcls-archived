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
  "shadow",
  "size",
  "spacing",
  "text",
  "whitespace",
];

// TODO: variables
const breakpoints = {
  bp1: `${640 / 16}em`,
  bp2: `${768 / 16}em`,
  bp3: `${1024 / 16}em`,
  bp4: `${1280 / 16}em`,
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
  // if (!isObject(config)) {
  // delete require.cache[require.resolve(config)];
  // }

  const atRules = Object.entries(breakpoints).reduce((map, [prefix, bp]) => {
    map.set(prefix, postcss.atRule({ name: "media", params: `(min-width: ${bp})` }));
    return map;
  }, new Map());

  each(files, (name) => {
    const moduul = require(`./rules/${name}`);

    // TODO: can any of this be faster?
    each(moduul, (decls, /** @type{string} */ selector) => {
      const rule = postcss.rule({ selector });
      each(decls, (value, /** @type{string} */ prop) => {
        rule.append(postcss.decl({ prop, value }));
      });
      root.append(rule);

      // Pseudos
      each(pseudos, (suffix, prefix) => {
        const pseudoRule = rule.clone({ selector: `.${prefix}\:${selector.slice(1)}:${suffix}` });
        root.append(pseudoRule);
      });

      // Breakpoints
      each(breakpoints, (bp, prefix) => {
        const atRule = atRules.get(prefix);
        const bpRule = rule.clone({ selector: `.${prefix}\:${selector.slice(1)}` });
        atRule.append(bpRule);
      });
    });
  });

  atRules.forEach((atRule) => {
    root.append(atRule);
  });
});
