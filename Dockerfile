FROM node:16-bullseye
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "api"]

EXPOSE 3000
