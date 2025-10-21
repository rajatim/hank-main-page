# Hank Portfolio

<div align="center">

![Vue.js](https://img.shields.io/badge/Vue.js-2.5.2-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Vue Router](https://img.shields.io/badge/Vue_Router-3.0.1-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Webpack](https://img.shields.io/badge/Webpack-3.6.0-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-2.9.4-FF6384?style=for-the-badge&logo=chart.js&logoColor=white)
![License](https://img.shields.io/badge/License-Private-red?style=for-the-badge)

**专业 UI/UX 设计师作品集网站**

[在线预览](#) • [查看文档](./claude.md) • [报告问题](https://github.com/rajatim/hank-main-page/issues)

</div>

---

## 关于项目

这是 **Hank Kuo** 的个人作品集网站，展示其作为资深 UI/UX 设计师的专业经历与设计作品。采用 Vue.js 2.x 构建的单页应用，包含响应式设计和流畅的页面切换动画。

### 核心特性

- 🎨 **作品展示** - 27+ 真实项目案例，涵盖 App/Web/小程序设计
- 📊 **技能可视化** - Chart.js 雷达图展示六维技能评估
- 📱 **响应式设计** - 完美适配桌面/平板/移动端
- ✨ **流畅动画** - 页面切换与交互动画
- 🚀 **性能优化** - Git LFS 管理大文件，Webpack 构建优化
- 🎯 **专业内容** - 详细的工作经历、项目经验和技能评分

---

## 技术栈

### 核心框架
- **Vue.js 2.5.2** - 渐进式 JavaScript 框架
- **Vue Router 3.0.1** - 官方路由管理器

### 构建工具
- **Webpack 3.6.0** - 模块打包工具
- **Babel 6.x** - JavaScript 编译器
- **webpack-dev-server** - 开发服务器

### UI & 可视化
- **Chart.js 2.9.4** - 数据可视化（技能雷达图）
- **jQuery 3.6.0** - DOM 操作

### 样式工具
- **PostCSS** - CSS 转换工具
- **Autoprefixer** - 自动添加浏览器前缀

---

## 快速开始

### 环境要求

- Node.js >= 6.0.0
- npm >= 3.0.0

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
# 启动开发服务器（支持热重载）
npm run dev

# 或使用 start 命令
npm start
```

访问 `http://localhost:8080` 查看项目

### 生产构建

```bash
# 构建生产版本
npm run build

# 构建并查看包体积分析报告
npm run build --report
```

构建输出在 `dist/` 目录

---

## 项目结构

```
hank-main-page/
├── build/                      # Webpack 构建配置
├── config/                     # 环境配置
├── src/
│   ├── assets/                # 静态资源
│   ├── components/            # Vue 组件
│   │   ├── card/             # 可复用卡片组件
│   │   ├── portfolio/        # 作品详情页（27个）
│   │   ├── SkillsRadar.vue   # 技能雷达图
│   │   ├── resume.vue        # 履历页
│   │   ├── appdesign.vue     # App 设计集
│   │   └── webdeign.vue      # Web 设计集
│   ├── css/                  # 样式表
│   ├── router/               # 路由配置
│   ├── App.vue               # 根组件
│   └── main.js               # 入口文件
├── static/
│   └── images/               # 图片资源（Git LFS 管理）
├── index.html                # HTML 模板
├── package.json              # 依赖管理
└── README.md                # 项目说明
```

---

## 可用脚本

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器（热重载） |
| `npm start` | 同 `npm run dev` |
| `npm run build` | 构建生产版本 |
| `npm run build --report` | 构建并生成包体积分析 |

---

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 15+
- iOS Safari 11+
- Android Chrome 60+

不支持 IE8 及以下版本

---

## Git LFS

本项目使用 Git LFS 管理大型图片文件：

- **文件数**: 82 个
- **总大小**: 269 MB
- **跟踪规则**: `*.svg`, `static/images/*.jpg`, `static/images/*.png`

### 克隆项目

```bash
# 确保已安装 Git LFS
git lfs install

# 克隆仓库
git clone https://github.com/rajatim/hank-main-page.git
```

---

## 部署

### 推荐平台

- **GitHub Pages**
- **Netlify**
- **Vercel**
- **AWS S3 + CloudFront**

### Netlify 配置示例

创建 `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 项目亮点

1. ✅ **专业性** - 清晰展示 UI/UX 设计师的核心竞争力
2. ✅ **数据可视化** - Chart.js 雷达图直观呈现技能矩阵
3. ✅ **完整案例** - 27+ 真实项目案例库
4. ✅ **响应式设计** - 多设备完美适配
5. ✅ **性能优化** - Git LFS + Webpack 优化
6. ✅ **工程化** - 完整的构建和开发流程

---

## 技术文档

详细的技术分析和架构说明请查看 [claude.md](./claude.md)

---

## 作者

**Hank Kuo**

- 职位: UI/UX Designer
- 公司: EY 安永諮詢服務股份有限公司 (2020 - 至今)
- 邮箱: mini998839@gmail.com
- 电话: +886986952005

---

## 许可证

本项目为个人作品集，所有设计作品版权归 Hank Kuo 所有。

---

## 参考资料

- [Vue.js 官方文档](https://v2.vuejs.org/)
- [Vue Router 文档](https://v3.router.vuejs.org/)
- [Webpack 官方文档](https://webpack.js.org/)
- [Chart.js 文档](https://www.chartjs.org/docs/2.9.4/)

---

<div align="center">

**Built with ❤️ by Hank Kuo**

</div>
