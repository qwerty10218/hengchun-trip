# Hengchun Trip 恆春兩天一夜・精品級行程表

這不僅僅是一份旅遊行程表，而是一個將「實用資訊」與「極致設計美學」結合的數位體驗計畫。本專案將原本散落於 PDF 與 LINE 訊息中的報價單、景點與注意事項，轉化為具備國際設計獎（Awwwards）質感的單頁式網站（Single Page Application）。

🌐 **Live Demo:** [https://qwerty10218.github.io/hengchun-trip/](https://qwerty10218.github.io/hengchun-trip/)

---

## ✦ 設計理念 (Design Philosophy)

本專案拒絕使用市面上常見的「罐頭套版」或帶有廉價「AI 味」的平庸設計，而是以高階精品品牌網站的標準，從零打造每一個細節。

### 1. 沉穩的深色美學 (Premium Dark Mode)
完全摒棄了傳統網頁死白的底色。以深褐色、黑咖啡色（如 `#100C0B`）作為基底，搭配金棕色的點綴。不盲目追求純黑與純白的強烈刺眼對比，而是利用 `rgba` 調整文字透明度（85% ~ 75%），在保證易讀性的同時，讓文字像是在玻璃上刻痕般安靜且高級。

### 2. 雜誌級的文字排版 (Magazine-style Typography)
在排版上導入了強烈的視覺層級：
*   **數字的實驗室美學**：所有與預算、天數相關的客觀數據，皆嚴格採用等寬科技字體（Monospace, Font-weight: 500），營造出極致冷靜、專業的「報表感」。
*   **浮水印編號交疊**：打破傳統網頁「字與圖不能重疊」的思維。將巨大的行程編號（01, 02）拉高 `z-index`，以帶有透視感與重度陰影的斜體金字，大膽地浮現於景點圖片之上，創造出歐美頂級雜誌的視覺張力。

### 3. 充滿餘裕的呼吸感 (Breathing Negative Space)
拒絕將資訊擠在一起。透過彈性內距 `clamp(80px, 10vw, 140px)`，在不同裝置上皆能展現出極具餘裕的留白。在區塊（Section）之間的深淺色交界處，僅以一條透明度 3% 的極細微反光線作為收邊，使畫面產生立體堆疊感。

### 4. 流暢無縫的微互動 (Fluid Micro-interactions)
注重操作的「手感」與回饋，捨棄生硬的突然變化：
*   **Loading Splash**：一進站的 0% - 100% 科技進度條，滿載後布簾才優雅地向兩側拉開。
*   **Clip-path Reveal**：滾動時圖片並非單調浮現，而是從內縮的 `clip-path: inset(15%)` 配合 `scale(1.08)`，緩慢且有呼吸感地向外舒展至全螢幕。
*   **Glassmorphism (琉璃感)**：頂部導覽列在滾動後，呈現強烈毛玻璃效果（Blur: 24px），在不搶走主視覺風采的情況下提供導覽功能。

---

## ✦ 技術細節與步驟 (Technical Details)

本專案堅持「Form follows function」，在保持極致美感的同時，完全不犧牲旅遊行程表所需的實用性與效能。

### 開發步驟：
1.  **資料解析與重構**：將原始的 PDF 預算表，透過 JavaScript 物件陣列（JSON-like）重新結構化，確保每位成員的費用與分攤邏輯（多退少補、特殊行程減免）精準無誤。
2.  **變數化設計系統**：建立了一套基於 CSS Variables 的完整 Design Token，包含超過 10 個階層的色階（Color Palette）與 `clamp()` 響應式間距，確保在不同螢幕尺寸下皆能維持完美比例。
3.  **效能友善的動畫實作**：不依賴龐大的 JavaScript 動畫框架，完全運用原生 `IntersectionObserver` 搭配純 CSS `transition` (Cubic-bezier) 實現所有滾動視差（Parallax）與浮現動畫。
4.  **圖片載入優化與防呆**：導入 Wikimedia Commons 圖片做為真實性來源，並撰寫了自訂的 `onerror` 處理機制，即使外部圖片失效，也能優雅地降級為帶有 UI 質感的 Fallback 佔位符。
5.  **GitHub Pages 自動化部署**：透過 Git 初始化並直接發布至 GitHub Pages。

### 核心技術棧 (Tech Stack)
*   **HTML5 / CSS3** (Vanilla, CSS Variables, CSS Grid/Flexbox)
*   **Vanilla JavaScript** (ES6+, DOM Manipulation, Intersection Observer)
*   **Swiper.js** (僅用於處理輪播圖的無縫滑動與 Cross-fade 效果)
*   **Lucide Icons** (極簡向量圖示)

---
*“這是一趟沒有太多束縛的南國行——慢慢走，慢慢潛，慢慢看恆春。”*
