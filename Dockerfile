# Используем Node.js для сборки
FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Используем Nginx для раздачи файлов
FROM nginx:alpine

# Копируем билд React
COPY --from=build /app/build /usr/share/nginx/html

# Копируем кастомный конфиг для обработки маршрутов
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
