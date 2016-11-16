# Use Official NodeJs base image
FROM node

RUN mkdir -p /noderserver/
WORKDIR /noderserver

# Clone NodeJs project into working folder and install dependinacies
RUN git clone https://github.com/SwyserDev/uber-api.git .
RUN npm install

# Start node server
EXPOSE 8080
CMD [ "npm", "start" ]