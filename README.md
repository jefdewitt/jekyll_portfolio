# jekyll_portfolio
This is the fifth iteration of my portfolio site and third Jekyll project overall. 

I want to use this file as a means to list my customizations, workarounds, and strategies. From enhancing syntax highlighting to handy TWIG statements and control flow, there's a lot going on here. Plus, it's been months since I build this and I've forgotten quite a lot already. It wasn't until I started helping a buddy with his Jekyll site that I realized I needed to do this. Here goes.

## Table Of Contents

- [Collections](#collections)
- [Includes](#includes)
- [Syntax Highlighting](#syntax-highlighting)
- [Navigation](#navigation)
- [Config.yml](#config)
- [URL Structure](#url-structure)

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

Another useful include is my `post-thumbnail.html`. By including this in my post's template I can loop thru content looking for images, return the first occurrence, and then display that as the blog post thumbnail. But I can keep all this logic squared away in a separate file and only need to include it where I want it.

This...

```twig
{% include post-thumbnail.html %}
```

...equals this.

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

Anything inside the `_includes` folder can be 'included' with a single TWIG include statement.

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






