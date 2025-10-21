# Hank Portfolio

<div align="center">

![Vue.js](https://img.shields.io/badge/Vue.js-2.5.2-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Vue Router](https://img.shields.io/badge/Vue_Router-3.0.1-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Webpack](https://img.shields.io/badge/Webpack-3.6.0-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-2.9.4-FF6384?style=for-the-badge&logo=chart.js&logoColor=white)
![License](https://img.shields.io/badge/License-Private-red?style=for-the-badge)

**專業 UI/UX 設計師作品集網站**

[線上預覽](#) • [查看文件](./claude.md) • [回報問題](https://github.com/rajatim/hank-main-page/issues)

</div>

---

## 關於專案

這是 **Hank Kuo** 的個人作品集網站，展示其作為資深 UI/UX 設計師的專業經歷與設計作品。採用 Vue.js 2.x 建置的單頁應用程式，包含響應式設計和流暢的頁面切換動畫。

### 核心特色

- 🎨 **作品展示** - 27+ 真實專案案例，涵蓋 App/Web/小程式設計
- 📊 **技能視覺化** - Chart.js 雷達圖展示六維技能評估
- 📱 **響應式設計** - 完美適配桌面/平板/行動裝置
- ✨ **流暢動畫** - 頁面切換與互動動畫
- 🚀 **效能優化** - Git LFS 管理大型檔案，Webpack 建置優化
- 🎯 **專業內容** - 詳細的工作經歷、專案經驗和技能評分

---

## 技術架構

### 核心框架
- **Vue.js 2.5.2** - 漸進式 JavaScript 框架
- **Vue Router 3.0.1** - 官方路由管理器

### 建置工具
- **Webpack 3.6.0** - 模組打包工具
- **Babel 6.x** - JavaScript 編譯器
- **webpack-dev-server** - 開發伺服器

### UI & 視覺化
- **Chart.js 2.9.4** - 資料視覺化（技能雷達圖）
- **jQuery 3.6.0** - DOM 操作

### 樣式工具
- **PostCSS** - CSS 轉換工具
- **Autoprefixer** - 自動添加瀏覽器前綴

---

## 快速開始

### 環境需求

- Node.js >= 6.0.0
- npm >= 3.0.0

### 安裝相依套件

```bash
npm install
```

### 開發模式

```bash
# 啟動開發伺服器（支援熱重載）
npm run dev

# 或使用 start 指令
npm start
```

訪問 `http://localhost:8080` 查看專案

### 正式版建置

```bash
# 建置正式版本
npm run build

# 建置並查看套件體積分析報告
npm run build --report
```

建置輸出在 `dist/` 目錄

---

## 專案結構

```
hank-main-page/
├── build/                      # Webpack 建置設定
├── config/                     # 環境設定
├── src/
│   ├── assets/                # 靜態資源
│   ├── components/            # Vue 元件
│   │   ├── card/             # 可重複使用的卡片元件
│   │   ├── portfolio/        # 作品詳情頁（27個）
│   │   ├── SkillsRadar.vue   # 技能雷達圖
│   │   ├── resume.vue        # 履歷頁
│   │   ├── appdesign.vue     # App 設計集
│   │   └── webdeign.vue      # Web 設計集
│   ├── css/                  # 樣式表
│   ├── router/               # 路由設定
│   ├── App.vue               # 根元件
│   └── main.js               # 進入點檔案
├── static/
│   └── images/               # 圖片資源（Git LFS 管理）
├── index.html                # HTML 模板
├── package.json              # 相依套件管理
└── README.md                # 專案說明
```

---

## 可用指令

| 指令 | 說明 |
|------|------|
| `npm run dev` | 啟動開發伺服器（熱重載） |
| `npm start` | 同 `npm run dev` |
| `npm run build` | 建置正式版本 |
| `npm run build --report` | 建置並產生套件體積分析 |

---

## 瀏覽器相容性

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 15+
- iOS Safari 11+
- Android Chrome 60+

不支援 IE8 及以下版本

---

## Git LFS

本專案使用 Git LFS 管理大型圖片檔案：

- **檔案數**: 82 個
- **總大小**: 269 MB
- **追蹤規則**: `*.svg`, `static/images/*.jpg`, `static/images/*.png`

### 複製專案

```bash
# 確保已安裝 Git LFS
git lfs install

# 複製儲存庫
git clone https://github.com/rajatim/hank-main-page.git
```

---

## 部署

### 推薦平台

- **GitHub Pages**
- **Netlify**
- **Vercel**
- **AWS S3 + CloudFront**

### Netlify 設定範例

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

---

## 專案亮點

1. ✅ **專業性** - 清晰展示 UI/UX 設計師的核心競爭力
2. ✅ **資料視覺化** - Chart.js 雷達圖直觀呈現技能矩陣
3. ✅ **完整案例** - 27+ 真實專案案例庫
4. ✅ **響應式設計** - 多裝置完美適配
5. ✅ **效能優化** - Git LFS + Webpack 優化
6. ✅ **工程化** - 完整的建置和開發流程

---

## 技術文件

詳細的技術分析和架構說明請查看 [claude.md](./claude.md)

---

## 授權

本專案為個人作品集，所有設計作品版權歸 Hank Kuo 所有。

---

## 參考資料

- [Vue.js 官方文件](https://v2.vuejs.org/)
- [Vue Router 文件](https://v3.router.vuejs.org/)
- [Webpack 官方文件](https://webpack.js.org/)
- [Chart.js 文件](https://www.chartjs.org/docs/2.9.4/)

---

<div align="center">

**Built with ❤️ by Hank Kuo**

</div>
