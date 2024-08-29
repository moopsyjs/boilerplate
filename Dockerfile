FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./
COPY .npmrc ./

RUN npm ci

COPY . .

RUN npx seamless bundle --ci

EXPOSE 3001

CMD ["node", "./bundle/start.js"]
