export default [
  {
    src: `${process.env.GRIDSOME_GA_EMBED_URL}?id=${process.env.GRIDSOME_GA_TRACKING_ID}`,
    type: 'text/javascript',
    body: true
  }
]
