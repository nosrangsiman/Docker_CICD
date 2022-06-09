FROM node:alpine
WORKDIR /app
COPY . .
ENV PATH /app/node_modules/.bin:$PATH
RUN npm install
CMD ["node", "start"]
EXPOSE 8080
