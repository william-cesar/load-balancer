FROM nginx:stable

ARG ENVIRONMENT=production

COPY ./static /usr/share/nginx/html
COPY ./${ENVIRONMENT}/nginx.conf /etc/nginx/nginx.conf