# Description

This assignment aims to create a web-based grid display that showcases subject data, reflecting a simplified version of functionalities similar to what might be found at Vial. The primary focus is on full-stack web development, with the candidate needing to display their ability to create a backend REST endpoint that queries for subject data and be able to display that subject data on the front end then. Some suggested technologies would be to use React for the Frontend and Node.js for the Backend but the choice of technology is up to you the developer!

# Instructions

## Docker Compose
The easiest way to run this application is using the docker-compose file in the root.
If you don't have it. Just follow these instructions and you will be fine. 
 - https://docs.docker.com/compose/install/linux/

The first command `docker compose build`

The second command `docker compose up`

## Manualy

If you don't want to use the docker-compose, it will be necessary to have a Postgres database running on your machine. 
You can use a [docker image](https://hub.docker.com/_/postgres) or directly through their [website](https://www.postgresql.org/download/).

After the database is up and running, you need to change the value of `DATABASE_URL` in the .env file, inside the backend folder to be able to connect.

### Backend folder

1. `npm install`
2. `npx prisma generate`
3. `prisma migrate deploy`
4. `npm run dev`

## Frontend folder
1. `yarn install`
2. `yarn run dev`
