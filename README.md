# Expense Tracker

A Demo PWA for managing income and expenses. 

see app running at [https://exptrackr.herokuapp.com/](https://exptrackr.herokuapp.com/).

Credentials:
- email: `oriel.absin@gmail.com`
- password: `password123`

## Technologies used

- [Typescript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Redux-Toolkit](https://redux-toolkit.js.org/)
- [Storybook](https://storybook.js.org/)
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)

___
## Requirements

For development, you will need Node.js and Nginx installed in your environement.
You also need to configure Nginx to route ports 3000 and 4000 to port 80 when running the app locally (see instruction below). 
Docker is also required to run the production build locally.

## Install

    $ git clone git@github.com:aylabyuk/exptrackr.git
    $ cd exptrackr
    $ cd app
    $ npm i
    $ cd ../client
    $ npm i
    

## Development setup

1. Configure nginx for port forwarding

  The app will only work if the backend and frontend are on the same-site or domain. 
  To run the development locally you must port forward the backend and frontend of the app via custome nginx configuration.

  Below is the example configuration that you can use.

  ```
  server {
      location / {
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_set_header X-Forwarded-Proto $scheme;

          proxy_pass http://localhost:3000;
      }

      location /api {
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_set_header X-Forwarded-Proto $scheme;

          proxy_pass http://localhost:4000;
      }
  }
  ```

2. Inside `/app` add a .env file with the following values.
  
  ```
  PORT=4000
  MONGODB_CONNECTION=yourmongodbconnection
  ```
  
  Note: please provide your own `MONGODB_CONNECTION`
  
3. Inside `/client` add a .env file with the following value.

  ```
  NEXT_PUBLIC_APIURL=http://localhost:80/api
  ```
 
4. run the seeder
    
    ```
    $ npm run seed
    ```
5. Running the app (backend)

    ```
    $ cd app
    $ npm run start:dev
    ```

6. Running the client (frontend)

    ```
    $ cd ../client
    $ npm run dev
    ```
    
7. See the app running at `localhost:80`

## Build and run on docker

    make sure to run this on the root directory and local nginx is disabled
    $ docker-compose up --build
    
    
