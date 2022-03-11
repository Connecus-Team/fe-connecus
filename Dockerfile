# build environment
FROM node:13.12.0-alpine as build
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install --unsafe-perm
COPY . ./
RUN npm run prod

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html

# new
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 5112
CMD ["nginx", "-g", "daemon off;"]