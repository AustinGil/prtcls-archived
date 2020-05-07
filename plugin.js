const postcss = require("postcss");
module.exports = postcss.plugin("prtcls", (config) => (root) => {
  // if (!_.isObject(config)) {
  // delete require.cache[require.resolve(config)];
  // }

  const a = postcss.rule({ selector: "a" }).append(postcss.decl({ prop: "color", value: "black" }));

  root.append(a);
});
