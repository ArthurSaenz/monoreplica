# Markdown Scripts

It's possible to write scripts using markdown. Only code blocks will be executed
by zx. Try to run `zx scripts/example.md`.

### 🔈 Quite mode

```js
// $.verbose = false
```

or

`zx scripts/example.md --quite`

A bash code (with `bash` or `sh` language tags) also will be executed:

```bash
lsb_release -a
whoami
ls -la
pwd
```

If file has no extension, zx assumes it's ESM.

The `__filename` will be pointed to **markdown.md**:

```js
console.log(chalk.yellowBright(__filename))
```

The `__dirname` will be pointed to **markdown.md**:

```js
console.log(chalk.yellowBright(__dirname))
```

**or another way**

```js
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
```

We can use imports here as well:

```js
await import('./setup.mjs')
```
