FROM node:lts-slim

WORKDIR /home/node/app

EXPOSE 3000

COPY package.json package-lock.json ./

RUN apt-get update && apt-get install -y build-essential python && npm install

COPY . .

CMD [ "npm", "start" ]
