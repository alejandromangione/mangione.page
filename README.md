### My personal website

My previous website I've done with Jekyll and them I've realized that it was overkill for a simple page. Nothing fancy here, just HTML, CSS and Javascript.

## Run Sass
sass --watch ./assets/styles/sass/app.scss:./assets/styles/app.css --style=compressed --poll

## Run Server (optional)
- Ruby
ruby -run -e httpd .

- PHP
php -S localhost:9090 -t .