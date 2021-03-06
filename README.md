# About

This is a real web application which was developed on PHP using Laravel framework. This project intended for viewing different types of wines. Also this project allows administrators to manage the records about wines.

## Installation

First of all, you need to get [Composer](https://getcomposer.org). Then you need to run next console command

```bash
  composer install
```

After that you need create .env file in the root folder. For example you can use .env.example
Then you need run next commands
```bash
  php artisan key:generate
  php artisan migrate
  npm install
  php artisan serve
```

## Project structure

### Models
Models you can find in the app folder

### Controllers
Controllers you can find in the app\HTTP\Controllers folder

### Traits
Traits of this application you can find in the app\Traits folder

### Tests
All tests you can find in the tests folder
To run tests you need run in the command line

```bash
  vendor\bin\phpunit
```
