var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var image = require('gulp-image');
var rename = require("gulp-rename");


// ѹ��ͼƬ
gulp.task('images', function () {
	return gulp.src('content/images/**/*')
				.pipe(image({
				    pngquant: true,
				    optipng: true,
				    zopflipng: true,
				    advpng: true,
				    jpegRecompress: true,
				    jpegoptim: true,
				    mozjpeg: true,
				    gifsicle: true,
				    svgo: true
			    }))
				.pipe(gulp.dest('content/images/'));
});

// ѹ�� CSS
gulp.task('css', ['js'], function() {
    return gulp.src('assets/css/*.css')
               .pipe(autoprefixer({
                    browsers: ['last 2 versions'],
                    cascade: false
                }))
               .pipe(minifyCss({compatibility: 'ie8'}))
               .pipe(gulp.dest('assets/css/'));
});

// ѹ�� JS
gulp.task('js', ['images'], function() {
    return gulp.src('assets/js/*.js')
               .pipe(uglify())
               .pipe(gulp.dest('assets/js/'));
});

// �޸� jquery.min.js �ļ���
gulp.task('rename', function () {
	return gulp.src('public/*')
			   .pipe(rename('jquery.min.js'))
			   .pipe(gulp.dest("public/"));
});

// Ĭ������
gulp.task('default', ['css', 'rename'], function () {
    console.log('��ϲ�㣬�����Ż��������');
});
