# 使用 Node.js 16 (與專案相容的版本)
FROM node:16-alpine

# 設定工作目錄
WORKDIR /app

# 複製 package 檔案
COPY package*.json ./

# 安裝相依套件
RUN npm install

# 複製專案檔案
COPY . .

# 開放 8080 port
EXPOSE 8080

# 啟動開發伺服器
CMD ["npm", "run", "dev"]
