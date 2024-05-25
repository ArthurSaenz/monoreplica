# Install Docker on Ubuntu 20.04

## Step 1 — Installing Docker

- Update existing list of packages

```bash
sudo apt update
```

- Install a few prerequisite packages which let apt use packages over HTTPS

```bash
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common
```

- Add the GPG key for the official Docker repository to your system

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

- Add the Docker repository to APT sources

```bash
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
```

- Update the package database with the Docker packages from the newly added repo

```bash
sudo apt update
```

- Make sure you are about to install from the Docker repo instead of the default Ubuntu repo

```bash
apt-cache policy docker-ce
```

### Install Docker

```bash
sudo apt install -y docker-ce
```

- Docker should now be installed, the daemon started, and the process enabled to start on boot.

```bash
# sudo systemctl status docker --> for WSL2 is not actual
```

## Step 2 - Install Docker Compose Up

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version
```

## Step 3 — Executing the docker (or docker-compose) command without sudo

ℹ user name is `dev`

```bash
sudo usermod -aG docker dev
su - dev
id -nG
```

## Step 4 - Test

```bash
# Only for WSL2
sudo service docker start

docker run hello-world
```
