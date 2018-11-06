let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')

mix.styles([
	'public/admin/css/bootstrap.min.css',
	'public/css/fontawesome/all.min.css',
	'public/admin/css/sb-admin.css'
	],'public/admin/admin.css').version();

 mix.js([
 	'public/admin/js/jquery.min.js',
 	'public/admin/js/bootstrap.bundle.min.js',
 	'public/admin/js/jquery.easing.min.js',
 	'public/admin/js/sb-admin.min.js',
 ],'public/admin/admin.js').version();