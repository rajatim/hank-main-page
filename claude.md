# Hank Portfolio - Claude Code 项目分析文档

## 项目概述

这是 **Hank Kuo** 的个人作品集网站，展示其作为资深 UI/UX 设计师的专业经历与设计作品。项目采用 Vue.js 2.x 构建的单页应用（SPA），具有响应式设计和流畅的页面切换动画。

### 项目信息
- **项目名称**: projectvuex (Hank Portfolio)
- **版本**: 1.0.0
- **类型**: UI/UX 设计师作品集网站
- **目标用户**: 潜在雇主、客户、合作伙伴

---

## 技术架构

### 核心技术栈

#### 前端框架
- **Vue.js 2.5.2** - 渐进式 JavaScript 框架
- **Vue Router 3.0.1** - 官方路由管理器，支持 27+ 路由

#### 构建工具
- **Webpack 3.6.0** - 模块打包工具
- **Babel 6.x** - JavaScript 编译器（ES6+ → ES5）
- **webpack-dev-server 2.9.1** - 开发服务器，支持热重载

#### UI/数据可视化
- **Chart.js 2.9.4** - 技能雷达图可视化
- **jQuery 3.6.0** - DOM 操作和事件处理

#### CSS 工具
- **Autoprefixer 7.1.2** - 自动添加浏览器前缀
- **PostCSS** - CSS 转换工具
- **ExtractTextPlugin** - CSS 提取

#### 性能优化
- **UglifyJS Webpack Plugin** - JavaScript 压缩
- **optimize-css-assets-webpack-plugin** - CSS 优化
- **webpack-bundle-analyzer** - 包体积分析

---

## 核心功能模块

### 1. Resume (个人履历)
**文件**: `src/components/resume.vue`

**核心内容**:
- 个人信息展示（照片、姓名、职位、联系方式）
- 专业背景描述（顾问思维、数据驱动设计）
- 核心成就（4大代表性成就）
- 技能评分系统（Figma, Sketch, Adobe XD, CSS3, HTML, Vue.js 等）
- 项目经验列表（13+ 重要项目，带内部链接）
- 工作经历时间线（3份工作详细描述）

**特色**:
- 使用进度条展示技能熟练度（`.prosal` + `.inner-prosal`）
- 成就与职责分离的结构化展示
- 响应式英雄区（Hero Section）含照片和名称
- 移动端友好的折叠式布局

### 2. Skills Radar (技能雷达图)
**文件**: `src/components/SkillsRadar.vue`

**功能**:
- 六维雷达图可视化（Chart.js Radar Chart）
- 动态计算 6 个维度：
  1. 设计系统 / 介面设計
  2. 互動原型 / 流程驗證
  3. 視覺敘事 / 品牌表現
  4. HTML（語意化 / 結構）
  5. CSS（樣式 / 動效）
  6. 前端框架 / 工具

**技术实现**:
- Props 驱动（接受 `skills` 对象和主题色）
- Computed 属性聚合技能评分
- 支持自定义颜色主题（`color`, `gridColor`, `textColor`）

### 3. App Design Portfolio
**文件**: `src/components/appdesign.vue`

**展示项目**:
- Studio A App
- 美廉社 (SimpleMart) App
- 超商补货 App
- 环贯绿佳利 (Naturally Plus) App
- 超商活动页 (Event Page)
- 智能旅行 (Travel APP)
- 奔驰 Mercedes Me 小程序

### 4. Web Design Portfolio
**文件**: `src/components/webdeign.vue`

**展示项目**:
- Three Macao 官网
- 八方雲集形象官網
- 聖保羅烘焙花園
- Vendor Portal Dashboard
- SPA錏鉑斯身體美學官網
- 建设/航运/集团企业网站系列

### 5. Portfolio Detail Pages
**文件**: `src/components/portfolio/po001.vue` ~ `po0027.vue`

27 个独立的作品详情页，每个页面展示：
- 项目截图和视觉稿
- 设计思路和解决方案
- 技术实现细节

---

## 项目目录结构

```
hank-main-page/
├── build/                      # Webpack 构建配置
│   ├── build.js               # 生产环境构建脚本
│   ├── webpack.base.conf.js   # 基础配置
│   ├── webpack.dev.conf.js    # 开发环境配置
│   └── webpack.prod.conf.js   # 生产环境配置
├── config/                     # 环境配置
│   ├── dev.env.js             # 开发环境变量
│   ├── prod.env.js            # 生产环境变量
│   └── index.js               # 主配置文件
├── src/
│   ├── assets/                # 静态资源（logo.png）
│   ├── components/            # Vue 组件
│   │   ├── card/             # 可复用卡片组件
│   │   │   ├── ModalTemp.vue      # 模态框模板
│   │   │   ├── RecordList.vue     # 作品列表
│   │   │   ├── TitleTemp.vue      # 标题模板
│   │   │   └── TitleTempInner.vue # 内部标题模板
│   │   ├── portfolio/        # 作品详情页（27个）
│   │   │   ├── po001.vue ~ po009.vue
│   │   │   ├── po0010.vue ~ po0027.vue
│   │   │   └── axiopo.vue
│   │   ├── SkillsRadar.vue   # 技能雷达图
│   │   ├── resume.vue        # 履历页
│   │   ├── appdesign.vue     # App 设计集
│   │   ├── webdeign.vue      # Web 设计集
│   │   ├── page02.vue        # 附加页面
│   │   └── page04.vue        # 附加页面
│   ├── css/                  # 样式表
│   │   ├── index.css         # 主样式
│   │   ├── index2.css        # 辅助样式
│   │   └── experience.css    # 履历页样式
│   ├── router/               # 路由配置
│   │   └── index.js          # 路由定义
│   ├── App.vue               # 根组件
│   └── main.js               # 入口文件
├── static/
│   └── images/               # 图片资源（82+ LFS 管理）
│       ├── 8way.svg (106MB)  # 大文件由 Git LFS 管理
│       ├── portfolio screenshots
│       └── UI design assets
├── index.html                # HTML 模板
├── package.json              # 依赖管理
├── .gitignore               # Git 忽略配置
├── .gitattributes           # Git LFS 配置
└── README.md                # 项目说明
```

---

## 路由系统

### 主要路由

| 路径 | 组件 | 描述 |
|------|------|------|
| `/` | `resume.vue` | 个人履历（首页） |
| `/appdesign` | `appdesign.vue` | App 设计作品集 |
| `/webdeign` | `webdeign.vue` | Web 设计作品集 |
| `/po001` ~ `/po0027` | `portfolio/po*.vue` | 27 个作品详情页 |
| `/axiopo` | `portfolio/axiopo.vue` | AXIO 项目详情 |

### 路由特性
- **Scroll Behavior**: 1 秒延迟滚动（解决过渡动画冲突）
- **Saved Position**: 支持浏览器前进/后退保持位置
- **Dynamic Keys**: `:key="$route.path"` 强制组件重新渲染

---

## 开发指南

### 环境要求
- Node.js >= 6.0.0
- npm >= 3.0.0

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
# 或
npm start
```
- 访问: `http://localhost:8080`
- 支持热重载（Hot Reload）
- 开发服务器配置在 `config/index.js`

### 生产构建
```bash
npm run build
```
- 输出目录: `dist/`
- 自动压缩 JS/CSS
- 文件名带哈希（缓存优化）

### 包体积分析
```bash
npm run build --report
```
- 生成 `dist/report.html`
- 可视化查看各模块大小

---

## 样式系统

### 主题色
- **主色调**: `#FAD54D` (亮黄色)
- **背景色**: `#080808` (深黑色)
- **文字色**: `#FFFFFF` (白色)
- **次要文字**: `#8F8F8F` (灰色)

### 响应式断点
```css
@media screen and (max-width: 1300px) { /* 中等屏幕 */ }
@media screen and (max-width: 1024px) { /* 平板 */ }
@media screen and (max-width: 800px)  { /* 小平板 */ }
@media screen and (max-width: 680px)  { /* 大手机 */ }
@media screen and (max-width: 600px)  { /* 手机 */ }
@media screen and (max-width: 550px)  { /* 小手机 */ }
```

### 动画系统
- **页面切换**: `.page-enter-active` (2s 淡入淡出)
- **菜单覆盖**: `.app-menu-cover` (1.5s 缩放淡入)
- **内容加载**: `@keyframes fadeIn` (延迟 1.2s)

---

## 性能优化

### 已实现优化
1. **Git LFS 管理大文件**
   - 82 个图片文件（269 MB）
   - `*.svg`, `static/images/*.jpg`, `static/images/*.png`

2. **代码分割**
   - Vue Router 支持懒加载（可进一步优化）

3. **资源压缩**
   - UglifyJS 压缩 JavaScript
   - OptimizeCSSAssetsPlugin 压缩 CSS

### 建议优化

#### 1. 图片优化
```bash
# 使用 WebP 格式
# 压缩工具: imagemin, tinypng
```

#### 2. 路由懒加载
```javascript
// 修改 router/index.js
const resume = () => import('@/components/resume')
const appdesign = () => import('@/components/appdesign')
```

#### 3. 升级依赖
- Vue 2.5.2 → Vue 2.7.x (最新稳定版)
- Webpack 3 → Webpack 5 (大幅性能提升)
- Chart.js 2.9.4 → Chart.js 4.x (更好的 Tree-shaking)

#### 4. 移除 jQuery
- 使用 Vue 原生方法替代 jQuery 操作
- 减少 30KB+ 包体积

---

## Git LFS 配置

### 跟踪规则
```gitattributes
*.svg filter=lfs diff=lfs merge=lfs -text
static/images/*.jpg filter=lfs diff=lfs merge=lfs -text
static/images/*.png filter=lfs diff=lfs merge=lfs -text
```

### LFS 文件统计
- 总数: 82 个文件
- 总大小: 269 MB
- 最大文件: `static/images/8way.svg` (106 MB)

---

## 技术债务与改进建议

### 高优先级

#### 1. 升级到 Vue 3
- 更好的 TypeScript 支持
- Composition API
- 性能提升（Proxy-based reactivity）

#### 2. 替换 jQuery
```javascript
// 旧代码 (App.vue:56-67)
$(".menu-btn").click(function(event) {
  $(".app-menu-cover").addClass("active")
})

// 建议改为
methods: {
  toggleMenu() {
    this.menuActive = !this.menuActive
  }
}
```

#### 3. 规范化技能数据
将硬编码的技能数据提取到 JSON 配置文件：
```javascript
// src/data/skills.json
{
  "Sketch": 95,
  "Figma": 95,
  "Adobe XD": 80,
  ...
}
```

#### 4. 添加 TypeScript
- 类型安全
- 更好的 IDE 支持
- 减少运行时错误

### 中优先级

#### 5. SEO 优化
- 添加 `vue-meta` 管理元标签
- 服务端渲染（SSR）或预渲染（Prerender SPA Plugin）
- 结构化数据（JSON-LD）

#### 6. 无障碍性（A11y）
- 添加 ARIA 标签
- 键盘导航支持
- 语义化 HTML

#### 7. 国际化（i18n）
- 中英文切换
- 使用 `vue-i18n`

#### 8. 测试覆盖
```bash
# 单元测试
npm install --save-dev @vue/test-utils jest

# E2E 测试
npm install --save-dev cypress
```

### 低优先级

#### 9. PWA 支持
- Service Worker
- 离线访问
- 添加到主屏幕

#### 10. 动画库升级
- 考虑使用 GSAP 或 Framer Motion
- 更流畅的页面过渡

---

## 浏览器兼容性

### 目标浏览器
```json
"browserslist": [
  "> 1%",           // 全球使用率 > 1%
  "last 2 versions", // 最新 2 个版本
  "not ie <= 8"      // 不支持 IE8 及以下
]
```

### 实际支持
- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 15+
- iOS Safari 11+
- Android Chrome 60+

---

## 部署指南

### 静态托管
适合部署到:
- **GitHub Pages**
- **Netlify**
- **Vercel**
- **AWS S3 + CloudFront**

### 构建命令
```bash
npm run build
```

### 示例: Netlify 配置
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

### 环境变量
如需添加 API 端点:
```javascript
// config/prod.env.js
module.exports = {
  NODE_ENV: '"production"',
  API_URL: '"https://api.example.com"'
}
```

---

## 关键代码片段

### 1. 技能雷达图聚合逻辑
```javascript
// src/components/SkillsRadar.vue:89-106
categories: function(){
  var s = this.skills;
  function avg(keys){
    var vals = keys.map(function(k){
      var v = s[k];
      return (typeof v === 'number' && !isNaN(v)) ? v : 0;
    });
    var sum = vals.reduce(function(a,b){ return a + b; }, 0);
    return Math.round(sum / (vals.length || 1));
  }
  return [
    { label: '設計系統 / 介面設計', value: avg(['Figma','Sketch','Adobe XD']) },
    { label: '互動原型 / 流程驗證', value: avg(['Axure RP','Figma']) },
    // ...
  ];
}
```

### 2. 路由滚动延迟
```javascript
// src/router/index.js:178-192
scrollBehavior (to, from, savedPosition) {
  let position = { x: 0, y: 0 }
  if (savedPosition) {
    position = savedPosition
  }
  // 解决过渡动画时滚动冲突
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(position)
    }, 1000)
  })
}
```

### 3. 响应式英雄区
```vue
<!-- src/components/resume.vue:11-22 -->
<div class="hero">
  <img class="hero__photo" src="/static/images/IMG_4976.JPG" />
  <div class="text_name_wrap">
    <h1>Hank Kuo</h1>
    <div class="span-wrap">
      <span class="mb-40">UI/UX Designer</span>
      <span> Phone number : +886986952005</span>
      <span> Email : mini998839@gmail.com</span>
    </div>
  </div>
</div>
```

---

## 项目亮点

1. **专业性**: 清晰展示 UI/UX 设计师的核心竞争力
2. **数据可视化**: Chart.js 雷达图直观呈现技能矩阵
3. **完整案例**: 27+ 真实项目案例，涵盖 App/Web/小程序
4. **响应式设计**: 适配桌面/平板/移动端
5. **性能优化**: Git LFS 管理大文件，避免仓库膨胀
6. **工程化**: Webpack 完整构建流程，支持开发/生产环境

---

## 联系信息

- **设计师**: Hank Kuo
- **职位**: UI/UX Designer
- **邮箱**: mini998839@gmail.com
- **电话**: +886986952005
- **GitHub**: https://github.com/rajatim/hank-main-page

---

## 许可证

本项目为个人作品集，所有设计作品版权归 Hank Kuo 所有。

---

**文档生成时间**: 2025-10-21
**分析工具**: Claude Code by Anthropic
