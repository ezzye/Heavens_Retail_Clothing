## Using the boilerplate

Use Yoman generator:

`npm install -g bower yo gulp generator-mobileangularui`

Run generator in directory:

`yo mobileangularui`

Run gulp:

`gulp build`


Add Testing:
.jshintrc

Add the following to `package.json` :

    "http-server": "^0.6.1",
    "jasmine-core": "^2.3.4",
    "karma": "~0.12",
    "karma-chrome-launcher": "^0.1.12",
    "karma-firefox-launcher": "^0.1.6",
    "karma-jasmine": "^0.3.5",
    "karma-junit-reporter": "^0.2.2",
    "protractor": "^2.1.0",
    "shelljs": "^0.2.6"


Add following scripts to `package.json` :

"scripts": {
    "postinstall": "bower install",

    "prestart": "npm install",
    "start": "http-server -a localhost -p 8000 -c-1",

    "pretest": "npm install",
    "test": "karma start karma.conf.js",
    "test-single-run": "karma start karma.conf.js  --single-run",

    "preupdate-webdriver": "npm install",
    "update-webdriver": "webdriver-manager update",

    "preprotractor": "npm run update-webdriver",
    "protractor": "protractor e2e-tests/protractor.conf.js",

    "update-index-async": "node -e \"require('shelljs/global'); sed('-i', /\\/\\/@@NG_LOADER_START@@[\\s\\S]*\\/\\/@@NG_LOADER_END@@/, '//@@NG_LOADER_START@@\\n' + sed(/sourceMappingURL=angular-loader.min.js.map/,'sourceMappingURL=bower_components/angular-loader/angular-loader.min.js.map','app/bower_components/angular-loader/angular-loader.min.js') + '\\n//@@NG_LOADER_END@@', 'app/index-async.html');\""
  }

`npm install`


add the following to `bower.json' :

"angular-loader": "~1.4.0",
    "angular-mocks": "~1.4.0",
    "html5-boilerplate": "~5.2.0"


then run `bower`







add `karma.conf.js` file with follwoing contents:
module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/spec/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};

add karma testing folder `spec` folder in `src` for unit tests

add protractor by making:

`e2e-tests` folder in `src`

adding `protractor.conf.js` file with following content:

exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    '*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000/app/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};

Add example scenario file

from `https://github.com/angular/angular-seed/blob/master/e2e-tests/scenarios.js`

Add example unit test file

from `https://github.com/angular/angular-seed/blob/master/app/view1/view1_test.js`


