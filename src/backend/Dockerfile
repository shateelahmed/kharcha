FROM node:16.16-alpine AS base

WORKDIR /src/backend

COPY ./src/backend/package*.json /

EXPOSE 5000

FROM base AS production
ENV NODE_ENV=production
RUN npm ci
COPY . /
CMD ["node", "./bin/www"]

FROM base AS dev
ENV NODE_ENV=dev
RUN npm install --dev nodemon && npm install
COPY . /
CMD ["nodemon", "./bin/www"]
