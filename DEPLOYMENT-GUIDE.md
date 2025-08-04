# 🌐 Kelly Peng Portfolio Website - 发布指南

## 📋 网站文件清单

你的网站包含以下文件：

### **主要文件：**
- `kelly_portfolio.html` - 主页面
- `weill-cornell-medicine.html` - Weill Cornell 项目页面
- `tmobile-carelink.html` - T-Mobile 项目页面
- `simon-smart.html` - Simon Smart 项目页面
- `portfolio-config.js` - 项目配置
- `portfolio-manager.js` - 网站管理脚本

### **图片资源：**
- `image/` 文件夹 - 包含所有项目图片

## 🚀 发布到 kellypeng.co 的步骤

### **方法 1: 使用 File Manager (推荐)**

1. **登录你的域名控制面板**
   - 访问你的域名提供商控制面板
   - 找到 "File Manager" 或 "文件管理器"

2. **上传网站文件**
   - 进入 `public_html` 或 `www` 文件夹
   - 上传所有 HTML 文件到根目录
   - 上传 `image/` 文件夹到根目录
   - 上传 `*.js` 文件到根目录

3. **设置主页**
   - 将 `kelly_portfolio.html` 重命名为 `index.html`
   - 或者设置 `kelly_portfolio.html` 为默认页面

### **方法 2: 使用 FTP 上传**

1. **获取 FTP 信息**
   - 从域名提供商获取 FTP 服务器地址
   - 获取用户名和密码

2. **使用 FTP 客户端**
   - 推荐使用 FileZilla 或 Cyberduck
   - 连接到你的服务器
   - 上传所有文件到 `public_html` 目录

### **方法 3: 使用 cPanel**

1. **登录 cPanel**
   - 访问你的 cPanel 控制面板

2. **使用 File Manager**
   - 点击 "File Manager"
   - 导航到 `public_html` 目录
   - 上传所有网站文件

## 📁 文件结构建议

```
public_html/
├── index.html (重命名自 kelly_portfolio.html)
├── weill-cornell-medicine.html
├── tmobile-carelink.html
├── simon-smart.html
├── portfolio-config.js
├── portfolio-manager.js
└── image/
    ├── Weill cornell/
    ├── Tmobile/
    ├── simon/
    ├── comma.ai/
    ├── playground/
    ├── resume/
    └── [其他图片文件]
```

## ⚙️ 重要设置

### **1. 设置主页**
确保访问 `kellypeng.co` 时显示主页面：
- 将 `kelly_portfolio.html` 重命名为 `index.html`
- 或者在 `.htaccess` 文件中设置默认页面

### **2. 检查文件权限**
- HTML 文件：644
- 图片文件：644
- 文件夹：755

### **3. 测试网站**
上传完成后，访问以下页面测试：
- `https://kellypeng.co` (主页)
- `https://kellypeng.co/weill-cornell-medicine.html`
- `https://kellypeng.co/tmobile-carelink.html`
- `https://kellypeng.co/simon-smart.html`

## 🔧 故障排除

### **常见问题：**

1. **页面显示 404 错误**
   - 检查文件是否上传到正确目录
   - 确认文件名大小写正确

2. **图片无法显示**
   - 检查 `image/` 文件夹是否完整上传
   - 确认图片路径正确

3. **JavaScript 功能异常**
   - 检查 `.js` 文件是否上传
   - 确认文件路径正确

4. **样式显示异常**
   - 检查 CSS 是否正确加载
   - 确认字体文件是否可用

## 📞 技术支持

如果遇到问题，可以：
1. 检查浏览器控制台错误信息
2. 联系域名提供商技术支持
3. 确认所有文件都已正确上传

## 🎉 发布完成

发布成功后，你的网站将可以通过以下地址访问：
- **主页**: https://kellypeng.co
- **项目页面**: https://kellypeng.co/weill-cornell-medicine.html

祝你发布顺利！✨ 