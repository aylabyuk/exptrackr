# pull the Node.js Docker image
FROM node:alpine

# create the directory inside the container
WORKDIR /usr/src/app

# copy frontend package.json from local to workdir in container
COPY ./client/package*.json ./client/

# create and move to the client directory
WORKDIR /usr/src/app/client

# run npm install in our local machine
RUN npm install

# copy the generated modules and all other files to the container inside the frontend folder
COPY ./client .

# build our frontend
RUN npm run build

# generate static files
RUN npm run export

# switch to parent directory
WORKDIR /usr/src/app

# copy backend package.json from local to workdir in container
COPY ./app/package*.json ./

# run npm install in our local machine
RUN npm install

# copy the generated modules and all other files to the container
COPY ./app .

# our app is running on port 4000 within the container, so need to expose it
EXPOSE 4000

# generate the unique pem file for authentication to the server
RUN npm run generateKeyPair

# the command that starts our app
CMD ["npm", "start"]