import * as pagesMeta from './pages'

function createMeta (data) {
  return {
    title: data.title,
    meta: [
      { name: 'theme-color', content: data.themeColor },
      { name: 'description', content: data.description },
      { property: 'og:title', content: `${data.title} - ${data.siteName}` },
      { property: 'og:description', content: data.description },
      { property: 'og:url', content: data.url },
      { property: 'og:type', content: data.ogType },
      { nampropertye: 'og:image', content: `${data.siteUrl}${data.ogImage}` },
      { name: 'og:locale', content: data.locales[0] },
      { name: 'og:site_name', content: data.siteName }
    ],
    link: [
      { rel: 'canonical', href: data.url },
      { rel: 'alternate', hreflang: data.locales[0], href: data.url },
      { rel: 'alternate', hreflang: data.locales[1], href: data.url },
      { rel: 'alternate', hreflang: 'x-default', href: data.url }
    ]
  }
}

export default function (page, globlalAttrs) {
  if (typeof globlalAttrs === 'undefined') {
    return {}
  }

  const { siteDescription, siteName, siteUrl } = globlalAttrs

  if (typeof pagesMeta[page] === 'undefined') {
    return createMeta({
      ...globlalAttrs,
      title: siteName,
      description: siteDescription,
      url: siteUrl
    })
  }

  return createMeta({
    ...globlalAttrs,
    title: pagesMeta[page].title,
    description: `${pagesMeta[page].description}`,
    url: `${siteUrl}${pagesMeta[page].path}`
  })
}
