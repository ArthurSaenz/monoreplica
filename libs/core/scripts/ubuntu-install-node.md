# 🌐 Install Node.js 16 on Ubuntu 20.04 LTS

> ⚠ IT IS DUPLICATE of `setup.sh`. DO NOT RUN!

```bash
sudo apt update
sudo apt upgrade
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt install -y nodejs
```

**One line (setup.sh):**
`sudo apt update && sudo apt upgrade -y && curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - && sudo apt install -y nodejs && mkdir ~/.npm-global && npm config set prefix '~/.npm-global' && echo -e '\nexport PATH=~/.npm-global/bin:$PATH' >> ~/.profile && source ~/.profile && npm install -g zx && npm install -g @arters/core`

### 📁 Manually change npm's default directory

🔗 https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally

🔗 https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo -e '\nexport PATH=~/.npm-global/bin:$PATH' >> ~/.profile
source ~/.profile
```

### 🔐 Install global ZX

```bash
npm install -g zx
```
