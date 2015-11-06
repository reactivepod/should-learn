'use strict';
var Router = require('koa-router');
var koa = require('koa');
var app = koa();
var router = new Router();
var port = process.env.PORT || 3000;

router.get('/', function* () {
    // all the languages I could remember off the top of my head that weren't
    // PASCAL, COBOL, FORTRAN, and various assembly
    let languages = [
        'Python',
        'Java',
        'JavaScript',
        'C#',
        'Objective-C',
        'Swift',
        'Haskell',
        'Clojure',
        'Scheme',
        'Elm',
        'PureScript',
        'Forth',
        'Scala',
        'Groovy',
        'SmallTalk',
        'F#',
        'Ruby',
        'Go',
        'Rust',
        'Racket',
        'C',
        'C++',
        'Perl',
        'Visual Basic',
        'Erlang',
        'Elixir',
        'ClojureScript',
        'CoffeeScript',
        'TypeScript',
        'Bash',
        'Prolog',
        'Ada',
        'OCaml',
        'R'
    ];
    this.body = languages[Math.floor(Math.random()*languages.length)];
});

app.use(router.middleware());
app.listen(port);
console.log('app listening on port', port);