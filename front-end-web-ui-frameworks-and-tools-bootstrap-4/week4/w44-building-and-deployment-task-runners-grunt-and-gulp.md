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

* Watch and Serve Tasks

  * 



