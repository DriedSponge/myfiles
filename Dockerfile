FROM node:19-alpine

COPY .  .

VOLUME ["/.env"]

RUN yarn install

EXPOSE 3000
RUN chmod +x start.sh

ENTRYPOINT ["/start.sh"]