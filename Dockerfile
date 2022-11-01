FROM node:18
WORKDIR /usr/src/research-with-programmers-api
COPY ./package.json .
RUN npm install --only=prod
COPY ./dist ./dist
EXPOSE 5000
CMD npm start