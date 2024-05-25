#!/usr/bin/env zx

const username = await question('What is your GitHub username? \n')
const token = await question('Do you have GitHub token in env? \n', {
  choices: Object.keys(process.env),
})

let headers = {}
if (process.env[token]) {
  headers = {
    Authorization: `token ${process.env[token]}`,
  }
}
const res = await fetch(`https://api.github.com/users/${username}/repos`, {
  headers,
})
const data = await res.json()
const urls = data.map((x) => x.git_url)

await $`mkdir -p backups`
cd('./backups')

await Promise.all(urls.map((url) => $`git clone ${url}`))
