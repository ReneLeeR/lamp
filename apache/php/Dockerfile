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
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install libapache2-mod-php7.0
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install libphp7.0-embed 
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php7.0
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php7.0-bcmath
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php7.0-bz2
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php7.0-cgi
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php7.0-cli
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php7.0-common
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php7.0-curl
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php7.0-dba
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php7.0-dev
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php7.0-enchant
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php7.0-fpm
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php7.0-gd
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php7.0-imap
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php7.0-interbase
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php7.0-intl
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php7.0-json
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php7.0-ldap
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php7.0-mbstring
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php7.0-mcrypt
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php7.0-mysql
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php7.0-odbc
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php7.0-opcache
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php7.0-pgsql
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php7.0-phpdbg
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php7.0-pspell
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php7.0-readline
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php7.0-recode
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php7.0-snmp
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php7.0-soap
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php7.0-sqlite3
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php7.0-sybase
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php7.0-tidy
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php7.0-xml
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php7.0-xmlrpc
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php7.0-xsl
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install php7.0-zip 
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install libxml2 
RUN DEBIAN_FRONTEND=noninteractive apt-get --no-install-recommends -y --force-yes --fix-missing install libxml2-dev
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
COPY php.ini /etc/php/7.0/cli/
COPY php.ini /etc/php/7.0/apache2/        
COPY php.ini /etc/php/7.0/cgi/                       
COPY php.ini /etc/php/7.0/embed/          
COPY php.ini /etc/php/7.0/fpm/            
COPY php.ini /etc/php/7.0/phpdbg/