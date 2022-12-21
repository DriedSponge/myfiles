FROM node:19-alpine

COPY .  .

RUN yarn install
RUN yarn run build

ENV PUBLIC_PROJECT_ID;
ENV PUBLIC_PROJECT_ENDPOINT;

WORKDIR /build

EXPOSE 3000

ENTRYPOINT ["node","index.js"]