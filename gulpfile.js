let gulp 		= require('gulp'),
	sass 		= require('gulp-sass'),
	browserSync = require('browser-sync')
	concat 		= require('gulp-concat'),
	uglify 		= require('gulp-uglify'),
	cssnano 	= require('gulp-cssnano'),
	prefixer 	= require('gulp-autoprefixer'),
	rename 		= require('gulp-rename'),
	del    		= require('del');

gulp.task('sass', function () {
	return gulp.src('src/sass/**/*.+(sass|scss)')
		.pipe(sass().on('error', sass.logError))
		.pipe(prefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.stream());
});

/*gulp.task('css-libs', function () {
	return gulp.src('src/css/libs.css')
		.pipe(cssnano())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('src/css'));
});*/

/*gulp.task('scripts', function () {
	return gulp.src([
		'src/libs/jquery/dist/jquery.min.js',
		'src/libs/bootstrap/js/dropdown.js',
		'src/libs/wow/dist/wow.min.js'
	])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('src/js'));
});*/

gulp.task('liveReload', function () {
	browserSync.init({
		server: {
			baseDir: 'src/',
		},
		notify: false
	});
});

gulp.task('watch', ['liveReload', 'sass'], function () { /* 'css-libs', 'scripts' */
	gulp.watch('src/sass/**/*.+(sass|scss)', ['sass']);
	gulp.watch('src/*.html', browserSync.reload);
	gulp.watch('src/js/*.js', browserSync.reload);
});

gulp.task('clean', function () {
	return del.sync('dist');
});

gulp.task('build', ['clean', 'sass'], function () { /* 'css-libs', 'scripts' */
	gulp.src('src/*.html')
		.pipe(gulp.dest('dist'));
		
	gulp.src('src/img/**/*')
		.pipe(gulp.dest('dist/img'));		
		
	/*gulp.src('src/fonts/!**!/!*')
		.pipe(gulp.dest('dist/fonts'));*/
		
	gulp.src('src/css/**/*.css')
		.pipe(gulp.dest('dist/css'));		
		
	gulp.src('src/js/**/*.js')
		.pipe(gulp.dest('dist/js'));	
});

gulp.task('default', ['watch']);

