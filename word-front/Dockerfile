FROM node:14

WORKDIR /word-front

# 먼저 package.json 파일들만 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# @types/react-dom 설치
RUN npm install @types/react-dom@latest

# TypeScript 컴파일
COPY . .

# 빌드
RUN npm run build
