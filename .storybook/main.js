const { getStoriesPaths } = require('slice-machine-ui/helpers/storybook')
module.exports = {
  stories: [...getStoriesPaths(), "../styles/globals.css"]
}