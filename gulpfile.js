const gulp 	    = require( 'gulp' ),
	terser 	    = require( 'gulp-terser' ),
    typescript  = require( 'gulp-typescript' ),
	umd		    = require( 'gulp-umd' );


//	Default task 'gulp': Runs JS tasks
const js = ( cb ) => {
    return gulp.src( 'src/dotdotdot.ts' )
        .pipe( typescript({
            "target": "es6"
        }) )
        .pipe( terser({ 
            output: {
                comments: "/^!/"
            }
        }) )
        .pipe( umd() )
        .pipe( gulp.dest( 'dist' ) );

    cb();
};
exports.default = js;


//	Watch task 'gulp watch': Starts a watch on JS tasks
const watch = ( cb ) => {
    gulp.watch( 'src/*.ts', function( cb ) {
        js();
        cb();
    });
};
exports.watch = watch;