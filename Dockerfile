FROM node:lts-bullseye-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY src/ /usr/src/app/src

COPY index.html /usr/src/app/

COPY vite.config.ts tsconfig.json tsconfig.node.json ./

RUN npm run build

EXPOSE 4173

CMD ["npm", "run", "preview"]
