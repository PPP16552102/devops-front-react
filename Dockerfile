FROM nginx
LABEL name="devops-front"
LABEL version="1.0"
COPY ./dist /usr/share/nginx/html
COPY ./react-front.conf /etc/nginx/conf.d
EXPOSE 80