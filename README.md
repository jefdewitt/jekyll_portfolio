# [jefdewitt.com](http://jefdewitt.com/), a Jekyll site.

This is the fifth iteration of my portfolio site and third Jekyll project overall. There's a lot going on here, from identifying useful workarounds to containing resources to extend functionality. Jekyll is a great platform right-off-the-bat, but I've added some enhancements and that take it up a notch. Here you'll find tools, tips, tricks, and useful strategies.

If you want your own Jekyll site [here's](https://jekyllrb.com/docs/home/) the documentation. 

# Requirements 

- GNU/Linux, Unix, or macOS
- Ruby version 2.0 or above, including all development headers
- RubyGems
- GCC and Make (in case your system doesn’t have them installed, which you can check by running gcc -v and make -v in your system’s command line interface)

# Installation

The best way to install Jekyll is via RubyGems. At the terminal prompt, simply run the following command to install Jekyll:

```shell
$ gem install jekyll
```

If you already have Jekyll installed, you can check version with this.

```shell
$ jekyll --version
```

Now here's some tips and customizations to improve your workflow.

## Table Of Contents

- [Front Matter](#front-matter)
- [Collections](#collections)
- [Includes](#includes)
- [Featured Images](#featured-images)
- [Notes On Liquid Syntax](#notes-on-liquid-syntax)
- [Syntax Highlighting](#syntax-highlighting)
- [Navigation](#navigation)
- [Config.yml](#config)
- [URL Structure](#url-structure)
- [Screeshot](#screeshot)
- [Comments](#comments)

## Front Matter

Taken directly from Jekyll's [documentation](https://jekyllrb.com/docs/frontmatter/):

The front matter is where Jekyll starts to get really cool. Any file that contains a YAML front matter block will be processed by Jekyll as a special file. The front matter must be the first thing in the file and must take the form of valid YAML set between triple-dashed lines. Here is a basic example:

```liquid
---
layout: post
title: Blogging Like a Hacker
---
```

Between these triple-dashed lines, you can set predefined variables (see below for a reference) or even create custom ones of your own. These variables will then be available to you to access using Liquid tags both further down in the file and also in any layouts or includes that the page or post in question relies on.

## Collections

An unique aspect to this project is the use of [collections](https://jekyllrb.com/docs/collections/). Out-of-the-box, Jekyll has two types of content, posts and pages. If you're looking for another way to organize related content that doesn't exactly fall under these two types, collections is your answer. Collections tell Jekyll we've got a new content type.

The first thing you need to do is inform Jekyll of the new collection. This tells Jekyll to look in the `projects` folder for documents, and to read them into the appropriate collection, including YAML front matter, just as it would posts. We do this by adding a block of code inside `config.yml`. 

```
# New document type
collections:
  projects:
    output: true
    permalink: /projects/:title/

```

We add the key `output: true` so Jekyll renders a page per each item file our project folder. Thanks to Ben Balter's article on the subject which really drove the concept home for me. More on what he wrote can be found [here](http://ben.balter.com/2015/02/20/jekyll-collections/).

## Includes

The `_includes` directory contains portions of code to be reused or included elsewhere. These portions can be inluded with a simple include statement, like:

```twig
{% include youtubePlayer.html %}
```

Includes are a great way to add functionality with precision, only where it's needed. Thanks to Adam Harris's [article](http://www.adamwadeharris.com/how-to-easily-embed-youtube-videos-in-jekyll-sites-without-a-plugin/) I found a way for embedding YouTube videos easily with no 3rd party plugins.

My `youtubePlayer.html` file:
```html
<iframe style="max-width: 100%; 
               min-width: 100%;" 
               width="560" 
               height="315" 
               src="https://www.youtube.com/embed/{{ include.id }}" 
        frameborder="0" 
        allowfullscreen>
</iframe>
```

Anything inside the `_includes` folder can be included with a single TWIG `include` statement.

## Featured Images

Featured images are representative images for posts. Unlike a traditional CMS, like WordPress, where a featured image for a post can be set in the Dashboard, Jekyll lacks this functionality natively. It is relatively easy to implement, however, and this code block inside of an `include` works nicely. Now, all that needs to be done is to call the `include` where desired.

```twig
{% if post.content contains 'img' %}

    {% assign foundImage = 0 %}
    {% assign images = post.content | split: "<img " %}
    {% for image in images %}
      {% if image contains 'src' %}
        {% if foundImage == 0 %}
          {% assign html = image | split:"/>" | first %}
          <img {{ html }} />
          {% assign foundImage = 1 %}
        {% endif %}

      {% endif %}
    {% endfor %}

{% elsif post.image %}
    <img src="/images/{{ post.image }}">
{% else %}
    <img src="/images/typewriter.jpg" alt="Typewriter">
{% endif %}
```

Resource for block shown above and full code can be found [here](http://stackoverflow.com/questions/25463865/in-jekyll-how-do-i-grab-a-posts-first-image).

Another option without using a for loop is adding an image to the post's Front Matter:

```yaml
-
image: featured-image.jpg
-
```

...and then you can reference the image elsewhere in your code by:

```liquid
<img src="{{ site.baseurl }}/images/{{ post.image }}">
```

## Notes On Liquid Syntax

The Liquid templating engine assigns variables via the method shown below. Notice the `.url` method used to get the respective URLs.

```liquid
{% assign currentPage = page.url %}
{% assign currentPost = post.url %}
```

An output statement is a set of double curly braces containing an expression; when the template is rendered, it gets replaced with the value of that expression.

```liquid
<p>{{ current }}</p>
<p>{{ currentPost }}</p>
```

## Syntax Highlighting

For Jekyll versions 2.5+, a mighty built-in feature is syntax highlighting with `rouge`. Actually turning it on is a simple code block in `_config.yml`.

```
# Syntax highlighting
highlighter: rouge
```

And the implementation is easy too. Just denote the language after the top backticks. If the markdown looks like this...

    ```javascript
    var foo = function() {
      return 'bar';
    }
    ```
    
...then the output would render this.

```javascript
    var foo = function() {
      return 'bar';
    }
```

## Navigation

Items appearing in the navigation are markdown files in the root directory. So, adding and removing items is as simple as updating the items in the root directory.

## Config.yml

Config.yml is the place for settings that affect the whole site. This is the place where I declared `rouge` as my syntax highlighter and my projects `collection`. Many configurations take place here, such as setting meta data like site title and description. Another thing to note is the `exclude` declaration.

```yaml
exclude:
  - trackerkeeper/node_modules/ngtouch/contributions.md
  - trackerkeeper/node_modules/ngtouch/roadmap.md
  - trackerkeeper/node_modules/angular-ui-router/CONTRIBUTING.md
```

The block above excludes markdown files that live in the base directory from appearing in the navigation.

I've also added a new permalink structure for my site in this file, as follows:

```yaml
# New permalink structure for posts
permalink: /archive/:title/
```

## URL Structure

A new Jekyll install comes with an index, about, and blog pages; similar to a WordPress install. In order to an add, for example, a blog archive or blog index page where all your posts live, you'll need to add a new layout that your navigation points to. 

It's easy to do but not exactly straightforward. Dont worry, I'll hold your hand. Say you want a page where all your blog posts live in the main nav. First thing you need to do is add a markdown file in the root directory that will act as the blog archive/index page. In this file, add the following `Front Matter`.

```yaml
---
layout: archive
title: Blog
permalink: /archive/
weight: 2
---
```

What this does is it points to an `archive` layout type (which we'll get to in a minute), names the navigation item 'Blog', uses the 'archive' permalink keyword as what it will append to the base URL, and the weight indicates what position it will appear in in the nav. An item with a weight of `1` will occur before it and a `3` will appear after it (horizontally or vertically speaking).

Next, create a new `archive` layout type that lives in the layout subdirectory. Obviously, this folder contains all the different page layout types you want for your site. You'll need `Front Matter` so the page will render correctly and a `TWIG` loop to show the posts in your `_posts` subdirectory.

```yaml
---
layout: default
---
```

```twig
<div class="home post">
  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <div>
            {% include post-thumbnail.html %}
        </div>
          <div>
            <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
            <h2>
              <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
            </h2>
            <div class="post-excerpt">{{ post.excerpt | strip_html | truncate:125 }}</div>
        </div>
      </li>
    {% endfor %}
  </ul>
</div>

{% include sidebar.html %}
```

As you can see this file uses another layout type `default` for its main structure. From here, all your posts will be displayed. And since we already declared our permalink settings in `config.yml`, when a blog post is clicked the resulting URL will be `www.<your-site>/archive/<your-blog-post>`.

## Screenshot

![Jefdewitt.com screenshot](images/jefdewitt-website.png?raw=true "Jefdewitt.com screenshot")

## Comments

Any questions or comments please send them my way [here](http://www.jefdewitt.com/connect).
