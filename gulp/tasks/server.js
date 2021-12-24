export const server = (done) => {
    app.plugins.browsersync.init({
        server: {
            baseDir: `${app.path.build.html}` //.php
        },
        notify: false,
        port: 3000,
    })
}