FROM node:16

WORKDIR /app
COPY . .
RUN node install

CMD ["npm", "start"]
