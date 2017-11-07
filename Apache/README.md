# Apache set up virtual host

Virtual host name: **http://loginapp.com/**

### 1. Edit httpd.conf
- Location
```text
cd /etc/apache2/
```

- Uncomment Primary Server
```text
ServerName localhost:80
```

- Enable httpd-vhost.conf

```text
# Virtual hosts
Include /private/etc/apache2/extra/httpd-vhosts.conf
```


### 2. Edit httpd-vhosts.conf

- Location

```text
cd /etc/apache2/extra/
```

- Edit httpd-vhost.conf

```text
<VirtualHost *:80>
    ServerAdmin hiroko@hirokoymj.com
    DocumentRoot "/Library/WebServer/Documents/Login"
    ServerName loginapp.com
    ServerAlias www.loginapp.com
    ErrorLog "/private/var/log/apache2/dummy-host.example.com-error_log"
    CustomLog "/private/var/log/apache2/dummy-host.example.com-access_log" common
</VirtualHost>
```

### 3. add virtual host in `hosts` file

- Location
```text
/private/etc/hosts
```

```text
127.0.0.1	localhost
127.0.0.1	loginapp.com
127.0.0.1	www.loginapp.com
```

### 4. Apache restart, configtest, see process

```text
ps aux | grep httpd
```

```text
sudo apachectl stop
```

```text
sudo apachectl start
```

```text
apachectl configtest
```

