FROM node
WORKDIR /usr/public
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "start"]

