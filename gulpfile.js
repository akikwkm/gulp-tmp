'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var maps = require('gulp-sourcemaps');
var del = require('del');
var browserSync = require('browser-sync').create();

/* ======================================================
			▲ 変数を定義しておく ▲
====================================================== */

gulp.task('concatScript', function(){
	return gulp.src([
		//順番大事
		'js/vendor/jquery-1.12.0.min.js', 
		'js/plugins.js', 
		'js/main.js'
	])
	.pipe(maps.init())
	.pipe(concat('concat.js'))
	.pipe(maps.write('./'))
	.pipe(gulp.dest('js'));
});

gulp.task('minifyScript', ['concatScript'], function(){
	return gulp.src('js/concat.js')
	.pipe(uglify())
	.pipe(rename('concat.min.js'))
	.pipe(gulp.dest('js'));
});

gulp.task('compileSass', function(){
	return gulp.src('scss/style.scss')
	.pipe(maps.init())
	.pipe(sass())
	.pipe(maps.write('./')) //cssと同じディレクトリを指定
	.pipe(gulp.dest('css'));
});

gulp.task('browser-sync', function(){
	browserSync.init({
		server:{
			baseDir: './',
			index: 'index.html'
		}
	});
});
gulp.task('reload', function(){
	browserSync.reload();
});

//上書き保存する際に元のファイルを削除してくれるコマンド
//便利だけど使い方に注意しなければ更新されないファイルまで削除されてしまう
// gulp.task('clean', function(){
// 	del(['css/*', 'js/*']);
// });

/* ======================================================
			▲ taskを定義 ▲    ▼ taskを管理 ▼
====================================================== */

//監視下におく
gulp.task('watchFile', function(){
	// gulp.watch('./scss/style.scss', ['compileSass', 'reload']);
	gulp.watch('./css/style.css', ['reload']);
	gulp.watch('./js/main.js', ['concatScript', 'minifyScript', 'reload']);
	gulp.watch('./*.html', ['reload']);
});

//監視下に置かれているファイルをまとめる
gulp.task('serve', ['watchFile']);

//一度に複数のtaskを実行してくれるコマンド（まとめてくれる）
// gulp.task('build', ['minifyScript', 'compileSass']);

//デフォルトを指定しておくこと マスト
// gulp.task('default', ['serve']);
gulp.task('default', ['browser-sync'], function(){
	gulp.start('serve');
});














