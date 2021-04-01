## Directory
```
|-- dist
|-- src
|-- .dockerignore
|-- Dockerfile
|-- package.json
|-- package-lock.json
|-- tsconfig.json
```


## Dockerfile
```
FROM node:12

EXPOSE 3000

COPY ./ ./

RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]
```

## Commmands

```
docker build -t test/node:0.0.1
```

```
docker run -d -p 3000:3000 test/node
```