#!/usr/bin/env zx

const serve = $`npx serve`

for await (const chunk of serve.stdout) {
  if (chunk.includes('Accepting connections')) break
}

await $`curl http://localhost:5000`

serve.kill('SIGINT')
