FROM nginx:stable

ARG ENVIRONMENT

COPY ./static /usr/share/nginx/html
COPY ./nginx.${ENVIRONMENT}.conf /etc/nginx/nginx.conf