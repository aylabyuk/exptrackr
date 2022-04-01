FROM node:alpine

WORKDIR /usr/src/client

COPY package*.json ./

RUN npm install

RUN npm install http-server -g

COPY . .

RUN npm run build

RUN npm run export

EXPOSE 3000

CMD ["http-server", '-p', '3000']