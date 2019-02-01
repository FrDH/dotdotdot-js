// npm install

var gulp 	    = require( 'gulp' ),
	uglify 	    = require( 'gulp-uglify' ),
    typescript  = require( 'gulp-typescript' ),
	umd		    = require( 'gulp-umd' );



//	Default task 'gulp': Runs JS tasks
gulp.task( 'default', function(){
    return runJSTasks();
});



//	Watch task 'gulp watch': Starts a watch on JS tasks
gulp.task( 'watch', function() {
  gulp.watch( 'src/*.ts', [ 'js' ] );
});



//	JS task 'gulp js': Runs all JS tasks
gulp.task( 'js', function() {
	return gulp.src( 'src/dotdotdot.ts' )
        .pipe( typescript({
            "target": "es6"
        }) )
        // .pipe( uglify({ 
        //     output: {
        //         comments: "/^!/"
        //     }
        // }) )
        .pipe( umd() )
        .pipe( gulp.dest( 'dist' ) );
});
