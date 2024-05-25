# Create Locally Trusted SSL Certificates with mkcert on Ubuntu 20.04

## Getting Started

- First, update the system packages to the updated version by running the following command:

```bash
sudo apt update
```

## Install Mkcert

- Before installing the Mkcert utility, you will need to install the required packages to your server. You can install it with the following command.

```bash
sudo apt install wget libnss3-tools -y
```

- Once all the packages are installed, download the latest version of Mkcert from Github.

```bash
wget https://github.com/FiloSottile/mkcert/releases/download/v1.4.3/mkcert-v1.4.3-linux-amd64
```

- After downloading Mkcert, move the downloaded binary to the system path.

```bash
sudo mv mkcert-v1.4.3-linux-amd64 /usr/bin/mkcert
```

- Next, set the execution permission to the mkcert.

```bash
sudo chmod +x /usr/bin/mkcert
```

- Next, verify the Mkcert version with the following command.

```bash
mkcert --version
```

You should see the following output: `v1.4.3`

## Generate Local CA

- Now, run the following command to generate a local CA certificate.

```bash
mkcert -install
```

You should see the following output:

> The local CA is now installed in the system trust store! ⚡️
>
> The local CA is now installed in the Firefox and/or Chrome/Chromium trust store (requires browser restart)! 🦊

You can check the path of the CA certificate using the following command:

```bash
mkcert -CAROOT
```

You should see the following output:

> ~/.local/share/mkcert

## Generate a Certificate for Local Website

- Next, you can generate the certificate and key file for your locally hosted website using the following command.

```bash
mkcert app.example.com '*.app.example.com' localhost 127.0.0.1 ::1
```

## Configure Nginx to Use the Generated Certificate

- Next, you will need to configure the Nginx webserver to use the generated certificates.
- First, copy the generated certificate files to the `/etc/ssl/` project directory.

```bash
cp app.example.com+3* /etc/ssl/
```

- And change the Nginx config.
