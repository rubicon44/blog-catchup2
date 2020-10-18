# FROM node:13.12.0-alpine
FROM node:12.18.3-alpine

RUN apk add --no-cache python make g++ git
RUN apk add vips-dev fftw-dev \
    --no-cache --repository http://dl-3.alpinelinux.org/alpine/edge/community \
    --repository http://dl-3.alpinelinux.org/alpine/edge/main
RUN rm -fR /var/cache/apk/*

RUN apk update && \
    apk add git yarn build-base autoconf automake libtool pkgconfig nasm && \
    yarn global add gatsby-cli && \
    gatsby options set package-manager yarn

RUN mkdir /blog-catchup2
ENV FRONT_ROOT /blog-catchup2
WORKDIR $FRONT_ROOT

COPY ./package.json $FRONT_ROOT/package.json
# COPY ./package-lock.json $FRONT_ROOT/package-lock.json
COPY ./node_modules $FRONT_ROOT/node_modules
COPY ./yarn.lock $FRONT_ROOT/yarn.lock

RUN npm install

ADD . $FRONT_ROOT