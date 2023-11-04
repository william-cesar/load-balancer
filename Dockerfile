FROM nginx:stable

ARG ENV="production"

COPY ./static /usr/share/nginx/html
COPY ./nginx.${ENV}.conf /etc/nginx/nginx.conf