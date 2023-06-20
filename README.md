# ComusBala

Docker Compose - React, Laravel, MySQL, PhpMyAdmin
Just a basic boilerplate to start directly coding on React, Laravel, MySQL and PhpMyAdmin with Docker Compose.

Frontend
NodeJS v18.16.0
ReactJS
Backend
PHP 8.1
Laravel 10
Composer 2.4.1
NodeJS v18.16.0
MySQL and PhpMyAdmin
MySQL Version: 5.7.x

Using the Project
Execute the following commands and the Docker will build and run the containers;

docker-compose up --build

After that,

docker exec -i < Uour_Container_Id > php artisan migrate

This will migrate the migration files to database and,

Enjoy!

Project Summary:
This is an React as frontend and Laravel as an backend News App. Using this app, User can create their account and personilized it. The News App basically can provide a stream of News. User can find category wise news and also can search source wise news. There are some functionality is not working but i have finish that work in future work.

or

Any one can implement that future work is free to work.

Changelog
2023-06-20
[Backend] PHP version latest
[Backend] Laravel version latest
[Backend] Composer & NPM update and audits
[Backend] Docker multistage build
[Frontend] NPM update and audits
