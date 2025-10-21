# Hank Portfolio - Claude Code 專案分析文件

## 專案概述

這是 **Hank Kuo** 的個人作品集網站，展示其作為資深 UI/UX 設計師的專業經歷與設計作品。專案採用 Vue.js 2.x 建置的單頁應用程式（SPA），具有響應式設計和流暢的頁面切換動畫。

### 專案資訊
- **專案名稱**: projectvuex (Hank Portfolio)
- **版本**: 1.0.0
- **類型**: UI/UX 設計師作品集網站
- **目標使用者**: 潛在雇主、客戶、合作夥伴

---

## 技術架構

### 核心技術堆疊

#### 前端框架
- **Vue.js 2.5.2** - 漸進式 JavaScript 框架
- **Vue Router 3.0.1** - 官方路由管理器，支援 27+ 路由

#### 建置工具
- **Webpack 3.6.0** - 模組打包工具
- **Babel 6.x** - JavaScript 編譯器（ES6+ → ES5）
- **webpack-dev-server 2.9.1** - 開發伺服器，支援熱重載

#### UI/資料視覺化
- **Chart.js 2.9.4** - 技能雷達圖視覺化
- **jQuery 3.6.0** - DOM 操作和事件處理

#### CSS 工具
- **Autoprefixer 7.1.2** - 自動添加瀏覽器前綴
- **PostCSS** - CSS 轉換工具
- **ExtractTextPlugin** - CSS 提取

#### 效能優化
- **UglifyJS Webpack Plugin** - JavaScript 壓縮
- **optimize-css-assets-webpack-plugin** - CSS 優化
- **webpack-bundle-analyzer** - 套件體積分析

---

## 核心功能模組

### 1. Resume (個人履歷)
**檔案**: `src/components/resume.vue`

**核心內容**:
- 個人資訊展示（照片、姓名、職位、聯絡方式）
- 專業背景描述（顧問思維、資料驅動設計）
- 核心成就（4 大代表性成就）
- 技能評分系統（Figma, Sketch, Adobe XD, CSS3, HTML, Vue.js 等）
- 專案經驗列表（13+ 重要專案，帶內部連結）
- 工作經歷時間軸（3 份工作詳細描述）

**特色**:
- 使用進度條展示技能熟練度（`.prosal` + `.inner-prosal`）
- 成就與職責分離的結構化展示
- 響應式英雄區（Hero Section）含照片和名稱
- 行動裝置友善的折疊式版面配置

### 2. Skills Radar (技能雷達圖)
**檔案**: `src/components/SkillsRadar.vue`

**功能**:
- 六維雷達圖視覺化（Chart.js Radar Chart）
- 動態計算 6 個維度：
  1. 設計系統 / 介面設計
  2. 互動原型 / 流程驗證
  3. 視覺敘事 / 品牌表現
  4. HTML（語意化 / 結構）
  5. CSS（樣式 / 動效）
  6. 前端框架 / 工具

**技術實作**:
- Props 驅動（接受 `skills` 物件和主題色）
- Computed 屬性聚合技能評分
- 支援自訂顏色主題（`color`, `gridColor`, `textColor`）

### 3. App Design Portfolio
**檔案**: `src/components/appdesign.vue`

**展示專案**:
- Studio A App
- 美廉社 (SimpleMart) App
- 超商補貨 App
- 環貫綠佳利 (Naturally Plus) App
- 超商活動頁 (Event Page)
- 智慧旅行 (Travel APP)
- 賓士 Mercedes Me 小程式

### 4. Web Design Portfolio
**檔案**: `src/components/webdeign.vue`

**展示專案**:
- Three Macao 官網
- 八方雲集形象官網
- 聖保羅烘焙花園
- Vendor Portal Dashboard
- SPA 錏鉑斯身體美學官網
- 建設/航運/集團企業網站系列

### 5. Portfolio Detail Pages
**檔案**: `src/components/portfolio/po001.vue` ~ `po0027.vue`

27 個獨立的作品詳情頁，每個頁面展示：
- 專案截圖和視覺稿
- 設計思路和解決方案
- 技術實作細節

---

## 專案目錄結構

```
hank-main-page/
├── build/                      # Webpack 建置設定
│   ├── build.js               # 正式環境建置腳本
│   ├── webpack.base.conf.js   # 基礎設定
│   ├── webpack.dev.conf.js    # 開發環境設定
│   └── webpack.prod.conf.js   # 正式環境設定
├── config/                     # 環境設定
│   ├── dev.env.js             # 開發環境變數
│   ├── prod.env.js            # 正式環境變數
│   └── index.js               # 主設定檔
├── src/
│   ├── assets/                # 靜態資源（logo.png）
│   ├── components/            # Vue 元件
│   │   ├── card/             # 可重複使用的卡片元件
│   │   │   ├── ModalTemp.vue      # 模態框模板
│   │   │   ├── RecordList.vue     # 作品列表
│   │   │   ├── TitleTemp.vue      # 標題模板
│   │   │   └── TitleTempInner.vue # 內部標題模板
│   │   ├── portfolio/        # 作品詳情頁（27個）
│   │   │   ├── po001.vue ~ po009.vue
│   │   │   ├── po0010.vue ~ po0027.vue
│   │   │   └── axiopo.vue
│   │   ├── SkillsRadar.vue   # 技能雷達圖
│   │   ├── resume.vue        # 履歷頁
│   │   ├── appdesign.vue     # App 設計集
│   │   ├── webdeign.vue      # Web 設計集
│   │   ├── page02.vue        # 附加頁面
│   │   └── page04.vue        # 附加頁面
│   ├── css/                  # 樣式表
│   │   ├── index.css         # 主樣式
│   │   ├── index2.css        # 輔助樣式
│   │   └── experience.css    # 履歷頁樣式
│   ├── router/               # 路由設定
│   │   └── index.js          # 路由定義
│   ├── App.vue               # 根元件
│   └── main.js               # 進入點檔案
├── static/
│   └── images/               # 圖片資源（82+ LFS 管理）
│       ├── 8way.svg (106MB)  # 大檔案由 Git LFS 管理
│       ├── portfolio screenshots
│       └── UI design assets
├── index.html                # HTML 模板
├── package.json              # 相依套件管理
├── .gitignore               # Git 忽略設定
├── .gitattributes           # Git LFS 設定
└── README.md                # 專案說明
```

---

## 路由系統

### 主要路由

| 路徑 | 元件 | 描述 |
|------|------|------|
| `/` | `resume.vue` | 個人履歷（首頁） |
| `/appdesign` | `appdesign.vue` | App 設計作品集 |
| `/webdeign` | `webdeign.vue` | Web 設計作品集 |
| `/po001` ~ `/po0027` | `portfolio/po*.vue` | 27 個作品詳情頁 |
| `/axiopo` | `portfolio/axiopo.vue` | AXIO 專案詳情 |

### 路由特性
- **Scroll Behavior**: 1 秒延遲捲動（解決過渡動畫衝突）
- **Saved Position**: 支援瀏覽器前進/後退保持位置
- **Dynamic Keys**: `:key="$route.path"` 強制元件重新渲染

---

## 開發指南

### 環境需求
- Node.js >= 6.0.0
- npm >= 3.0.0

### 安裝相依套件
```bash
npm install
```

### 開發模式
```bash
npm run dev
# 或
npm start
```
- 訪問: `http://localhost:8080`
- 支援熱重載（Hot Reload）
- 開發伺服器設定在 `config/index.js`

### 正式版建置
```bash
npm run build
```
- 輸出目錄: `dist/`
- 自動壓縮 JS/CSS
- 檔案名稱帶雜湊值（快取優化）

### 套件體積分析
```bash
npm run build --report
```
- 產生 `dist/report.html`
- 視覺化查看各模組大小

---

## 樣式系統

### 主題色
- **主色調**: `#FAD54D` (亮黃色)
- **背景色**: `#080808` (深黑色)
- **文字色**: `#FFFFFF` (白色)
- **次要文字**: `#8F8F8F` (灰色)

### 響應式中斷點
```css
@media screen and (max-width: 1300px) { /* 中等螢幕 */ }
@media screen and (max-width: 1024px) { /* 平板 */ }
@media screen and (max-width: 800px)  { /* 小平板 */ }
@media screen and (max-width: 680px)  { /* 大手機 */ }
@media screen and (max-width: 600px)  { /* 手機 */ }
@media screen and (max-width: 550px)  { /* 小手機 */ }
```

### 動畫系統
- **頁面切換**: `.page-enter-active` (2s 淡入淡出)
- **選單覆蓋**: `.app-menu-cover` (1.5s 縮放淡入)
- **內容載入**: `@keyframes fadeIn` (延遲 1.2s)

---

## 效能優化

### 已實作優化
1. **Git LFS 管理大型檔案**
   - 82 個圖片檔案（269 MB）
   - `*.svg`, `static/images/*.jpg`, `static/images/*.png`

2. **程式碼分割**
   - Vue Router 支援延遲載入（可進一步優化）

3. **資源壓縮**
   - UglifyJS 壓縮 JavaScript
   - OptimizeCSSAssetsPlugin 壓縮 CSS

### 建議優化

#### 1. 圖片優化
```bash
# 使用 WebP 格式
# 壓縮工具: imagemin, tinypng
```

#### 2. 路由延遲載入
```javascript
// 修改 router/index.js
const resume = () => import('@/components/resume')
const appdesign = () => import('@/components/appdesign')
```

#### 3. 升級相依套件
- Vue 2.5.2 → Vue 2.7.x (最新穩定版)
- Webpack 3 → Webpack 5 (大幅效能提升)
- Chart.js 2.9.4 → Chart.js 4.x (更好的 Tree-shaking)

#### 4. 移除 jQuery
- 使用 Vue 原生方法替代 jQuery 操作
- 減少 30KB+ 套件體積

---

## Git LFS 設定

### 追蹤規則
```gitattributes
*.svg filter=lfs diff=lfs merge=lfs -text
static/images/*.jpg filter=lfs diff=lfs merge=lfs -text
static/images/*.png filter=lfs diff=lfs merge=lfs -text
```

### LFS 檔案統計
- 總數: 82 個檔案
- 總大小: 269 MB
- 最大檔案: `static/images/8way.svg` (106 MB)

---

## 技術債務與改進建議

### 高優先順序

#### 1. 升級到 Vue 3
- 更好的 TypeScript 支援
- Composition API
- 效能提升（Proxy-based reactivity）

#### 2. 替換 jQuery
```javascript
// 舊程式碼 (App.vue:56-67)
$(".menu-btn").click(function(event) {
  $(".app-menu-cover").addClass("active")
})

// 建議改為
methods: {
  toggleMenu() {
    this.menuActive = !this.menuActive
  }
}
```

#### 3. 規範化技能資料
將硬編碼的技能資料提取到 JSON 設定檔：
```javascript
// src/data/skills.json
{
  "Sketch": 95,
  "Figma": 95,
  "Adobe XD": 80,
  ...
}
```

#### 4. 加入 TypeScript
- 型別安全
- 更好的 IDE 支援
- 減少執行期錯誤

### 中優先順序

#### 5. SEO 優化
- 加入 `vue-meta` 管理元標籤
- 伺服器端渲染（SSR）或預先渲染（Prerender SPA Plugin）
- 結構化資料（JSON-LD）

#### 6. 無障礙性（A11y）
- 加入 ARIA 標籤
- 鍵盤導覽支援
- 語意化 HTML

#### 7. 國際化（i18n）
- 中英文切換
- 使用 `vue-i18n`

#### 8. 測試覆蓋率
```bash
# 單元測試
npm install --save-dev @vue/test-utils jest

# E2E 測試
npm install --save-dev cypress
```

### 低優先順序

#### 9. PWA 支援
- Service Worker
- 離線存取
- 加入到主畫面

#### 10. 動畫函式庫升級
- 考慮使用 GSAP 或 Framer Motion
- 更流暢的頁面過渡

---

## 瀏覽器相容性

### 目標瀏覽器
```json
"browserslist": [
  "> 1%",           // 全球使用率 > 1%
  "last 2 versions", // 最新 2 個版本
  "not ie <= 8"      // 不支援 IE8 及以下
]
```

### 實際支援
- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 15+
- iOS Safari 11+
- Android Chrome 60+

---

## 部署指南

### 靜態託管
適合部署到:
- **GitHub Pages**
- **Netlify**
- **Vercel**
- **AWS S3 + CloudFront**

### 建置指令
```bash
npm run build
```

### 範例: Netlify 設定
建立 `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 環境變數
如需加入 API 端點:
```javascript
// config/prod.env.js
module.exports = {
  NODE_ENV: '"production"',
  API_URL: '"https://api.example.com"'
}
```

---

## 關鍵程式碼片段

### 1. 技能雷達圖聚合邏輯
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

### 2. 路由捲動延遲
```javascript
// src/router/index.js:178-192
scrollBehavior (to, from, savedPosition) {
  let position = { x: 0, y: 0 }
  if (savedPosition) {
    position = savedPosition
  }
  // 解決過渡動畫時捲動衝突
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(position)
    }, 1000)
  })
}
```

### 3. 響應式英雄區
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

## 專案亮點

1. **專業性**: 清晰展示 UI/UX 設計師的核心競爭力
2. **資料視覺化**: Chart.js 雷達圖直觀呈現技能矩陣
3. **完整案例**: 27+ 真實專案案例，涵蓋 App/Web/小程式
4. **響應式設計**: 適配桌面/平板/行動裝置
5. **效能優化**: Git LFS 管理大型檔案，避免儲存庫膨脹
6. **工程化**: Webpack 完整建置流程，支援開發/正式環境

---

## 聯絡資訊

- **設計師**: Hank Kuo
- **職位**: UI/UX Designer
- **電子郵件**: mini998839@gmail.com
- **電話**: +886986952005
- **GitHub**: https://github.com/rajatim/hank-main-page

---

## 授權

本專案為個人作品集，所有設計作品版權歸 Hank Kuo 所有。

---

**文件產生時間**: 2025-10-21
**分析工具**: Claude Code by Anthropic
