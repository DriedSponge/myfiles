FROM node:19-alpine

COPY .  .

RUN yarn install
RUN yarn run build

WORKDIR /build

EXPOSE 3000

ENTRYPOINT ["node","index.js"]