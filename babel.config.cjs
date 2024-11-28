module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-reactor", { runtime: "automatic" }],
  ],
};
