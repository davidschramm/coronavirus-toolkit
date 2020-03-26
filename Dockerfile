FROM node:13
COPY . .
RUN npm i && npm run build

FROM lkwg82/h2o-http2-server:v2.2.6
COPY --from=0 build/ /var/www/html