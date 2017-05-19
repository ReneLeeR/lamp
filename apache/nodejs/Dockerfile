FROM ubuntu:latest
MAINTAINER rene.lee@mail.ita.mx
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --fix-missing update
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --fix-missing upgrade
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --fix-missing dist-upgrade
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install openssh-server
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install openssl
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install build-essential
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install libxml2-dev
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install curl
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install apache2
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install mysql-server 
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install nodejs 
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install npm
RUN npm install -g mysql
RUN npm install -g express
RUN mkdir /var/www/cgi
RUN a2enmod ssl
RUN a2enmod proxy
RUN a2enmod proxy_http
RUN a2enmod proxy_ajp
RUN a2enmod rewrite
RUN a2enmod deflate
RUN a2enmod headers
RUN a2enmod proxy_balancer
RUN a2enmod proxy_connect
RUN a2enmod proxy_html
RUN mkdir /etc/apache2/ssl
RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/apache2/ssl/apache.key -out /etc/apache2/ssl/apache.crt -subj "/C=MX/ST=Aguascalientes/L=Aguascalientes/O=Instituto Tecnologico De Aguascalientes/OU=Centro De Computo/CN=ssl.ita.mx"
RUN a2ensite default-ssl.conf
RUN echo 'root:Uuddlrlrbas-190598'|chpasswd
RUN addgroup web
RUN useradd -d /var/www/html -g web web
RUN echo 'web:password'|chpasswd
RUN chown web:web -R /var/www/html/*
RUN chown web:web -R /var/www/html/
RUN chmod 755 -R /var/www/html/*
RUN chmod 755 -R /var/www/html/
COPY sshd_config /etc/ssh/
COPY default-ssl.conf /etc/apache2/sites-available/