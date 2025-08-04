# Kelly Peng Portfolio - System Documentation

## 概述 Overview

这是一个基于苹果设计系统的作品集网站，具有完整的内容管理系统，可以轻松添加、更新和管理作品项目。

This is a portfolio website based on Apple's design system with a complete content management system for easy project addition, updates, and management.

## 文件结构 File Structure

```
Kellypeng.co/
├── kelly_portfolio.html      # 主HTML文件 Main HTML file
├── portfolio-config.js       # 作品集配置文件 Portfolio configuration
├── portfolio-manager.js      # 管理系统JavaScript Management system
└── README.md                # 项目文档 Documentation
```

## 功能特性 Features

### 🎨 设计系统 Design System
- **苹果设计语言**: 完全基于Apple Human Interface Guidelines
- **响应式设计**: 支持桌面端和移动端
- **暗黑模式**: 自动适配系统主题
- **流畅动画**: 苹果风格的交互动效

### 📁 内容管理 Content Management
- **配置驱动**: 通过`portfolio-config.js`轻松管理内容
- **动态渲染**: JavaScript自动生成页面内容
- **分类筛选**: 按项目类型筛选作品
- **项目管理**: 简单的API添加/更新/删除项目

### 🚀 易于维护 Easy Maintenance
- **模块化架构**: 分离配置、样式和逻辑
- **标准化数据**: 统一的项目数据格式
- **API接口**: 简单的JavaScript API管理内容

## 如何添加新项目 How to Add New Projects

### 1. 编辑配置文件 Edit Configuration

在`portfolio-config.js`的`projects`数组中添加新项目：

```javascript
{
  id: "new-project",
  title: "项目标题",
  subtitle: "项目副标题", 
  category: "项目分类",
  description: "项目描述",
  year: "2024",
  tags: ["标签1", "标签2", "标签3"],
  image: {
    type: "mockup类型", // phone-mockup, desktop-mockup, etc.
    background: "渐变背景",
    // 其他配置...
  },
  featured: true
}
```

### 2. 支持的项目类型 Supported Project Types

#### Phone Mockup (手机模型)
```javascript
image: {
  type: "phone-mockup",
  background: "linear-gradient(135deg, #color1, #color2)",
  mockups: [
    {
      type: "weather-app",
      content: { temperature: "25°C", humidity: "32%", icon: "🌡️" }
    }
  ],
  floatingIcons: ["📱", "💳", "🔒"],
  logo: "项目logo"
}
```

#### Desktop Mockup (桌面模型)
```javascript
image: {
  type: "desktop-mockup", 
  background: "渐变背景",
  content: {
    theme: "dark", // or "light"
    logo: "项目名称",
    primaryColor: "#颜色值"
  }
}
```

#### Medical Interface (医疗界面)
```javascript
image: {
  type: "medical-interface",
  background: "渐变背景",
  content: {
    amount: "$74.70",
    type: "billing-interface",
    theme: "light"
  }
}
```

#### Architectural (建筑设计)
```javascript
image: {
  type: "architectural",
  background: "渐变背景", 
  content: {
    type: "book-design",
    theme: "minimal"
  }
}
```

#### Logo Design (logo设计)
```javascript
image: {
  type: "logo-design",
  background: "渐变背景",
  content: {
    logo: "Logo文字",
    shape: "形状类型",
    colors: ["#color1", "#color2"]
  }
}
```

### 3. 添加新分类 Add New Categories

在`filterCategories`数组中添加新分类：

```javascript
filterCategories: [
  { id: "new-category", label: "新分类名称" }
]
```

## JavaScript API

### 动态管理项目 Dynamic Project Management

```javascript
// 添加项目
portfolioManager.addProject(projectData);

// 更新项目  
portfolioManager.updateProject("project-id", updates);

// 删除项目
portfolioManager.removeProject("project-id");

// 切换筛选器
portfolioManager.selectFilter("category-id");
```

## 自定义样式 Custom Styling

### CSS变量 CSS Variables

所有设计tokens都定义为CSS变量，便于自定义：

```css
:root {
  /* 颜色 Colors */
  --apple-blue: #007AFF;
  --apple-text-primary: #000000;
  
  /* 字体 Typography */  
  --apple-font-large-title: -apple-system, BlinkMacSystemFont, 'SF Pro Display';
  
  /* 间距 Spacing */
  --apple-spacing-m: 16px;
  
  /* 圆角 Border Radius */
  --apple-radius-large: 16px;
}
```

### 响应式断点 Responsive Breakpoints

```css
@media (max-width: 768px) {
  /* 移动端样式 Mobile styles */
}
```

## 部署 Deployment

1. 确保所有文件在同一目录
2. 上传到web服务器
3. 访问`kelly_portfolio.html`

## 浏览器支持 Browser Support

- Safari 14+
- Chrome 90+
- Firefox 88+
- Edge 90+

## 更新日志 Changelog

### v1.0.0 (2024)
- 初始版本发布
- 苹果设计系统实现
- 动态内容管理系统
- 响应式设计支持

## 许可证 License

© 2024 Kelly Peng. All rights reserved. 