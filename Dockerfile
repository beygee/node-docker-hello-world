FROM node:12

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

EXPOSE 3000

COPY . .

RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]