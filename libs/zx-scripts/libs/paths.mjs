import { realpathSync } from 'fs'
import { dirname, join, normalize } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const srcDir = normalize(join(__dirname, '..'))
export const rootDir = normalize(join(srcDir, '..'))
export const appDir = normalize(realpathSync(process.cwd()))
export const tmpDir = normalize(join(rootDir, '/tmp'))

// import fs from 'fs'
// import path from 'path'

// // Make sure any symlinks in the project folder are resolved
// const CONSUMING_ROOT = fs.realpathSync(process.cwd())
// const resolvePath = (relativePath) => path.resolve(CONSUMING_ROOT, relativePath)

// const moduleFileExtensions = ['js', 'ts', 'tsx', 'json']

// // Resolve file paths in the same order as webpack
// const resolveModule = (resolveFn, filePath) => {
//   const extension = moduleFileExtensions.find((extension_) => fs.existsSync(resolveFn(`${filePath}.${extension_}`)))

//   if (extension) {
//     return resolveFn(`${filePath}.${extension}`)
//   }

//   return resolveFn(`${filePath}.js`)
// }

// export const dotenv = resolvePath('.env')
// export const appPath = resolvePath('.') // The ROOT folder of the consuming package
// export const appBuild = resolvePath('dist')
// export const appPublic = resolvePath('public')
// export const appPublicLocales = resolvePath('public/locales')
// export const appPublicStatic = resolvePath('public/static')
// export const appHtml = resolvePath('public/index.html')
// export const appEntry = resolveModule(resolvePath, 'src/index')
// export const appPackageJson = resolvePath('package.json')
// export const appSrc = resolvePath('src')
// export const appTsConfig = resolvePath('tsconfig.json')
// export const yarnLockFile = resolvePath('yarn.lock')
// export const testsSetup = resolveModule(resolvePath, 'src/setupTests')
// export const appNodeModules = resolvePath('node_modules')
