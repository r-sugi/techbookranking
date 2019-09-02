# 開発環境
FROM node:10.12-alpine as build-stage
WORKDIR /app
COPY start.sh ./
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
ENV HOST 0.0.0.0
EXPOSE  8000
