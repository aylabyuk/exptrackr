FROM node:alpine

WORKDIR /usr/src/client

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80

RUN npm run build

CMD ["npm", "run", "start"]