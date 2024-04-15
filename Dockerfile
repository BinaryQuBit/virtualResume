FROM node:lts-bullseye-slim

WORKDIR /usr/src/app/backend

COPY backend/package*.json ./

COPY backend/db.js backend/server.js backend/visitors.js backend/creds.json ./

COPY backend/dist ./dist/

RUN npm install

EXPOSE 84

CMD ["npm", "run", "server"]
