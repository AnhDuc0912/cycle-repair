# syntax=docker/dockerfile:1

FROM node:18
ENV NODE_EVN=production
WORKDIR /app

COPY . .

RUN yarn install

EXPOSE 8000

CMD ["yarn", "run:dev"]