import gulp from 'gulp';
import prettier from 'gulp-prettier';
import sass from 'gulp-sass';
import dartSass from 'sass';

const { src, watch, dest, series } = gulp;
const sassCompiler = sass(dartSass);

export function buildStyles() {
    return src('./sass/**/*.scss')
        .pipe(sassCompiler())
        .pipe(dest('./css'));
}

export function formatScripts() {
    return src('./js/**/*.js')
        .pipe(prettier({ singleQuote: true }))
        .pipe(dest('./js'));
}

export function watchTask() {
    watch('./sass/**/*.scss', series(buildStyles));
    watch('./js/**/*.js', series(formatScripts));
}

export default series(
    buildStyles,
    watchTask
);
