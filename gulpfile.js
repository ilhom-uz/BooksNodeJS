//adding gulp
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var wiredep = require('wiredep').stream;
var nodemon = require('gulp-nodemon');

// Variable for Javascript files
var jsFiles = ['*.js', 'src/**/*.js'];

//Task to check styling
gulp.task('style', function() {
    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe(jscs());
});
// Task to inject bootstrap and js static files
gulp.task('inject', function() {
    var options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../../public'
    };
    return gulp.src('./src/views/*.html')
        .pipe(wiredep(options))
        .pipe(gulp.dest('./src/views'));
});

// Task to watch changes in JS files and restart style, inject task and app.js
gulp.task('serve', ['style', 'inject'], function() {
    var options = {
        script: 'app.js',
        delaytime: 1,
        env: {
            'PORT': 3000
        },
        watch: jsFiles
    };
    return nodemon(options)
        .on('restart', function(ev) {
            console.log('Restarting...');
        });
});