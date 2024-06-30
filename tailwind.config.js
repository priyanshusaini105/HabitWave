const { plugin } = require("twrnc")
module.exports = {
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({})
    }),
  ],
  theme: {
    extend: {},
  },
  variants: {},
}
