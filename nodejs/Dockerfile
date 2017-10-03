FROM debian:latest
MAINTAINER rene.lee@mail.ita.mx
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --fix-missing update
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --fix-missing upgrade
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --fix-missing dist-upgrade
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install openssh-server
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install openssl
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install build-essential
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install libxml2-dev
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install curl
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install gnupg2
RUN curl -Ok https://deb.nodesource.com/setup_8.x
RUN sh setup_8.x
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install nodejs
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install mysql-server
RUN mkdir -p /var/www/html/404
RUN mkdir -p /var/www/cgi/nodejs/ssl
RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /var/www/cgi/nodejs/ssl/node.key -out /var/www/cgi/nodejs/ssl/node.crt -subj "/C=MX/ST=Aguascalientes/L=Aguascalientes/O=Instituto Tecnologico De Aguascalientes/OU=Centro De Computo/CN=ssl.ita.mx"
RUN echo 'root:Uuddlrlrbas-190598'|chpasswd
RUN addgroup web
RUN useradd -d /var/www/html -g web web
RUN echo 'web:password'|chpasswd
RUN chown web:web -R /var/www/html/
RUN chmod 755 -R /var/www/html/
RUN cd /var/www/cgi/nodejs
RUN npm install express
RUN npm install serve-favicon
RUN npm install mysql
RUN npm install bluebird
RUN npm install body-parser
RUN npm install jsonwebtoken
RUN npm install morgan
RUN npm install path
RUN npm install promise-mysql
RUN npm install randomstring
RUN npm install socket.io
RUN npm install nodeadmin
RUN npm install forever --global
COPY sshd_config /etc/ssh/
COPY itworks.js /var/www/cgi/nodejs
COPY index.html /var/www/html
COPY favicon.ico /var/www/html
COPY 404 /var/www/html/404
