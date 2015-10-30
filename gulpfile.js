var gulp = require('gulp');
var server = require('gulp-server-livereload');
var ts = require('gulp-typescript');
var merge = require('merge2');
var tsProject = ts.createProject('tsconfig.json');

var serverConfig = {
    defaultFile: 'index.html',
    open: true, // Ouvertur du navigateur lors du démarrage du serveur
    livereload: true, // Activation du livereload
    directoryListing: false // Désactivation de l'affichage des répertoires
}

// Configuration du serveur http (livereload)
gulp.task('serve', function() {
    gulp.src('www')
        .pipe(server(serverConfig));
});

// Compilation du typescript
gulp.task('scripts', function() {
    var tsResult = gulp.src('app/**/*.ts')// tsProject.src() existe, mais la fonction copie le répertoire app.
        .pipe(ts(tsProject));

    return merge([
        tsResult.js.pipe(gulp.dest('www'))
    ]);
});

// Scrute la compilation typescript
gulp.task('watch', ['scripts'], function() {
    gulp.watch('app/**/*.ts', ['scripts']);
})