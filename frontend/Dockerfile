FROM node:16

WORKDIR /frontend

COPY package*.json ./ 

RUN ls -la

RUN npm install

COPY . .

EXPOSE 4200

CMD ["npm", "start"]