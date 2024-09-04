FROM ubuntu
RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get upgrade -y
RUN apt-get install -y nodejs

WORKDIR /server
COPY package.json /server
RUN npm install
COPY . /server


ENTRYPOINT [ "npm", "run", "dev" ]