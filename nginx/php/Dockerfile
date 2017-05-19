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
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install nginx
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install mysql-server
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php5-cli
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php5-common
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php5-curl
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php5-dev
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php5-enchant
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php5-fpm
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php5-gd
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php5-imap
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php5-interbase
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php5-json
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php5-ldap
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php5-mcrypt
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php5-mysql
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php5-odbc
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php5-pgsql
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php5-phpdbg
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php5-pspell
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php5-readline
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php5-recode
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php5-snmp
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php5-sybase
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php5-tidy
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php5-xmlrpc
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php5-xsl
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install libxml2 
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install libxml2-dev
RUN mkdir /etc/nginx/ssl
RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/nginx/ssl/nginx.key -out /etc/nginx/ssl/nginx.crt -subj "/C=MX/ST=Aguascalientes/L=Aguascalientes/O=Instituto Tecnologico De Aguascalientes/OU=Centro De Computo/CN=ssl.ita.mx"
RUN echo 'root:Uuddlrlrbas-190598'|chpasswd
RUN addgroup web
RUN useradd -d /var/www/html -g web web
RUN echo 'web:password'|chpasswd
RUN chown web:web -R /var/www/html/*
RUN chown web:web -R /var/www/html/
RUN chmod 755 -R /var/www/html/*
RUN chmod 755 -R /var/www/html/
COPY sshd_config /etc/ssh/
COPY default /etc/nginx/sites-available/        
COPY php.ini /etc/php5/cli/
COPY php.ini /etc/php5/apache2/        
COPY php.ini /etc/php5/cgi/                       
COPY php.ini /etc/php5/embed/          
COPY php.ini /etc/php5/fpm/            
COPY php.ini /etc/php5/phpdbg/