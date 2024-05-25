# Docker Server LHCI

- 🔗 https://github.com/GoogleChrome/lighthouse-ci/tree/main/docs/recipes/docker-server


```js
try {
  await $`sudo service docker status`
} catch (p) {
  console.log(`Exit code: ${p.exitCode}`)
  console.log(`Error: ${p.stderr}`)
}
```

```bash
docker volume create lhci-data
docker container run --publish 9001:9001 --mount='source=lhci-data,target=/data' --detach patrickhulce/lhci-server
```

After it, need to run `lhci wizard` and complete the wizard with correct URL of image!
