module.exports = {
  plugins: {
    "postcss-nesting": {},
    "postcss-custom-properties": {
      importFrom: "src/core/components/shared.css",
    },
    "postcss-preset-env": {},
  },
};
