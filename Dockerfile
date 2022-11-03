FROM node:16
WORKDIR /usr/src/research-with-programmers-api
COPY ./package.json .
RUN npm install --omit=dev --legacy-peer-deps