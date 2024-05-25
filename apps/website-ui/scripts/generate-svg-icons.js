import { exec } from 'node:child_process'
import * as fsPromises from 'node:fs/promises'
import path from 'node:path'
import url from 'node:url'
import util from 'node:util'

const execFn = util.promisify(exec)

const generateSvgSprite = async (path) => {
  const { stdout, stderr } = await execFn(
    `pnpm exec rmx svg-sprite ./src/shared/ui/atoms/svg-icons/assets ./src/shared/ui/atoms/svg-icons --components`,
  )

  console.log('\n', stdout)
  if (stderr) console.error('stderr:', stderr)
}

const getFiles = async (dir, files = []) => {
  const fileList = await fsPromises.readdir(dir)

  for (const file of fileList) {
    const name = `${dir}/${file}`

    if ((await fsPromises.stat(name)).isDirectory()) {
      getFiles(name, files)
    } else {
      files.push(name)
    }
  }
  return files
}

async function replaceInFile(pathFile, lineReplace, lineToReplace) {
  try {
    const __filename = url.fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const filenameToReplace = path.join(__dirname, pathFile)

    const contents = await fsPromises.readFile(filenameToReplace, 'utf-8')

    const replaced = contents.replace(lineReplace, lineToReplace)

    await fsPromises.writeFile(filenameToReplace, replaced)

    // console.log('✅ Replace string was completed successfully!')
  } catch (err) {
    console.log(err)
  }
}

const copyFile = async (sourcePath, destinationPath) => {
  const directory = path.dirname(destinationPath)

  if (!(await fsPromises.access(directory))) {
    await fsPromises.mkdir(directory, { recursive: true })
  }

  await fsPromises.copyFile(sourcePath, destinationPath)
}

const copyIcons = async (source, destination) => {
  const files = await fsPromises.readdir(source, { withFileTypes: true })

  for (const dirent of files) {
    const sourcePath = path.join(source, dirent.name)
    const destinationPath = path.join(destination, dirent.name)

    if (dirent.isDirectory() && dirent.name !== 'assets') {
      await fsPromises.mkdir(destinationPath, { recursive: true })

      await copyIcons(sourcePath, destinationPath)
    } else if (dirent.isFile() && dirent.name === 'icon.svg') {
      await copyFile(sourcePath, destinationPath)

      const __dirname = path.dirname(sourcePath)
      const folderPrefix = __dirname.split('/').pop()

      const componenetIcon = path.join('..', sourcePath.replace('.svg', '.tsx'))

      await replaceInFile(componenetIcon, `import href from "./icon.svg";`, '')
      await replaceInFile(
        componenetIcon,
        `export { href }`,
        `export const href = '/assets/images/svg-sprites/${folderPrefix}/icon.svg'`,
      )

      console.log(`✅ Generated svg-sprite for ${sourcePath}`)
    }
  }
}

const main = async () => {
  await generateSvgSprite()
  await copyIcons('./src/shared/ui/atoms/svg-icons', './public/assets/images/svg-sprites')
}

main()
