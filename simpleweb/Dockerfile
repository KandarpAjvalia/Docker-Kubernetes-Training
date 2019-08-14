# Specify base image
FROM node:alpine

# Specify working directory
WORKDIR /usr/app

# Install additional packages
COPY ./package.json ./
RUN npm install
COPY ./ ./

 # Default command
 CMD [ "npm", "start" ]