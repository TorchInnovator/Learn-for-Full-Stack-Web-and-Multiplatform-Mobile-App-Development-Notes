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

* 
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

  ```
  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin'
  });
  ```

* update build task

  ```
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

* 


