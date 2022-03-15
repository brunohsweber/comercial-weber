FROM node

WORKDIR /usr/app
COPY package.json ./
RUN npm install

COPY . .

EXPOSE 3333

CMD bash -c "cd scripts && sh start.sh"



