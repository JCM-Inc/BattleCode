FROM node
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5000 80
CMD ["npm", "start"]