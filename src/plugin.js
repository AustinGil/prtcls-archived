const postcss = require("postcss");
const alignJustify = require("./rules/alignJustify");
const background = require("./rules/background");

function each(arr, fn) {
  for (let i = 0, len = arr.length; i < len; i++) {
    fn(arr[i]);
  }
}

// Docs: https://api.postcss.org/postcss.html
module.exports = postcss.plugin("prtcls", (config) => (root) => {
  // if (!_.isObject(config)) {
  // delete require.cache[require.resolve(config)];
  // }

  const arr = [alignJustify, background];

  each(arr, (set) => {
    each(Object.entries(set), ([selector, decls]) => {
      const rule = postcss.rule({ selector });
      each(Object.entries(decls), ([prop, value]) => {
        rule.append(postcss.decl({ prop, value }));
      });
      root.append(rule);
    });
  });
});
