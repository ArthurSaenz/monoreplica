# 🚀 Lighthouse CI

## 📁 Check docker is running and prepare folder

```js
$.verbose = false
try {
  await $`sudo service docker status`
} catch (p) {
  $.verbose = true
  console.log(`Exit code: ${p.exitCode}`)
  console.log(`Error: ${p.stderr}`)
}
```

```js
await $`rm -rf lhci-data`
await $`mkdir -p lhci-data/.lighthouseci`

if (fs.existsSync(`${process.cwd()}/lighthouserc.js`)) {
  await $`cp ${process.cwd()}/lighthouserc.js lhci-data/lighthouserc.js`
} else {
  await $`cp ${__dirname}/lighthouserc.js lhci-data/lighthouserc.js`
}

await $`sudo chmod -R 777 lhci-data`
$.verbose = true
```

## 🧈 Launch docker run

Explanation of the command below:

1. Run the container with SYS_ADMIN privileges so Chrome can sandbox processes
2. Mount a local directory to the .lighthouseci folder so we can persist reports
3. Run the prepublished LHCI client docker image
4. Run your LHCI command


### ⚙ Configuration CLI 

- https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md

If you want to collect site from localhost add `--network host`

```js
await $`docker container run --network host \
  --cap-add=SYS_ADMIN \
  -v "$(pwd)/lhci-data:/home/lhci/reports" \
  patrickhulce/lhci-client \
  lhci collect --config=./lighthouserc.js`
```

If you want to run `lhci autorun` from docker, you need to pass all envs about build context.
- https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md#build-context


### Serve the result report

```js
await $`npx serve lhci-data/.lighthouseci`
```
