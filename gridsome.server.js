// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path')

module.exports = function (api) {
  api.loadSource(({ getCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/

    // Overwrite product images with an absolute path in order to use
    // them with Graphql
    for (const product of getCollection('Product')._collection.data) {
      if (!path.isAbsolute(product.image)) {
        product.image = path.resolve(product.image)
      }
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
