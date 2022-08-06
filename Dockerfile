FROM node:14

WORKDIR /app

#npm install 을 위해, package.json과 package-lock.json을 먼저 copy해둠
COPY package*.json /app/

RUN npm ci 
#npm ci, npm install 차이 :  npm ci는 package-lock.json에 명시된 버전을사용 npm install은 업데이트된 버전을 사용

COPY . /app

EXPOSE 3000

#컨테이너가 켜지자마자 실행할 명령어 
#npm start : package.json의 scripts에 있는 start 명령어를 실행
CMD ["npm", "start"]