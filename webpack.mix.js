let mix = require('laravel-mix');


/*For admin*/

mix.styles([
	'public_html/admin/css/bootstrap.min.css',
	'public_html/admin/css/sb-admin.css'
],'public_html/admin/admin.css');

 mix.combine([
	'public_html/admin/js/jquery.min.js',
	'public_html/admin/js/bootstrap.bundle.min.js',
 	'public_html/admin/js/sb-admin.min.js',
],'public_html/admin/admin.js');

 /*End for admin*/

/*For frontend*/
 mix.styles([
	 'public_html/frontend/vendor/bootstrap/css/bootstrap.min.css',
	 'public_html/frontend/css/modern-business.css',
	 'public_html/frontend/css/bootstrap.slider.min.css',
	 'public_html/css/mystyle.css',
 ],'public_html/frontend/frontend.css');

mix.combine([
	'public_html/frontend/vendor/jquery/jquery.min.js',
	'public_html/frontend/vendor/bootstrap/js/bootstrap.bundle.min.js',
	'public_html/frontend/js/bootstrap.slider.min.js'
],'public_html/frontend/frontend.js');
/*End frontend*/
