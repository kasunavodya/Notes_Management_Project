FROM node:latest

#Set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src

#Add `/usr/src/node_modules/.bin` to $PATH
ENV PATH /usr/src/node_modules/.bin:$PATH

#Install and cache app dependencies
ADD package.json /usr/src/package.json
COPY . .

#Running npm install
RUN npm install

#Expose port
EXPOSE 3001

#Start application
CMD ["npm", "start"]