# 🚧 Sanity Test

### Test:

```js
import { realpathSync } from 'fs'
import { dirname, join, normalize } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const srcDir = normalize(join(__dirname, '..'))
const rootDir = normalize(join(srcDir, '..'))
const appDir = normalize(realpathSync(process.cwd()))
const tmpDir = normalize(join(rootDir, '/tmp'))

console.log('\n')
console.log(`Current dirname  -> ${chalk.blue(appDir)}`)
console.log(`Src directory -> ${chalk.blue(srcDir)}`)
console.log(`Root directory -> ${chalk.blue(rootDir)}`)
console.log(`Temp directory -> ${chalk.blue(tmpDir)}`)
```
