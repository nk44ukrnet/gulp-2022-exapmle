import gulpLess from 'gulp-less';
import rename from  'gulp-rename';
import cleanCss from 'gulp-clean-css';
import webpcss from 'gulp-webpcss';
import autoprefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';

export const less = () => {
    return app.gulp.src(app.path.src.less, {sourcemaps: true})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'LESS',
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(gulpLess())
        .pipe(groupCssMediaQueries())
        .pipe(webpcss({
            webpClass: '.webp',
            noWebpClass: '.no-webp'
        }))
        .pipe(autoprefixer({
            grid: true,
            overrideBrowserlist: ["last 3 versions"],
            cascade: true
        }))
        //comment if you dont want uncompressed css file
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(cleanCss())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream())
}