import { writeFile } from 'fs'
import fsPromises from 'fs/promises'
import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'stream'

import { sitemapLinks } from '../src/shared/lib/paths.js'

const locationOrigin = 'https://{{projectName}}/'

// Create a stream to write to
const stream = new SitemapStream({ hostname: locationOrigin })

// Return a promise that resolves with your XML string
const main = async () => {
  const result = []

  // Add static URLs
  result.push(
    ...sitemapLinks.map((item) => ({
      url: item,
      changefreq: 'daily',
      priority: 1,
    })),
  )

  const categoriesRaw = await fsPromises.readFile('./data/categories-data-manifest.json', 'utf-8')
  const contents = JSON.parse(categoriesRaw)

  const categoriesUrls = contents.raw.categories.map((el) => ({
    url: el.link,
    changefreq: 'daily',
    priority: 1,
  }))

  result.push(...categoriesUrls)

  await fsPromises.writeFile('./dist/client/manifest-sitemap-static.json', JSON.stringify({ staticUrls: result }))

  return streamToPromise(Readable.from(result).pipe(stream)).then((data) => {
    writeFile('./dist/client/sitemap.xml', data.toString(), (err) => {
      if (err) {
        console.log(err)
      }
    })
  })
}

await main()
