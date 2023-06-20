# The News App

[@ComusBala](https://www.github.com/ComusBala96)

# Docker Compose - React, Laravel, MySQL, PhpMyAdmin

This is an React, Laravel, MySQL and PhpMyAdmin with Docker Compose.

# App Configaration

# Frontend

- NodeJS v18.16.0
- ReactJS

# Backend

- PHP 8.1,
- Laravel 10,
- Composer 2.4.1,
- MySQL and PhpMyAdmin,
- MySQL Version: 5.7.x

## Deployment

Using the Project Execute the following commands and the Docker will build and run the containers

```bash
  docker-compose up --build
```

Then.

```bash
docker ps
```

Copy your laravel container id

After that,

```bash
 docker exec -i < Your_Container_Id > php artisan migrate
```

This will migrate the migration files to database and,

Enjoy!!

# Or

Start your mysql and apache server then

Enter the laravel directory

```bash
 cd laravel-backend-api
```

Then,

```bash
 composer install
```

After that,

#### Change .env file

- DB_HOST=mysql to DB_HOST=127.0.0.1
- DB_PASSWORD=root to DB_PASSWORD=

```bash
 php artisan migrate
```

Finaly

```bash
 php artisan serve
```

And,

```bash
 cd react-news-app
```

Then,

```bash
 npm install
```

After that,

```bash
 npm start
```

Enjoy!

## Project Summary:

This is an React as frontend and Laravel as an backend News App. Using this app, User can create their account and personilized it.

The News App basically can provide a stream of News. User can find category wise news and also can search source wise news.

There are some functionality is not working but i have finish that work in future work.

or

#### Any one can implement that future work is free to work.

## Changelog

- [Backend] PHP version latest
- [Backend] Laravel version latest
- [Backend] Composer & NPM update and audits
- [Backend] Docker multistage build
- [Frontend] NPM update and audits

## Support

For support, email comusbala96@gmail.com or contact +919832925083
