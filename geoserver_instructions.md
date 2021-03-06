# Installation process for Geoserver 2.9.0 on an Amazon Web Services EC2 instance using Tomcat
References: I used the Google.

## Getting Started
After starting up a new AWS EC2 instance and obtaining a key pair, log into the instance using ssh and install some dependencies:
```
sudo apt-get update
sudo apt-get install tomcat7
sudo apt-get install tomcat7-docs tomcat7-admin tomcat7-examples
sudo apt-add-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install oracle-java8-installer
```

In a text editor, add the following lines to `/etc/environment`:
```
JAVA_HOME="/usr/lib/jvm/java-8-oracle"
export JAVA_HOME
```

Then in bash, type:
```
. /etc/environment
echo $JAVA_HOME
```
The last line should confirm your JAVA_HOME path.

Open the Tomcat config file `/etc/default/tomcat7` in a text editor and add the following parameters to the line containing JAVA_OPTS:
```
JAVA_OPTS="-Djava.security.egd=file:/dev/./urandom -Djava.awt.headless=true -Xmx512m -XX:MaxPermSize=256m -XX:+UseConcMarkSweepGC"
```
Also uncomment the line containing JAVA_HOME and modify the JAVA_HOME path to match the JAVA_HOME environment variable.

Add the following line to `/etc/tomcat7/tomcat-users.xml` between the `<tomcat-users></tomcat-users>` tags:
```
<user username="admin" password="password" roles="manager-gui,admin-gui"/>
```

Download the Web Archive (war) version of Geoserver from `http://geoserver.org/release/2.9.0/` into your home directory. Then move the war file into your webapps directory:
```
sudo mv ~/geoserver.war /var/lib/tomcat7/webapps
sudo service tomcat7 restart
```
You should then be able to log into the Geoserver admin panel from a browser at `http://my.ip.address:8080/geoserver` using the default admin password.

## Allowing CORS
Go to `/var/lib/tomcat7/webapps/geoserver/WEB-INF/web.xml` and add the following code:

```
<filter>
  <filter-name>CorsFilter</filter-name>
  <filter-class>org.apache.catalina.filters.CorsFilter</filter-class>
</filter>
<filter-mapping>
  <filter-name>CorsFilter</filter-name>
  <url-pattern>/*</url-pattern>
</filter-mapping>
```

Save that file and run `sudo /etc/init.d/tomcat7 restart`.
