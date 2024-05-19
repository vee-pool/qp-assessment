FROM node:20 as base

WORKDIR /home/vipz/trials/questionPro-assignment

COPY package*.json ./

RUN npm i

COPY . .

FROM base as production

ENV NODE_PATH=./dist

RUN npm run build
