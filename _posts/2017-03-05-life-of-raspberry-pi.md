---
layout: post
title:  "Life Of Raspberry Pi"
image:  
date:   2017-03-05 07:32:11 -0400
categories: jekyll update
---
In essence, what Gulp really does is it strings node modules together into a single file -- the gulpfile. In this file we use a gulp method, the pipe method, to join functionality from separate node modules to build more complex tasks. You can think of pipes as the 'glue' that holds these tasks together.

{% include image.html url="/images/raspberry-pi.png" description="" %}{: .float--right }

```javascript
gulp.task('compileMainSass', function() {
    return gulp.src('_sass/main.scss')
    .pipe(maps.init())
    .pipe(sass())
    .pipe(rename('mainStyle.css'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('css'))
    .pipe(reload({stream: true}));
});
```

Building on this theme, we can use Gulp tasks in tandem with one another to create ever more powerful commands. Tasks can even take other tasks as dependencies, using their return values and running with them. With this strategy, whole build cycles can be simplified into a single Gulp command.

```javascript
gulp.task('default', ['clean', 'build', 'watch', 'browserSync'], function (){
// Compile, uglify, clean, and sync devices.
});
```

## Globbing Patterns

One mighty, albeit small, advantage Gulp affords is 'globbing' patterns. This special syntax allows selection of entire folders or very specific files within whole directories and sub-directories using asterisks. Here's an example:

```javascript
sass/**/*.scss
```

Notice the double asterisks. This selects any Sass sub-directories. The single asterisk selects any files ending in .scss. It's saves a ton of writing hard coded file paths.

This was just a small stroll down Gulp lane but as you can see, Gulp is great. What it takes to get yourself up to speed in Gulp will be returned ten fold in the time it saves you in development.
