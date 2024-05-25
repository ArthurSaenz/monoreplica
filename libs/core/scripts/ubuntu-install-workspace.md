# Install all workspace deps

### Upgrade

```bash
sudo apt update
sudo apt upgrade -y
```

### NodeJS and NPM global

```bash
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - && sudo apt install -y nodejs

mkdir ~/.npm-global

npm config set prefix '~/.npm-global'

echo -e '\nexport PATH=~/.npm-global/bin:$PATH' >> ~/.profile

source ~/.profile

npm install -g zx
zx -v
```

### Install git

```bash
sudo apt install -y git
```

### Configure git config

```bash
git config --global user.name "Arthur Saenko"
git config --global user.email "arthur.saenz7@gmail.com"
git config --global core.editor "code --wait"
```

### Install zsh and oh-my-zsh

> ⚠️ Install only after node.js

```bash
sudo apt install -y zsh

sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### Install the Make util

```bash
sudo apt install -y build-essential
```
