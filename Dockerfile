FROM node:14

# ENV PORT="8080"
# Create app directory
WORKDIR /usr/src/nodejs_app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE ${NODE_PORT}
CMD [ "node", "server.js" ]