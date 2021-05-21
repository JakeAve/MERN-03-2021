
# Deployment AWS

- [ ] https://console.aws.amazon.com/?nc2=h_m_mc
- [ ] Ir a "Launch a virtual machine"
- [ ] Seleccionar a "Ubuntu Server 20.04 LTS (HVM), SSD Volume Type"
- [ ] Seleccionar "Free tier eligible"
- [ ] Ir arriba al paso "6. Configure Security Group"
- [ ] Cambiar "SSH TCP 22 My IP " (El IP se generará)
- [ ] Añadir "HTTP TCP 80 Anywhere 0.0.0.0/0, ::/0"
- [ ] Añadir "HTTPs TCP 443 Anywhere 0.0.0.0/0, ::/0"
- [ ] Darle click abajo al "Review and Launch"
- [ ] Seleccionar "Launch"
- [ ] Seleccionar "Create a new key pair"
- [ ] No importa lo que pongas para el nombre, pero el nombre para mi será "mern-1"
- [ ] Seleccionar "Download Key Pair." Lo guardé en Desktop
- [ ] Seleccionar "Launch Instance"
- [ ] Ir al tabla de instancias y darle check a tu instancia, debes ver "Actions" arriba
- [ ] Seleccionar "Actions" "Connect"
- [ ] Darle click al "SSH client"
- [ ] Copiar el ùltimo ejemplo a un sticky note o notepad. Debe ser algo como `ssh -i "mern-1.pem" ubuntu@ec2-35-160-97-190.us-west-2.compute.amazonaws.com`. No cierres esta ventana hasta terminar todo.
- [ ] Abrir el terminal
- [ ] Poner el comando `chmod 400 desktop/mern-1.cer`. Si tu key tiene otro nombre o path, tendràs que hacer `chmod 400 al/archivo/de/key`. También podría ser un archivo .pem.
- [ ] `ssh -i "desktop/mern-1.cer" ubuntu@ec2-35-160-97-190.us-west-2.compute.amazonaws.com` debes poner el path al key tal como antes "desktop/mern-1.cer" y debes usar el "ubuntu@ec-bla-bla-bla" de tu instancia que ya copiaste
- [ ] `yes`
- [ ] Para salir, podrás usar el comando `exit`. A veces tienes que hacer `exit` dos veces. Para entrar de nuevo, el comando estará disponible con la flecha de arriba en tu teclado.

# Instalación

- [ ] Ejecutar los siguientes comandos
```
bash
sudo apt update
sudo apt install nginx git -y
```
- [ ] Instalar NVM
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.1/install.sh | bash
```
- [ ] Averiguar `nvm --version`. Si no sale bien, averigua las instrucciones. Es posible que tengas que copiar una sección de codigo y hacer `sudo nano /etc/bash.bashrc`. Puedes pegar esa sección en la primera linea del archivo. Haz "control x", "y" y "ENTER" para salir.
- [ ] `nvm install node`
- [ ] Averiguar `node -v`
- [ ] `sudo apt install npm`
- [ ] Averiguar `npm -v`

# Copiar y Probar Proyecto en Servidor

- [ ] `git clone tu-url-de-github` (Es posible que tengas que entrar tu login)
- [ ] `cd tu-proyecto`
- [ ] `sudo nano .env` Aquí pones información del .env. Para guardar el archivo:
 - [ ] "control x"
 - [ ] "y"
 - [ ] ENTER
- [ ] `npm i`
- [ ] Ir al directorio de client (usa `ls` para ver archivos que están allí y `pwd` para ver en dónde estás)
- [ ] En el client haz `npm i` o `yarn` (depende en lo que usaste)
- [ ] `npm run build` o `yarn build`
- [ ] `cd ..` (ir al directorio del servidor)
- [ ] Hacer `npm run start` o `node server.js`. Sólo para ver que el servidor funciona. Si está bien, "control c"

# NGINX

- [ ] `sudo mv /etc/nginx/sites-available/default /etc/nginx/sites-available/default-copy`
- [ ] `sudo nano /etc/nginx/sites-available/default`
- [ ] Copiar este código al archivo
```
server {
  listen 80 default_server;
  listen [::]:80 default_server;
  server_name  voting-dojo;
  root /home/ubuntu/voting-dojo-2.0/client/build;
  index index.html;

  location /api {
    proxy_pass http://localhost:5000;
    proxy_redirect off;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
  }

  location / {
    try_files $uri $uri/ =404;
  }

  error_page 404 /index.html;
}
```
- [ ] Para guardar "control x", "y" y ENTER
- [ ] `sudo nginx -t`
- [ ] `sudo systemctl reload nginx`
- [ ] Visitar tu página en el navegador. Puedes volver a AWS seleccionar "ECS Instance Connect", copiar el "Public IP address" y pegarlo como si fuera URL 35.160.97.190

# PM2

- [ ] `sudo npm i pm2 -g` Hay un cheatsheet [PM2 Cheatsheet](https://devhints.io/pm2)
- [ ] `pm2 start server.js --name <nombre-del-proyecto>`
- [ ] `pm2 logs`
- [ ] Visitar tu página en el navegador. Puedes volver a AWS seleccionar "ECS Instance Connect", copiar el "Public IP address" y pegarlo como si fuera URL 35.160.97.190
