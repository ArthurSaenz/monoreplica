import { writeFile } from 'fs/promises'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const crawlableRobotsTxt = `User-agent: *\nAllow: /\nSitemap: https://{{projectName}}/sitemap.xml`
const uncrawlableRobotsTxt = `User-agent: *\nDisallow: /`

// Return a promise that resolves with your XML string
const main = async () => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = dirname(__filename)

  const robotsTxt = process.env.ROBOTS_FILE === 'disallow' ? uncrawlableRobotsTxt : crawlableRobotsTxt

  await writeFile(join(__dirname, '../dist/client/robots.txt'), robotsTxt)
}

await main()
