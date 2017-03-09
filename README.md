# jekyll_portfolio
This is the fifth iteration of my portfolio site and third Jekyll project overall. 

I want to use this file as a means to list my customizations, workarounds, and strategies. From enhancing syntax highlighting to handy TWIG statements and control flow, there's a lot going on here. Plus, it's been months since I build this and I've forgotten quite a lot already. It wasn't until I started helping a buddy with his Jekyll site that I realized I needed to do this. Here goes.

## Table Of Contents

- [Collections](#collections)
- [Includes](#includes)
- [Syntax Highlighting](#syntax-highlighting)
- [Navigation](#navigation)
- [Config.yml](#config)

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

The `_includes` directory contains portions of code to be reused or included on whatever pages or posts you like. Things like the footer, header, head, and sidebar are obvious choices for inclusion. What isn't so obvious is how includes can be used to store and organize `svg` files and subsequent blocks of `html` to cleanly place them in the appropriate spots. For example, I have a file `icon-email.html`,

```html
<a href="mailto:myemail@gmail.com">
    <span class="icon icon--email">{% include icon-email.svg %}</span>
    <span class="username">{{ include.username }}</span>
</a>
```

It references the `icon-email.svg` file. The reason for doing it this way is to keep the root and image directories from getting needlessly cluttered with additional items AND anything inside the `_includes` folder can be 'included' with a simple TWIG include statement. It just further componentizes my code.

Another useful include is my `post-thumbnail.html` file. By including this in my post's template I can loop thru content looking for images, return the first occurrence, and then display that as the blog post thumbnail.

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

Includes are a great way for incorporating workarounds for common problems without having to touch templates. A simple include statement in a markdown file allows you to add functionality with precision, only where it's needed. Thanks to Adam Harris's [article](http://www.adamwadeharris.com/how-to-easily-embed-youtube-videos-in-jekyll-sites-without-a-plugin/) I found a great way for embedding YouTube videos easily with no 3rd party plugins.

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












