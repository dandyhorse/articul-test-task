FROM node:14

COPY package.json . 
COPY package-lock.json .

RUN npm install

RUN npm install nodemon -g

RUN npx sequelize-cli db:migrate

EXPOSE 3000

WORKDIR /var/www/articul/
