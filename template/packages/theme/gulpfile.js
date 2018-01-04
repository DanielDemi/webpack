'use strict'

var gulp = require('gulp')
var less = require('gulp-less')
var cssmin = require('gulp-cssmin')
var gulpStylelint = require('gulp-stylelint')
var myStylelintFormatter = require('stylelint-checkstyle-formatter')
var stylefmt = require('gulp-stylefmt')

/**
 * javascript comment
 * @Author: xiangxiao3
 * @Date: 2018-01-04 18:52:51
 * @Desc: 打包样式文件
 */
gulp.task('compile', function () {
  return gulp.src('./src/index.less')
    .pipe(less())
    .pipe(cssmin())
    .pipe(gulp.dest('./lib'))
})

/**
 * javascript comment
 * @Author: xiangxiao3
 * @Date: 2018-01-04 18:53:03
 * @Desc:  字体图标移动, 如果没有不影响运行
 */
gulp.task('copyfont', function () {
  return gulp.src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest('./lib/fonts'))
})

/**
 * javascript comment
 * @Author: xiangxiao3
 * @Date: 2018-01-04 19:51:39
 * @Desc: lint校验
 */
gulp.task('lint-less', function lintCssTask () {
  return gulp
    .src(['src/*.less', 'src/**/*.less'])
    .pipe(stylefmt())
    .pipe(gulpStylelint({
      configFile: './.stylelintrc.json',
      failAfterError: true,
      reportOutputDir: 'reports/lint',
      reporters: [
        { formatter: 'verbose', console: true },
        { formatter: 'json', save: 'report.json' },
        { formatter: myStylelintFormatter, save: 'my-custom-report.txt' }
      ]
    }))
})

gulp.task('build', ['compile'])
