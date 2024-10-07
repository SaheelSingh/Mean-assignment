FROM node:16

WORKDIR /backend

COPY package*.json ./

RUN ls -la

RUN npm install

COPY . .

EXPOSE 4000

CMD [ "npm" , "start" ]