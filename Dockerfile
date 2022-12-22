FROM node:19-alpine

COPY .  .

VOLUME ["/.env"]

RUN yarn install
RUN mkdir "temp"
EXPOSE 3000
RUN chmod +x start.sh
ENV BODY_SIZE_LIMIT=104857600
ENTRYPOINT ["/start.sh"]