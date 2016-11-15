# 瑞光微信公众号页面

## Usage

1. 安装 NodeJS , https://nodejs.org/
2. 修改 config 下配置文件编辑页面信息   
3. 执行 build.bat 打包 (首次打包需要先执行 install.bat 安装依赖)
4. 如果 build.bat 失败，需要重新安装依赖，然后再重新执行build.bat打包
`删除或者重命名 node_modules 文件夹，然后执行 install.bat `

5. 如果需要测试环境则执行 develop.bat ，预览地址 http://localhost:3000/build/test.html
6. 复制 build 文件夹下所有文件到服务器上


## Deploy

1. 上传build目录至服务器指定的目录下
2. 登录微信公众平台修改底部菜单, 标题与URl对应如下:

http://www.example.com/build/index.html - 首页
http://www.example.com/build/description.html - 走进瑞光-公司介绍
http://www.example.com/build/course.html - 走进瑞光-发展历程
http://www.example.com/build/honor.html - 走进瑞光-荣誉资质
http://www.example.com/build/device.html - 走进瑞光-设备装备
http://www.example.com/build/contact.html - 联系我们-联系方式
http://www.example.com/build/location.html - 联系我们-我的位置
http://www.example.com/build/product1.html - 产品中心-可冲散水刺法非织造布-丝瑞洁
http://www.example.com/build/product2.html - 产品中心-SP湿法复合非织造布
http://www.example.com/build/product3.html - 产品中心-水刺法非织造布
http://www.example.com/build/product4.html - 产品中心-纺熔法非织造布    
http://www.example.com/build/product5.html - 产品中心-新品推荐