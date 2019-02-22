FROM node:10

WORKDIR /usr/src/app

ARG NODE_ENV

ENV NDOE_ENV=${NODE_ENV}
ENV PORT=8000

COPY package.json .
COPY src src
COPY config config
COPY index.js .
COPY yarn.lock .

RUN yarn

EXPOSE 8000

CMD ["yarn", "run", "dev"]