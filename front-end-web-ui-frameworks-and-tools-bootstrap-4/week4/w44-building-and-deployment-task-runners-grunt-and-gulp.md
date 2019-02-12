# Grunt Part 1

* Installing Grunt globally

  ```
  npm install -g grunt-cli
  ```

* install the Grunt CLI in project

  ```
  npm install grunt --save-dev
  ```

* Creating a Grunt File

  * Gruntfile.js:

    ```js
    'use strict';

    module.exports = function (grunt) {
      // Define the configuration for all the tasks
      grunt.initConfig({

      });
    };
    ```

* Compilling SCSS to CSS

  * install Grunt module:

    * grunt-sass : Set up the Grunt modules to converts the SCSS code to CSS

    * time-grunt : how much time each task consumes

    * jit-grunt : downloaded Grunt modules when needed for the task

  * Add SASS task in  the Gruntfile

    * Gruntifile.js

    ```js
    'use strict';

    module.exports = function (grunt) {
        // Time how long tasks take. Can help when optimizing build times
        require('time-grunt')(grunt);

        // Automatically load required Grunt tasks
        require('jit-grunt')(grunt);

        // Define the configuration for all the tasks
        grunt.initConfig({
            sass: {
                dist: {
                    files: {
                        'css/styles.css': 'css/styles.scss'
                    }
                }
            }
        });

        grunt.registerTask('css', ['sass']);

    };
    ```

  * run the grunt SASS task

    ```
    grunt css
    ```

  * Demo

  * ![](/assets/W4_4gruntCSS.png)

* Watch and Serve Tasks

  * install

    ```
    npm install grunt-contrib-watch@1.0.0 --save-dev
    npm install grunt-browser-sync@2.2.0 --save-dev
    ```

  * Add browser-sync and watch tasks in Grunt file:

    ```
    ,
            watch: {
                files: 'css/*.scss',
                tasks: ['sass']
            },
            browserSync: {
                dev: {
                    bsFiles: {
                        src : [
                            'css/*.css',
                            '*.html',
                            'js/*.js'
                        ]
                    },
                    options: {
                        watchTask: true,
                        server: {
                            baseDir: "./"
                        }
                    }
                }
            }
    ```

  * And add this code in Grunt file:

    ```
        grunt.registerTask('default', ['browserSync', 'watch']);
    ```

  * Next run this command than it will start server and open on the web page, I also keep a watch on the files in the css folder, if you update any of them , it will show in cmd

    ```
    grunt
    ```

![](/assets/W4_4watchAndServeTasks.png)

---

# Grunt Part 2

### Copying the Files and Cleaning Up the Dist Folder

* Install Grunt module to copy over files to a distribution floder\(dist\),and clean up the dist folder when we needed.

  ```
  npm install grunt-contrib-copy --save-dev
  npm install grunt-contrib-clean --save-dev
  ```

* Ten add following this code to perform the copy files to the dist folder and cleaning up the dist folder

  ```
  ,

          copy: {
              html: {
                  files: [
                  {
                      //for html
                      expand: true,
                      dot: true,
                      cwd: './',
                      src: ['*.html'],
                      dest: 'dist'
                  }]                
              },
              fonts: {
                  files: [
                  {
                      //for font-awesome
                      expand: true,
                      dot: true,
                      cwd: 'node_modules/font-awesome',
                      src: ['fonts/*.*'],
                      dest: 'dist'
                  }]
              }
          },

          clean: {
              build: {
                  src: [ 'dist/']
              }
          }
  ```

* ### Compressing and Minifying Images

  * install the grunt-contrib-imagemin module and use it to process the image

    ```
    npm install grunt-contrib-imagemin --save-dev
    ```

  * Add configure the imagemin task in Gruntfile

    ```
    ,
            imagemin: {
                dynamic: {
                    files: [{
                        expand: true,                  // Enable dynamic expansion
                        cwd: './',                   // Src matches are relative to this path
                        src: ['img/*.{png,jpg,gif}'],   // Actual patterns to match
                        dest: 'dist/'                  // Destination path prefix
                    }]
                }
            }
    ```

  * And add the comma after the end of the SASS task

    ```
        grunt.registerTask('build',[
            'clean',
            'copy',
            'imagemin'
        ]);
    ```

  * Run this command:

```
grunt build
Running "clean:build" (clean) task
>> 1 path cleaned.

Running "copy:html" (copy) task
Copied 3 files

Running "copy:fonts" (copy) task
Copied 6 files

Running "imagemin:dynamic" (imagemin) task
Minified 4 images (saved 21.8 kB - 17.5%)

Done.


Execution Time (2019-02-06 20:01:22 UTC+8)
loading grunt-contrib-clean      12ms  █ 1%
clean:build                      29ms  ███ 3%
copy:html                        24ms  ██ 2%
copy:fonts                      101ms  ████████ 10%
loading grunt-contrib-imagemin  306ms  ██████████████████████ 31%
imagemin:dynamic                493ms  ████████████████████████████████████ 50%
Total 977ms
```

### Preparing the Distribution Folder and Files

* Install Grunt usemin module together \(concat, cssmin, uglify and filerev\)

  ```
  npm install grunt-contrib-concat --save-dev
  npm install grunt-contrib-cssmin --save-dev
  npm install grunt-contrib-htmlmin --save-dev
  npm install grunt-contrib-uglify --save-dev
  npm install grunt-filerev --save-dev
  npm install grunt-usemin --save-dev
  ```

* update task configuration within Gruntfile.js:

  ```
  ,

          useminPrepare: {
              foo: {
                  dest: 'dist',
                  src: ['contactus.html','aboutus.html','index.html']
              },
              options: {
                  flow: {
                      steps: {
                          css: ['cssmin'],
                          js:['uglify']
                      },
                      post: {
                          css: [{
                              name: 'cssmin',
                              createConfig: function (context, block) {
                              var generated = context.options.generated;
                                  generated.options = {
                                      keepSpecialComments: 0, rebase: false
                                  };
                              }       
                          }]
                      }
                  }
              }
          },

          // Concat
          concat: {
              options: {
                  separator: ';'
              },

              // dist configuration is provided by useminPrepare
              dist: {}
          },

          // Uglify
          uglify: {
              // dist configuration is provided by useminPrepare
              dist: {}
          },

          cssmin: {
              dist: {}
          },

          // Filerev
          filerev: {
              options: {
                  encoding: 'utf8',
                  algorithm: 'md5',
                  length: 20
              },

              release: {
              // filerev:release hashes(md5) all assets (images, js and css )
              // in dist directory
                  files: [{
                      src: [
                          'dist/js/*.js',
                          'dist/css/*.css',
                      ]
                  }]
              }
          },

          // Usemin
          // Replaces all assets with their revved version in html and css files.
          // options.assetDirs contains the directories for finding the assets
          // according to their relative paths
          usemin: {
              html: ['dist/contactus.html','dist/aboutus.html','dist/index.html'],
              options: {
                  assetsDirs: ['dist', 'dist/css','dist/js']
              }
          },

          htmlmin: {                                         // Task
              dist: {                                        // Target
                  options: {                                 // Target options
                      collapseWhitespace: true
                  },
                  files: {                                   // Dictionary of files
                      'dist/index.html': 'dist/index.html',  // 'destination': 'source'
                      'dist/contactus.html': 'dist/contactus.html',
                      'dist/aboutus.html': 'dist/aboutus.html',
                  }
              }
          }
  ```

* Next update jit-grunt conf

  ```js
  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin'
  });
  ```

* update build task

  ```js
      grunt.registerTask('build', [
          'clean',
          'copy',
          'imagemin',
          'useminPrepare',
          'concat',
          'cssmin',
          'uglify',
          'filerev',
          'usemin',
          'htmlmin'
      ]);
  ```

* run Grunt

```
grunt build
Running "clean:build" (clean) task
>> 1 path cleaned.

Running "copy:html" (copy) task
Copied 3 files

Running "copy:fonts" (copy) task
Copied 6 files

Running "imagemin:dynamic" (imagemin) task
Minified 4 images (saved 21.8 kB - 17.5%)

Running "useminPrepare:foo" (useminPrepare) task
Configuration changed for cssmin, uglify

Running "concat:dist" (concat) task

Running "cssmin:dist" (cssmin) task
>> No files created.

Running "cssmin:generated" (cssmin) task
>> 1 file created. 204.87 kB → 203.74 kB

Running "uglify:dist" (uglify) task
>> No files created.

Running "uglify:generated" (uglify) task
>> 1 file created 253.81 kB → 186.14 kB

Running "filerev:release" (filerev) task
Revved 2 files

Running "usemin:html" (usemin) task
Replaced 3 references to assets

Running "htmlmin:dist" (htmlmin) task
Minified 3 files

Done.


Execution Time (2019-02-06 21:06:20 UTC+8)
copy:fonts                       57ms  █ 1%
loading grunt-contrib-imagemin  301ms  █████ 7%
imagemin:dynamic                494ms  █████████ 11%
loading grunt-contrib-cssmin    136ms  ███ 3%
cssmin:generated                623ms  ███████████ 14%
loading grunt-contrib-uglify     59ms  █ 1%
uglify:generated                 2.2s  ████████████████████████████████████ 51%
loading grunt-contrib-htmlmin   222ms  ████ 5%
Total 4.3s
```

---

# Gulp Part 1

### Installing Gulp

* Install Gulp command-line interface \(CLI\)

```
npm install -g gulp-cli
```

* Install Gulp in your project

```
npm install gulp --save-dev
```

### Install Gulp Plugins for SASS and Browser-Sync

* Install all the Gulp plugins that we need

```
npm install gulp-sass  browser-sync --save-dev
```

### Creating a Gulp File

* create gulpfile.js

### Loading Gulp Plugins

* Load in all the Gulp plugin in the Gulp file

```
'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');
```

### Adding Gulp Tasks for SASS and Browser-Sync

* Add the SASS task , Browser-Sync task and default task

```js
gulp.task('sass', function () {
  return gulp.src('./css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./css/*.scss', ['sass']);
});

gulp.task('browser-sync', function () {
   var files = [
      './css/*.css',
      './img/*.{png,jpg,gif}',
      './js/*.js'
   ];

   browserSync.init(files, {
      server: {
         baseDir: "./"
      }
   });

});

// Default task
gulp.task('default', ['browser-sync'], function() {
    gulp.start('sass:watch');
});
```

### Running the Gulp Tasks

* run command gulp

```
gulp
gulp
[11:48:22] Using gulpfile D:\Downloads\FullStackHW\Week4\gulpfile.js
[11:48:22] Starting 'browser-sync'...
[11:48:22] Finished 'browser-sync' after 94 ms
[11:48:22] Starting 'default'...
[11:48:22] Starting 'sass:watch'...
[11:48:22] Finished 'sass:watch' after 11 ms
[11:48:22] Finished 'default' after 12 ms
[Browsersync] Access URLs:
 --------------------------------------
       Local: http://localhost:3000
    External: http://192.168.0.103:3000
 --------------------------------------
          UI: http://localhost:3001
 UI External: http://localhost:3001
 --------------------------------------
[Browsersync] Serving files from: ./
[Browsersync] Watching files...
```

---

# Gulp Part 2

### [ ](https://www.coursera.org/learn/bootstrap-4/discussions/weeks/4)Copying the Files and Cleaning up the Dist Folder

* create tasks for copying the font files and cleaning up the distribution folder.

```
npm install del --save-dev
```

* require it in the Gulp files

```js
del = require('del'),
```

* add clean task and copyfonts

```js
// Clean
gulp.task('clean', function() {
    return del(['dist']);
});

gulp.task('copyfonts', function() {
   gulp.src('./node_modules/font-awesome/fonts/**/*.{ttf,woff,eof,svg}*')
   .pipe(gulp.dest('./dist/fonts'));
});
```

### Compressing and Minifying Images

* install the gulp-imagemin plugin

```
npm install gulp-imagemin --save-dev
```

* configure the imagemin task

```
imagemin = require('gulp-imagemin'),
```

* create imagemin task in gulp.js

```js
// Images
gulp.task('imagemin', function() {
  return gulp.src('img/*.{png,jpg,gif}')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('build',['clean'], function(){
    gulp.start('copyfonts', 'imagemin');
});
```

* run guip build

```
gulp build
[12:13:10] Using gulpfile D:\Downloads\FullStackHW\Week4\gulpfile.js
[12:13:10] Starting 'clean'...
[12:13:10] Finished 'clean' after 11 ms
[12:13:10] Starting 'build'...
[12:13:10] Starting 'copyfonts'...
[12:13:10] Finished 'copyfonts' after 6.29 ms
[12:13:10] Starting 'imagemin'...
[12:13:10] Finished 'build' after 12 ms
[12:13:10] gulp-imagemin: Minified 4 images (saved 21.8 kB - 17.5%)
[12:13:10] Finished 'imagemin' after 535 ms
```

### 

### Preparing the Distribution Folder and Files

* install gulp-gulp-usemin and other Gulp plugins

```
npm install gulp-uglify@3.0.0 gulp-usemin@0.3.29 gulp-rev@8.1.1 gulp-clean-css@3.9.3 gulp-flatmap@1.0.2 gulp-htmlmin@4.0.0 --save-dev

```

* configure these task

```js
var ...
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    cleanCss = require('gulp-clean-css'),
    flatmap = require('gulp-flatmap'),
    htmlmin = require('gulp-htmlmin');
```

* create usemin and  the build task

```
gulp.task('usemin', function() {
  return gulp.src('./*.html')
  .pipe(flatmap(function(stream, file){
      return stream
        .pipe(usemin({
            css: [ rev() ],
            html: [ function() { return htmlmin({ collapseWhitespace: true })} ],
            js: [ uglify(), rev() ],
            inlinejs: [ uglify() ],
            inlinecss: [ cleanCss(), 'concat' ]
        }))
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('build',['clean'], function() {
    gulp.start('copyfonts','imagemin','usemin');
});

```

### Running the Gulp Tasks

```
gulp build
[12:22:54] Using gulpfile D:\Downloads\FullStackHW\Week4\gulpfile.js
[12:22:54] Starting 'clean'...
[12:22:54] Finished 'clean' after 8.51 ms
[12:22:54] Starting 'build'...
[12:22:54] Starting 'copyfonts'...
[12:22:54] Finished 'copyfonts' after 7.52 ms
[12:22:54] Starting 'imagemin'...
[12:22:54] Starting 'usemin'...
[12:22:54] Finished 'build' after 14 ms
[12:22:58] Finished 'usemin' after 4.36 s
[12:22:59] gulp-imagemin: Minified 4 images (saved 21.8 kB - 17.5%)
[12:22:59] Finished 'imagemin' after 4.5 s
```



