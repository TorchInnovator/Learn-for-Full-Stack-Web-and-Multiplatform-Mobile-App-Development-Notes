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

  * Demo![](/assets/W4_4gruntCSS.png)

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



* THen add following this code to perform the copy files to the dist folder and cleaning up the dist folder
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
* 
### Compressing and Minifying Images

* 



