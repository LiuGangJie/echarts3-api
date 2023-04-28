# echarts3-docs
echarts3 文档、实例，http://echarts.baidu.com/ 离线版

echarts3 没有离线的文档和实例，只能浏览 http://echarts.baidu.com/ ，这点和 2.0 比，是退步。
但实际工作中，由于种种原因，无法连接到互联网时，变得很不方便。因此制作了 echarts3的离线文档供大家使用。

## 部署
下载后解压，放在 WEB 服务器中，如 IIS、Apache 等。

##mac
### echarts3离线api: https://github.com/gogo1217/echarts3-docs
### Tomcat：https://tomcat.apache.org/download-90.cgi
### 1、官网下载 Core - tar.gz
### 2、解压tomcat文件,最好把它文件名重命名为“Tomcat”，最后把它放入/Library(资源库中)
### 2.1、打开finder–>按快捷键：command+shift+G,输入'～/资源库'
### 2.2、进入资源库,将Tomcat文件夹拷贝至此目录下
### 2.3、用终端（Terminal）直接打开Tomcat授权bin目录下的所有操作：终端输入sudo chmod 755 *.sh，输完回车
### cd /Users/L/Library/Tomcat/bin /*进入*/L是用户名
### sudo chmod 755 *.sh /*授权*/
### 2.4、启动
### sudo sh ./startup.sh
### 停止
### sh ./shutdown.sh
### 3、将echarts3文件当如指定位置
### 在/Users/L/Library/Tomcat/webapps下创建文件夹名称（例如：echarts3），将https://github.com/gogo1217/echarts3-docs下载的文件解压放入
### 访问：http://localhost:8080/echarts3/
