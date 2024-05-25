/* eslint-disable global-require */
const protect = require('static-auth')
const safeCompare = require('safe-compare')

// https://github.com/flawyte/static-auth
const serveHandler = protect(
  '/',
  (username, password) =>
    safeCompare(username, process.env.DOCUSAURUS_BASIC_AUTH_USERNAME) &&
    safeCompare(password, process.env.DOCUSAURUS_BASIC_AUTH_PASSWORD),
  {
    directory: `${__dirname}/build`,
    realm: 'travelist-basic-auth.node-static-auth',
    onAuthFailed: (res) => {
      res.end('Restricted area, please login (admin:password).')
    },
  },
)

// Serve on localhost if asked to.
// NOTE: This only used for testing locally, this is NOT needed nor used by Vercel once deployed.
if (process.env.SERVE === 'true') {
  const http = require('http')
  const server = http.createServer(serveHandler)
  // eslint-disable-next-line no-console
  server.listen(4444, () => console.log('Listening on port 4444...'))
}

module.exports = serveHandler
