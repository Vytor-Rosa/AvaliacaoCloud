FROM node:14.17.6
WORKDIR /
ARG PORT=8080
ENV PORT=$PORT
EXPOSE $PORT
COPY ./ .
RUN npm install
ENTRYPOINT npm start