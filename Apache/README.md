# Apache set up virtual host

**Virtual host 1**
http://localhost/

**Virtual host 2**
http://loginapp.com/login

### httpd.conf

```text
cd /etc/apache2/
```

Enable httpd-vhost.conf

```text
# Virtual hosts
Include /private/etc/apache2/extra/httpd-vhosts.conf
```

### httpd-vhosts.conf

```text
cd /etc/apache2/extra/
```

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

#### hosts
```text
/private/etc/hosts
```

```text
127.0.0.1	localhost
127.0.0.1	loginapp.com
127.0.0.1	www.loginapp.com
```

### Apache restart, configtest, see process

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

