FROM node:20.14-alpine AS builder

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "start"]