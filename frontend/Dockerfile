# Stage 1: Build the Angular app in Node.js
FROM node:18 as build

WORKDIR /app
COPY ./ /app/
RUN npm install
RUN npm run build --prod

# Stage 2: Serve the app with nginx
FROM nginx:alpine
COPY --from=build /app/dist/frontend /usr/share/nginx/html
COPY custom-nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
