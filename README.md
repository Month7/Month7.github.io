请访问: [https://month7.github.io/](https://month7.github.io/)

# 简历项目

基于 Web Components 的模块化简历项目，支持数据驱动的内容生成和打印优化。

## 功能特性

- **模块化架构**：采用 Web Components 实现组件化开发
- **数据驱动**：简历内容与视图分离，易于维护和修改
- **响应式设计**：支持桌面和移动端访问
- **打印优化**：优化 CSS 边距，支持一页打印
- **轻量级**：无需复杂构建工具，快速启动

## 项目结构

```
Month7.github.io/
├── components/           # Web Components 组件
│   ├── ResumeIcon.js
│   ├── ResumeContactItem.js
│   ├── ResumeExperienceItem.js
│   ├── ResumeSkillItem.js
│   └── ResumeSectionHeader.js
├── data/               # 数据文件
│   └── resumeData.js    # 简历数据
├── utils/              # 工具函数
│   └── generator.js     # 内容生成函数
├── images/             # 图片资源
├── index.html          # 主页面
├── main.css           # 样式文件
├── main.js            # 入口文件
└── package.json       # 项目配置
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000 查看效果

### 构建项目

```bash
npm run build
```

生成 `dist` 目录，包含构建后的文件

### 预览构建结果

```bash
npm run preview
```

## 如何修改内容

### 修改个人信息

编辑 `index.html` 文件中的头部信息：

```html
<section class="title">
  <div class="name">
    <h1>姓名 <small>求职简历</small></h1>
  </div>
  <div class="job">
    <h2>Web 前端开发工程师</h2>
  </div>
</section>
<section class="info">
  <ul>
    <li>性别 / 出生日期 / 籍贯</li>
    <li>学校 / 专业</li>
    <li>学历 / 毕业时间</li>
  </ul>
</section>
<section class="contact">
  <ul>
    <resume-contact-item type="github" link="https://github.com/username" text="github:https://github.com/username"></resume-contact-item>
    <resume-contact-item type="email" link="mailto:email@example.com" text="email:email@example.com"></resume-contact-item>
    <resume-contact-item type="phone" link="tel:13800138000" text="phone:13800138000"></resume-contact-item>
  </ul>
</section>
```

### 修改工作经历

编辑 `data/resumeData.js` 文件中的 `experience` 数组：

```javascript
export const resumeData = {
  experience: [
    {
      id: 'company-id',
      title: "公司名称",
      time: "2020.07 至 至今",
      type: "全职",
      description: [
        "工作描述1",
        "工作描述2"
      ]
    }
  ]
};
```

### 修改技能

编辑 `data/resumeData.js` 文件中的 `skills` 数组：

```javascript
export const resumeData = {
  skills: [
    {
      id: 'skill-id',
      title: "技能名称",
      description: [
        "技能描述1",
        "技能描述2"
      ]
    }
  ]
};
```

### 修改样式

编辑 `main.css` 文件调整样式。遵循 CSS 规则：
- 下方边距使用 `marginBottom`
- 左右上方边距使用 `padding`

## 技术栈

- **HTML5**：语义化标签
- **CSS3**：响应式设计
- **JavaScript (ES6+)**：模块化开发
- **Web Components**：组件化架构
- **ES Modules**：模块导入导出

## 浏览器支持

- Chrome/Edge (推荐)
- Firefox
- Safari

需要支持 Web Components 和 ES Modules 的现代浏览器。

## 打印

项目已优化为单页打印，使用浏览器的打印功能即可：

1. 打开简历页面
2. 按 `Ctrl + P` (Windows) 或 `Cmd + P` (Mac)
3. 选择打印为 PDF

## 许可证

MIT

## 部署

项目为静态网站，可部署到任何静态托管服务：

- GitHub Pages
- Netlify
- Vercel
- 或任何支持静态文件的服务器

使用 `npm run build` 构建后，将 `dist` 目录内容上传即可。