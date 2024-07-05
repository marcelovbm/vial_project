FROM node:20.15.0

USER node

WORKDIR /node

COPY --chown=node:node package*.json .

COPY --chown=node:node yarn.lock .

COPY --chown=node:node .yarn .

COPY --chown=node:node .next .

COPY --chown=node:node . .

RUN yarn install

RUN yarn build

EXPOSE 3001

CMD ["yarn", "start"]