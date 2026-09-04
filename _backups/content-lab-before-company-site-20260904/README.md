# WINFO Content Lab

WINFO Content Lab 是一個真實可用的同行內容研究工具：輸入客戶問題後，透過公開網頁搜索找到相關內容，再使用 DeepSeek 拆解內容結構及生成原創改寫草稿。工具只借鑒選題、讀者意圖和結構，不直接複製同行文字。

## 本地啟動

環境要求：Node.js 20 LTS 或更高版本。

先在專案根目錄建立 `.env.local`：

```bash
DEEPSEEK_API_KEY=sk-你的key
```

然後啟動：

```bash
npm install
npm run dev
```

瀏覽器開啟終端輸出的本地地址，通常是 `http://localhost:5173/`。若 5173 已被佔用，Vite 會自動改用下一個可用連接埠。

## 真實工作流

1. 在搜尋欄輸入任意客戶問題。
2. 點擊「聯網搜索」，服務端會抓取 DuckDuckGo 公開網頁結果。
3. 選擇一篇結果並點擊「分析這篇內容」，交由 DeepSeek 產生結構化拆解。
4. 點擊「生成改寫」，DeepSeek 會依據問題、網頁摘要及結構分析生成繁體中文草稿。

API key 只由 Vite 本地服務端讀取，不會出現在瀏覽器 bundle；`.env.local` 已被 git 忽略。可以使用頂部下載按鈕將當前研究工作區匯出為 JSON。

## 可用命令

```bash
npm run build    # 生產構建檢查
npm run dev      # 啟動開發伺服器
npm run preview  # 預覽生產構建
```
