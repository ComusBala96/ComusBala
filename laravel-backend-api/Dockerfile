FROM php

RUN apt-get update -y && apt-get install -y openssl zip unzip git
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN apt-get update \
    && docker-php-ext-install mysqli pdo pdo_mysql \
    && docker-php-ext-enable pdo_mysql

WORKDIR /laravel-backend-api
COPY composer.json /laravel-backend-api
COPY . .
RUN composer install
EXPOSE 8000
CMD php artisan serve --host=0.0.0.0