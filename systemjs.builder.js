var path = require('path');
var Builder = require('systemjs-builder');
var del = require('del');

//bundle JS fichiers(TS compilés).
var builder = new Builder('public', 'public/systemjs.config.js');

//minifer fichiers JS en un fichier bundle.
//supprimer tous fichiers JS individuels.
builder.bundle('app/boot.js', './public/js/app/boot.js', {
        minify: true,
        encodeNames: false
    })
    .then(function () {
        del(['./public/js/app/**/*.js', '!./public/js/app/**/{boot.js,*.html,*.htm,*.css}'])
            .then(function (paths) {
                console.log('Fichiers et dossiers supprimés:\n', paths.join('\n'));
            });
        console.log('Build complété!');
    })
    .catch(function (err) {
        console.log('Build erreure!')
        console.log(err);
    });