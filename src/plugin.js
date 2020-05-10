const postcss = require("postcss");
const { each } = require("./utils");

const files = [
  "alignJustify",
  "background",
  "border",
  "colors",
  "display",
  "flex",
  "float",
  //
];

// Docs: https://api.postcss.org/postcss.html
// Article: https://dev.to/mariowhowrites/parsing-open-source-tailwind-css-39j7
module.exports = postcss.plugin("prtcls", (config) => (root) => {
  // if (!_.isObject(config)) {
  // delete require.cache[require.resolve(config)];
  // }

  each(files, (name) => {
    const moduul = require(`./rules/${name}`);
    each(Object.entries(moduul), ([selector, decls]) => {
      const rule = postcss.rule({ selector });
      each(Object.entries(decls), ([prop, value]) => {
        rule.append(postcss.decl({ prop, value }));
      });
      root.append(rule);
    });
  });
});
